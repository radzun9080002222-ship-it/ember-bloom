import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div
      className={cn(
        "group relative bg-card rounded-2xl overflow-hidden shadow-ocean transition-all duration-500 hover:shadow-ocean-lg hover:-translate-y-2",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        {product.images[0] ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ocean-foam to-muted">
            <span className="font-serif text-4xl text-ocean-light">🕯️</span>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick actions */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Link to={`/product/${product.id}`} className="flex-1">
            <Button variant="glass" size="sm" className="w-full gap-2">
              <Eye className="w-4 h-4" />
              Подробнее
            </Button>
          </Link>
          <Button
            variant="ocean"
            size="icon"
            onClick={handleAddToCart}
            disabled={product.inStock === 0}
            className="shrink-0"
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>

        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-gold to-gold-light text-ocean-deep text-xs font-semibold rounded-full">
            Хит
          </div>
        )}

        {/* Out of stock badge */}
        {product.inStock === 0 && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-destructive text-destructive-foreground text-xs font-medium rounded-full">
            Нет в наличии
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs text-ocean-secondary font-medium tracking-wider uppercase">
          {product.category}
        </span>
        <h3 className="font-serif text-xl font-medium text-foreground mt-1 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-serif text-2xl font-semibold text-ocean-primary">
            {product.price.toLocaleString('ru-RU')} ₽
          </span>
          {product.inStock > 0 && product.inStock <= 5 && (
            <span className="text-xs text-gold font-medium">
              Осталось {product.inStock} шт.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
