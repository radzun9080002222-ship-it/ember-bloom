import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/contexts/ProductContext';
import heroBg from '@/assets/hero-bg.jpg';

const Index: React.FC = () => {
  const { products } = useProducts();
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const latestProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroBg}
              alt="Декоративные свечи"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-ocean-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
                <Sparkles className="w-5 h-5 text-gold-light" />
                <span className="text-sm tracking-widest uppercase text-primary-foreground/80">
                  Ручная работа
                </span>
                <Sparkles className="w-5 h-5 text-gold-light" />
              </div>

              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                МОРЕ ВОСКА
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
                Погрузитесь в мир декоративных свечей ручной работы. 
                Каждая свеча — это уникальное произведение искусства, 
                созданное с любовью и вниманием к деталям.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <Link to="/catalog">
                  <Button variant="hero" size="xl" className="gap-2 w-full sm:w-auto">
                    Смотреть каталог
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="gold" size="xl" className="w-full sm:w-auto">
                    О мастере
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-sm tracking-widest uppercase text-ocean-secondary font-medium">
                  Бестселлеры
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mt-2">
                  Популярные свечи
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {featuredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* About Preview */}
        <section className="py-20 lg:py-28 bg-ocean-foam">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-sm tracking-widest uppercase text-ocean-secondary font-medium">
                  О нас
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mt-2 mb-6">
                  Искусство в каждой детали
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  «Море Воска» — это мастерская декоративных свечей ручной работы. 
                  Каждое изделие создаётся с особым вниманием к деталям: от выбора 
                  натуральных материалов до финальной росписи золотом.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Наши свечи — это не просто источник света, это произведения искусства, 
                  которые украсят ваш дом и станут идеальным подарком для близких.
                </p>
                <Link to="/about">
                  <Button variant="ocean" size="lg" className="gap-2">
                    Узнать больше
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-ocean-lg">
                  <img
                    src={heroBg}
                    alt="Наша мастерская"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-ocean-accent to-ocean-secondary rounded-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-gold to-gold-light rounded-full -z-10 animate-pulse-glow" />
              </div>
            </div>
          </div>
        </section>

        {/* All Products Preview */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm tracking-widest uppercase text-ocean-secondary font-medium">
                Каталог
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mt-2">
                Наши изделия
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {latestProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/catalog">
                <Button variant="outline" size="lg" className="gap-2">
                  Все товары
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-ocean text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
              Сделайте заказ сегодня
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Свяжитесь с нами для индивидуального заказа или выберите готовые 
              изделия из нашего каталога. Доставка по всей России.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalog">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Перейти в каталог
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="gold" size="xl" className="w-full sm:w-auto">
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
