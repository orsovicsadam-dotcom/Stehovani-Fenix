import { Phone, Mail, MapPin, Shield, Euro, Truck, Package, Users, CheckCircle, Sofa, Trash2, Warehouse, ChevronRight, MessageCircle, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

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
            <div className="hidden md:flex items-center space-x-8 text-gray-700 font-semibold">
              <Link to="/" className="hover:text-orange-600 transition-colors">Úvod</Link>
              <Link to="/sluzby" className="hover:text-orange-600 transition-colors">Naše služby</Link>
              <Link to="/cenik" className="hover:text-orange-600 transition-colors">Ceník</Link>
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

      <Routes>
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Stěhování bez stresu</span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                po Praze, ČR i Evropě
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Rychlé termíny, férový odhad ceny a zkušenosti i s těžkými břemeny. Často zvládneme stěhování ještě ten den.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+420774876759"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Zavolat</span>
              </a>
              <a
                href="https://wa.me/420774876759"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-bold shadow-xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-white text-gray-900 border-2 border-orange-500 px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Nezávazná poptávka</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
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
                icon: <Truck className="w-8 h-8" />,
                title: 'Rychlé termíny',
                description: 'Často zvládneme stěhování ještě ten samý den.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Stěhování nonstop',
                description: 'Pracujeme o víkendech, svátcích i v nočních hodinách.'
              },
              {
                icon: <Package className="w-8 h-8" />,
                title: 'Zkušenosti s těžkými břemeny',
                description: 'Poradíme si i s věcmi nad 100 kg.'
              },
              {
                icon: <Euro className="w-8 h-8" />,
                title: 'Férový odhad ceny',
                description: 'Cena se odvíjí od času, vzdálenosti a náročnosti zakázky.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Kompletní servis',
                description: 'Zajistíme stěhování, montáže i další služby.'
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Package className="w-10 h-10" />,
                title: 'Stěhování bytů a domů',
                description: 'Kompletní stěhování domácností rychle a bez starostí.'
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Stěhování firem',
                description: 'Přestěhujeme kanceláře i celé provozy.'
              },
              {
                icon: <Truck className="w-10 h-10" />,
                title: 'Těžká břemena',
                description: 'Zajistíme bezpečný přesun těžkých věcí.'
              },
              {
                icon: <Sofa className="w-10 h-10" />,
                title: 'Montáž nábytku',
                description: 'Nábytek rozebereme i znovu složíme.'
              },
              {
                icon: <Warehouse className="w-10 h-10" />,
                title: 'Převoz zboží',
                description: 'Dovezeme nákup z obchodů jako Hornbach nebo Sconto.'
              },
              {
                icon: <Trash2 className="w-10 h-10" />,
                title: 'Likvidace pozůstalostí',
                description: 'Pomůžeme s vyklizením a odvozem věcí.'
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

          <div className="mt-16 text-center">
            <Link 
              to="/sluzby" 
              className="inline-flex items-center space-x-2 bg-white text-gray-900 border-2 border-orange-500 px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-300"
            >
              <span>Zobrazit všechny služby</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              Kolik stojí <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">stěhování</span>?
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="text-xl font-medium text-gray-900 text-center">
                Cena se vždy odvíjí od konkrétní zakázky. Nedá se určit jednotná částka předem.
              </p>
              <p className="text-center">Záleží především na:</p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  'čase stráveném na zakázce',
                  'vzdálenosti mezi adresami',
                  'množství věcí',
                  'náročnosti stěhování'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center pt-6 font-semibold text-gray-900 border-t border-gray-100">
                Každou zakázku naceníme individuálně na základě informací od vás.
              </p>
            </div>
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
    </>
  } />
        <Route path="/sluzby" element={
          <div className="pt-32 pb-20 px-4 min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold mb-6">Naše služby</h1>
            <p className="text-xl text-gray-600 mb-8">Momentálně na obsahu pro vás pracujeme.</p>
            <Link to="/" className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg">Zpět na úvod</Link>
          </div>
        } />
        <Route path="/cenik" element={
          <div className="pt-32 pb-20 px-4 min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold mb-6">Ceník služeb</h1>
            <p className="text-xl text-gray-600 mb-8">Momentálně na obsahu pro vás pracujeme.</p>
            <Link to="/" className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg">Zpět na úvod</Link>
          </div>
        } />
      </Routes>

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
