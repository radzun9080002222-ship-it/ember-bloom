import React from 'react';
import { Sparkles, Heart, Award, Leaf } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroBg from '@/assets/hero-bg.jpg';

const About: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'С любовью',
      description: 'Каждая свеча создаётся вручную с особым вниманием к деталям',
    },
    {
      icon: Leaf,
      title: 'Натуральные материалы',
      description: 'Используем только качественный соевый воск и натуральные добавки',
    },
    {
      icon: Award,
      title: 'Уникальный дизайн',
      description: 'Авторские формы и техники декорирования',
    },
    {
      icon: Sparkles,
      title: 'Ручная роспись',
      description: 'Декорирование золотом и акриловыми красками',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroBg}
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>

          <div className="relative container mx-auto px-4 text-center">
            <span className="text-sm tracking-widest uppercase text-ocean-secondary font-medium">
              О мастерской
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground mt-4 mb-6">
              Море Воска
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Искусство декоративных свечей ручной работы
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 lg:py-24 bg-ocean-foam">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-ocean-lg">
                  <img
                    src={heroBg}
                    alt="Мастерская"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-ocean-accent to-ocean-secondary rounded-2xl -z-10" />
              </div>

              <div>
                <h2 className="font-serif text-4xl font-light text-foreground mb-6">
                  Наша история
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    «Море Воска» — это авторская мастерская декоративных свечей, 
                    где каждое изделие создаётся с особой любовью и вниманием к деталям.
                  </p>
                  <p>
                    Меня зовут Александра, и я занимаюсь созданием уникальных свечей 
                    уже несколько лет. Моя страсть — превращать обычный воск в 
                    произведения искусства, которые украшают дома и создают 
                    неповторимую атмосферу.
                  </p>
                  <p>
                    Каждая свеча проходит долгий путь: от выбора формы и цвета 
                    до финальной росписи и декорирования. Я использую только 
                    качественные материалы и авторские техники, чтобы каждое 
                    изделие было по-настоящему особенным.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-light text-foreground">
                Почему выбирают нас
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-card shadow-ocean hover:shadow-ocean-md transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-ocean flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 lg:py-24 bg-gradient-ocean text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-light">
                Как создаются свечи
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Идея', desc: 'Разработка концепции и выбор формы' },
                { step: '02', title: 'Заливка', desc: 'Подготовка воска и заливка в форму' },
                { step: '03', title: 'Декор', desc: 'Роспись и декорирование деталей' },
                { step: '04', title: 'Готово', desc: 'Финальная проверка и упаковка' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-serif font-light text-primary-foreground/30 mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
