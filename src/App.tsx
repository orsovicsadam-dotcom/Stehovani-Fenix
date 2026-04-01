import { Phone, Mail, MapPin, Shield, Euro, Truck, Package, Users, CheckCircle, Sofa, Trash2, Warehouse, ChevronRight, MessageCircle, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Děkujeme! Brzy se vám ozveme.');
      setFormData({ name: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <img 
                src="/Stěhování-Fénix-logo.jpg" 
                alt="Logo Stěhování Fénix" 
                className="h-12 w-auto object-contain transform hover:scale-110 transition-transform rounded" 
              />
              <span className={`text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent`}>
                Stěhování Fénix
              </span>
            </div>
            <button
              onClick={scrollToContact}
              className="hidden sm:block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Kontaktujte nás
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Už žádný stres
              </span>
              <br />
              <span className="text-gray-900">ze stěhování</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Postaráme se o vše – v ČR i po celé Evropě
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Jako fénix, který povstává z popela, pomůžeme vám začít novou kapitolu bez starostí.
              Stěhování s námi znamená nový začátek bez stresu, kde se postaráme o každý detail.
            </p>
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Nezávazná kalkulace zdarma</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* About / Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Stěhování nemusí být <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">noční můra</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Staráme se o každý detail vašeho stěhování, abyste vy mohli mít klid.
              Od zabalení první krabice až po vybalení v novém domově – jsme tu pro vás.
              Jednoduše, bezstarostně, profesionálně.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Proč si vybrat <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Fénix</span>?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Stěhování po celé Evropě',
                description: 'Neomezujeme se jen na Česko. Stěhujeme bezpečně a rychle po celé Evropě.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: '8+ let zkušeností',
                description: 'Díky letitým zkušenostem víme, jak na každé stěhování – malé i velké.'
              },
              {
                icon: <Package className="w-8 h-8" />,
                title: 'Kompletní servis',
                description: 'Od zabalení, přes transport, až po vybalení. Postaráme se o vše.'
              },
              {
                icon: <Euro className="w-8 h-8" />,
                title: 'Transparentní ceny',
                description: 'Žádné skryté poplatky. Co vidíte v kalkulaci, to zaplatíte.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Pojištění zásilek',
                description: 'Váš majetek je u nás v bezpečí. Všechny zásilky jsou plně pojištěny.'
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: 'Stěhujeme cokoli',
                description: 'Byty, kanceláře, těžká břemena – žádná výzva není příliš velká.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Naše <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">služby</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Package className="w-10 h-10" />,
                title: 'Balící služba',
                description: 'Profesionální zabalení vašich věcí do kvalitních obalových materiálů.'
              },
              {
                icon: <Sofa className="w-10 h-10" />,
                title: 'Demontáž a montáž',
                description: 'Rozebereme a složíme váš nábytek rychle a bezpečně.'
              },
              {
                icon: <Trash2 className="w-10 h-10" />,
                title: 'Ekologická likvidace',
                description: 'Zbavíme vás nepotřebných věcí ekologicky a odpovědně.'
              },
              {
                icon: <Warehouse className="w-10 h-10" />,
                title: 'Skladovací prostory',
                description: 'Pronájem bezpečných skladů pro dočasné uložení vašeho majetku.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="text-center group hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 p-8 rounded-2xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Jak to funguje?
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: '01',
                title: 'Kontaktujete nás',
                description: 'Zavolejte, napište email nebo vyplňte formulář. Rádi vám poradíme.'
              },
              {
                number: '02',
                title: 'Připravíme kalkulaci',
                description: 'Na základě vašich potřeb vytvoříme nezávaznou cenovou nabídku.'
              },
              {
                number: '03',
                title: 'Postaráme se o stěhování',
                description: 'Vy se už o nic nestaráte. My vyřídíme zbytek od A do Z.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="text-7xl font-bold mb-6 opacity-30 group-hover:opacity-50 transition-opacity">
                  {step.number}
                </div>
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-12 h-12 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/90 text-lg leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Začněte <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">bez stresu</span> ještě dnes
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Získejte nezávaznou kalkulaci zdarma a nechte starosti na nás.
          </p>
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-5 rounded-lg text-xl font-bold shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Získat kalkulaci zdarma</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Kontaktujte <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">nás</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Máte dotazy?</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Rádi vám poradíme a připravíme cenovou nabídku na míru. Neváhejte nás kontaktovat!
                </p>

                <div className="space-y-6">
                  <a href="tel:+420774876759" className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Telefon</div>
                      <div className="text-lg font-semibold text-gray-900">+420 774 876 759</div>
                    </div>
                  </a>

                  <a href="mailto:stehovanifenix@gmail.com" className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="text-lg font-semibold text-gray-900">stehovanifenix@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/420774876759"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">WhatsApp</div>
                      <div className="text-lg font-semibold text-gray-900">Napište nám</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Napište nám</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Jméno a příjmení
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Jan Novák"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="+420 774 876 759"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Zpráva
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="Popište nám vaše požadavky na stěhování..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Odesílání...' : 'Odeslat nezávaznou poptávku'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <img 
                  src="/Stěhování-Fénix-logo.jpg" 
                  alt="Logo Stěhování Fénix" 
                  className="h-10 w-auto object-contain rounded" 
                />
                <span className="text-2xl font-bold">Stěhování Fénix</span>
              </div>
              <a 
                href="https://www.facebook.com/profile.php?id=61583368424282" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Stěhování Fénix. Všechna práva vyhrazena.
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}

export default App;
