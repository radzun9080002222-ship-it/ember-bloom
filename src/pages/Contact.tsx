import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data
    toast({
      title: 'Сообщение отправлено!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-ocean text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">
              Связаться с нами
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Остались вопросы? Хотите сделать индивидуальный заказ? 
              Мы всегда рады помочь!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-3xl font-light text-foreground mb-8">
                  Контактная информация
                </h2>

                <div className="space-y-6 mb-10">
                  <a
                    href="tel:+79195654505"
                    className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-ocean hover:shadow-ocean-md transition-shadow group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-ocean flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-ocean-primary transition-colors">
                        Телефон
                      </h3>
                      <p className="text-muted-foreground">8 (919) 565-45-05</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@morevoska.ru"
                    className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-ocean hover:shadow-ocean-md transition-shadow group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-ocean flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-ocean-primary transition-colors">
                        Email
                      </h3>
                      <p className="text-muted-foreground">info@morevoska.ru</p>
                    </div>
                  </a>

                  <a
                    href="https://vk.com/alexandra.radzun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-ocean hover:shadow-ocean-md transition-shadow group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-ocean flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-ocean-primary transition-colors">
                        ВКонтакте
                      </h3>
                      <p className="text-muted-foreground">@alexandra.radzun</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-ocean">
                    <div className="w-12 h-12 rounded-full bg-gradient-ocean flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Доставка</h3>
                      <p className="text-muted-foreground">По всей России</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-ocean-foam">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                    Индивидуальные заказы
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Создаём свечи на заказ по вашему эскизу или идее. 
                    Свяжитесь с нами для обсуждения деталей и стоимости.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-3xl font-light text-foreground mb-8">
                  Напишите нам
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Как к вам обращаться?"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Телефон
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Сообщение *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Ваш вопрос или пожелания..."
                    />
                  </div>

                  <Button type="submit" variant="ocean" size="lg" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
