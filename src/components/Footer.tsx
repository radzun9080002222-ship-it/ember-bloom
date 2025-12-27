import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ocean-deep text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-semibold mb-4 text-ocean-light">
              МОРЕ ВОСКА
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Искусство декоративных свечей ручной работы. Каждая свеча — это уникальное произведение,
              созданное с любовью и вниманием к деталям.
            </p>
            <p className="text-sm text-ocean-light font-medium">CANDLE SHOP</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4 text-ocean-light">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/70 hover:text-ocean-accent transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-sm text-primary-foreground/70 hover:text-ocean-accent transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-ocean-accent transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-ocean-accent transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4 text-ocean-light">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-ocean-accent" />
                <a href="tel:+79195654505" className="hover:text-ocean-accent transition-colors">
                  8 (919) 565-45-05
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-ocean-accent" />
                <a href="mailto:info@morevoska.ru" className="hover:text-ocean-accent transition-colors">
                  info@morevoska.ru
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-ocean-accent mt-0.5" />
                <span>Россия, доставка по всей стране</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4 text-ocean-light">Мы в соцсетях</h4>
            <div className="space-y-3">
              <a
                href="https://vk.com/alexandra.radzun"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-primary-foreground/70 hover:text-ocean-accent transition-colors"
              >
                ВКонтакте
              </a>
              <p className="text-xs text-primary-foreground/50 mt-4">
                Александра Разун — мастер по созданию уникальных декоративных свечей
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Море Воска. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
