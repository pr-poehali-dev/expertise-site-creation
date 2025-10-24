import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = [
    {
      icon: "Building2",
      title: "Строительно-техническая экспертиза",
      description: "Комплексная оценка технического состояния зданий и сооружений с выдачей экспертного заключения"
    },
    {
      icon: "MapPin",
      title: "Землеустроительная экспертиза",
      description: "Определение границ земельных участков, анализ правоустанавливающих документов"
    },
    {
      icon: "FileCheck",
      title: "Судебная экспертиза",
      description: "Проведение независимых экспертиз для судебных разбирательств с подготовкой заключений"
    },
    {
      icon: "Home",
      title: "Оценка недвижимости",
      description: "Профессиональная оценка рыночной стоимости объектов недвижимости"
    }
  ];

  const expertiseTypes = [
    {
      icon: "Shield",
      title: "Экспертиза качества строительства",
      items: ["Контроль качества материалов", "Проверка соответствия проекту", "Выявление дефектов и нарушений"]
    },
    {
      icon: "Ruler",
      title: "Геодезическая экспертиза",
      items: ["Межевание земельных участков", "Вынос границ в натуру", "Топографическая съемка"]
    },
    {
      icon: "ClipboardCheck",
      title: "Техническое обследование",
      items: ["Оценка несущих конструкций", "Анализ инженерных систем", "Экспертиза после ЧП"]
    },
    {
      icon: "Scale",
      title: "Досудебная экспертиза",
      items: ["Независимая оценка", "Составление заключений", "Консультации специалистов"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Building" className="text-primary" size={32} />
              <span className="font-heading text-xl font-bold text-secondary">ЭкспертПро</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#expertise" className="text-foreground hover:text-primary transition-colors">Виды экспертиз</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:inline-flex">Заказать экспертизу</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4 md:mb-6 leading-tight">
                Независимая экспертная организация
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Профессиональное проведение строительно-технических и землеустроительных экспертиз. 
                Более 15 лет опыта, аккредитованные специалисты, полное юридическое сопровождение.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Наши документы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">15+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">2000+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">экспертиз</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">100%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">надёжность</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in mt-8 lg:mt-0">
              <img 
                src="https://cdn.poehali.dev/projects/b66ca075-88f9-4417-99df-e0e37d0db499/files/23aeb73e-c77d-4f54-b6f1-43c14622aaf7.jpg"
                alt="Экспертное здание"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-6 rounded-lg shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-secondary">Аккредитация</div>
                    <div className="text-sm text-muted-foreground">Минюст РФ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр экспертных услуг в области строительства и землеустройства
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-secondary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Виды экспертиз</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Специализированные экспертизы для решения различных задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {expertiseTypes.map((type, index) => (
              <Card 
                key={index}
                className="animate-fade-in hover:shadow-lg transition-shadow border-border"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={type.icon as any} className="text-primary" size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-secondary">{type.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {type.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="hidden sm:grid grid-cols-2 gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/b66ca075-88f9-4417-99df-e0e37d0db499/files/eec7b2c2-d795-4954-ab22-0d81e59c0f30.jpg"
                alt="Строительная экспертиза"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img 
                src="https://cdn.poehali.dev/projects/b66ca075-88f9-4417-99df-e0e37d0db499/files/80147af3-95fe-4951-8eb5-14ff6205bed4.jpg"
                alt="Землеустроительная экспертиза"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
                Почему выбирают нас
              </h2>
              <div className="space-y-6">
                {[
                  { icon: "Users", title: "Опытные эксперты", text: "Команда аттестованных специалистов с профильным образованием" },
                  { icon: "Clock", title: "Соблюдение сроков", text: "Гарантируем выполнение работ в установленные договором сроки" },
                  { icon: "ShieldCheck", title: "Юридическая защита", text: "Полное сопровождение при судебных разбирательствах" },
                  { icon: "BadgeCheck", title: "Официальные документы", text: "Все заключения имеют юридическую силу" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-secondary mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку и получите бесплатную консультацию эксперта
            </p>
          </div>
          <Card className="border-border">
            <CardContent className="p-4 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Телефон</label>
                    <Input 
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Сообщение</label>
                  <Textarea 
                    placeholder="Опишите вашу задачу..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
              <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-medium text-secondary text-sm mb-1">Телефон</div>
                    <div className="text-muted-foreground text-sm">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-medium text-secondary text-sm mb-1">Email</div>
                    <div className="text-muted-foreground text-sm">info@expertpro.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-medium text-secondary text-sm mb-1">Адрес</div>
                    <div className="text-muted-foreground text-sm">г. Москва, ул. Примерная, 1</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building" size={28} />
                <span className="font-heading text-xl font-bold">ЭкспертПро</span>
              </div>
              <p className="text-white/70 text-sm">
                Независимая экспертная организация с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Строительная экспертиза</li>
                <li>Землеустроительная экспертиза</li>
                <li>Судебная экспертиза</li>
                <li>Оценка недвижимости</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>О нас</li>
                <li>Наши эксперты</li>
                <li>Лицензии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@expertpro.ru</li>
                <li>Пн-Пт: 9:00 - 18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            © 2024 ЭкспертПро. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;