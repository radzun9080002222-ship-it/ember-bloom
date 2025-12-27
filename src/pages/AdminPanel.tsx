import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Plus, Pencil, Trash2, Package, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { useProducts } from '@/contexts/ProductContext';
import { Product } from '@/types/product';
import { toast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const AdminPanel: React.FC = () => {
  const { isAdmin } = useAuth();
  const { products, addProduct, updateProduct, deleteProduct, categories } = useProducts();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    inStock: '',
    imageUrl: '',
    featured: false,
  });

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
      inStock: '',
      imageUrl: '',
      featured: false,
    });
    setEditingProduct(null);
  };

  const handleOpenDialog = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price.toString(),
        category: product.category,
        inStock: product.inStock.toString(),
        imageUrl: product.images[0] || '',
        featured: product.featured || false,
      });
    } else {
      resetForm();
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const productData = {
      name: formData.name.trim(),
      description: formData.description.trim(),
      price: parseFloat(formData.price) || 0,
      category: formData.category.trim(),
      inStock: parseInt(formData.inStock) || 0,
      images: formData.imageUrl.trim() ? [formData.imageUrl.trim()] : [],
      featured: formData.featured,
    };

    if (editingProduct) {
      updateProduct(editingProduct.id, productData);
      toast({ title: 'Товар обновлён' });
    } else {
      addProduct(productData);
      toast({ title: 'Товар добавлен' });
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = (id: string) => {
    if (confirm('Удалить этот товар?')) {
      deleteProduct(id);
      toast({ title: 'Товар удалён' });
    }
  };

  const toggleFeatured = (product: Product) => {
    updateProduct(product.id, { featured: !product.featured });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="font-serif text-3xl font-light text-foreground">
                Панель администратора
              </h1>
              <p className="text-muted-foreground mt-1">
                Управление товарами магазина
              </p>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="ocean" onClick={() => handleOpenDialog()} className="gap-2">
                  <Plus className="w-4 h-4" />
                  Добавить товар
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-serif text-xl">
                    {editingProduct ? 'Редактировать товар' : 'Новый товар'}
                  </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Название *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      required
                      placeholder="Название свечи"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Описание *</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData(p => ({ ...p, description: e.target.value }))}
                      required
                      rows={3}
                      placeholder="Описание товара"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Цена (₽) *</label>
                      <Input
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData(p => ({ ...p, price: e.target.value }))}
                        required
                        min="0"
                        placeholder="1000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">В наличии *</label>
                      <Input
                        type="number"
                        value={formData.inStock}
                        onChange={(e) => setFormData(p => ({ ...p, inStock: e.target.value }))}
                        required
                        min="0"
                        placeholder="10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Категория *</label>
                    <Input
                      value={formData.category}
                      onChange={(e) => setFormData(p => ({ ...p, category: e.target.value }))}
                      required
                      placeholder="Море, Цветы, Богини..."
                      list="categories"
                    />
                    <datalist id="categories">
                      {categories.map(cat => (
                        <option key={cat} value={cat} />
                      ))}
                    </datalist>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">URL изображения</label>
                    <Input
                      type="url"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData(p => ({ ...p, imageUrl: e.target.value }))}
                      placeholder="https://..."
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={(e) => setFormData(p => ({ ...p, featured: e.target.checked }))}
                      className="w-4 h-4 rounded border-input"
                    />
                    <label htmlFor="featured" className="text-sm">
                      Показывать в "Популярных"
                    </label>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                      className="flex-1"
                    >
                      Отмена
                    </Button>
                    <Button type="submit" variant="ocean" className="flex-1">
                      {editingProduct ? 'Сохранить' : 'Добавить'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-card shadow-ocean">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ocean-foam flex items-center justify-center">
                  <Package className="w-5 h-5 text-ocean-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Всего товаров</p>
                  <p className="text-2xl font-serif font-semibold text-foreground">
                    {products.length}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-card shadow-ocean">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Популярных</p>
                  <p className="text-2xl font-serif font-semibold text-foreground">
                    {products.filter(p => p.featured).length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="bg-card rounded-xl shadow-ocean overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Товар
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Категория
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Цена
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Остаток
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted shrink-0">
                            {product.images[0] ? (
                              <img
                                src={product.images[0]}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-xl">
                                🕯️
                              </div>
                            )}
                          </div>
                          <div>
                            <Link
                              to={`/product/${product.id}`}
                              className="font-medium text-foreground hover:text-ocean-primary transition-colors"
                            >
                              {product.name}
                            </Link>
                            {product.featured && (
                              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gold/20 text-gold">
                                Хит
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-muted-foreground">
                        {product.category}
                      </td>
                      <td className="px-4 py-4 font-medium text-ocean-primary">
                        {product.price.toLocaleString('ru-RU')} ₽
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            product.inStock > 5
                              ? 'bg-ocean-foam text-ocean-secondary'
                              : product.inStock > 0
                              ? 'bg-gold/20 text-gold'
                              : 'bg-destructive/10 text-destructive'
                          }`}
                        >
                          {product.inStock} шт.
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleFeatured(product)}
                            title={product.featured ? 'Убрать из популярных' : 'Добавить в популярные'}
                          >
                            {product.featured ? (
                              <Eye className="w-4 h-4 text-gold" />
                            ) : (
                              <EyeOff className="w-4 h-4 text-muted-foreground" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleOpenDialog(product)}
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(product.id)}
                            className="hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {products.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Товаров пока нет</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPanel;
