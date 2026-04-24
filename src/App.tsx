import { Phone, Mail, MapPin, Shield, Euro, Truck, Package, Users, CheckCircle, Sofa, Trash2, Warehouse, ChevronRight, MessageCircle, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', from: '', to: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      setFormData({ name: '', phone: '', service: '', from: '', to: '', message: '' });
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
            <section className="relative h-[85vh] flex items-center overflow-hidden bg-gray-900">
              <div className="absolute inset-0">
                <img 
                  src="/Hero-image.jpg" 
                  alt="Stěhování Fénix" 
                  className="w-full h-full object-cover object-center"
                />
                {/* Overlay: dark gradient darker on left for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl animate-fade-in text-left">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight text-white">
                    Stěhování bez stresu
                    <br />
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                      po Praze, ČR i Evropě
                    </span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed">
                    Rychlé termíny, férový odhad ceny a zkušenosti i s těžkými břemeny. Často zvládneme stěhování ještě ten den.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
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
                image: '/image1.jpg',
                title: 'Stěhování bytů a domů',
                description: 'Kompletní stěhování domácností rychle a bez starostí.'
              },
              {
                image: '/image2.jpg',
                title: 'Stěhování firem',
                description: 'Přestěhujeme kanceláře i celé provozy.'
              },
              {
                image: '/image3.jpg',
                title: 'Těžká břemena',
                description: 'Zajistíme bezpečný přesun těžkých věcí.'
              },
              {
                image: '/image4.jpg',
                title: 'Montáž nábytku',
                description: 'Nábytek rozebereme i znovu složíme.'
              },
              {
                image: '/image5.jpg',
                title: 'Převoz zboží',
                description: 'Dovezeme nákup z obchodů jako Hornbach nebo Sconto.'
              },
              {
                image: '/image7.jpg',
                title: 'Likvidace pozůstalostí',
                description: 'Pomůžeme s vyklizením a odvozem věcí.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
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
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Kolik stojí <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">stěhování</span>?
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="text-xl font-medium text-gray-900">
                Cena stěhování se vždy odvíjí od konkrétní zakázky.
              </p>
              <p>Záleží především na:</p>
              <ul className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
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
              <div className="pt-6 space-y-6 border-t border-gray-100">
                <p className="font-semibold text-gray-900">
                  Každou zakázku naceníme individuálně na základě vašich požadavků.
                </p>
                <p>
                  Pro lepší představu si můžete prohlédnout náš orientační ceník.
                </p>
                <div className="pt-4">
                  <Link
                    to="/cenik"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300"
                  >
                    <span>Zobrazit ceník</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
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

      {/* Realizations Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ukázky <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">realizací</span>
            </h2>
            <p className="text-xl text-gray-600">
              Reálné ukázky naší práce – vyklízení, montáže i přeprava.
            </p>
          </div>

          <div className="space-y-16">
            {/* Block 1: Vyklízení prostor */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Vyklízení prostor</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { src: '/before1.jpeg', label: 'PŘED' },
                  { src: '/after1.jpeg', label: 'PO' },
                  { src: '/before3.jpeg', label: 'PŘED' },
                  { src: '/after3.jpeg', label: 'PO' }
                ].map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">
                      {img.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-lg">
                Kompletní vyklizení prostor včetně odvozu a ekologické likvidace.
              </p>
            </div>

            {/* Block 2: Montáž nábytku */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Montáž nábytku</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { src: '/montage-before.jpeg', label: 'PŘED' },
                  { src: '/montage-after.jpeg', label: 'PO' }
                ].map((img, i) => (
                  <div key={i} className="relative aspect-[16/9] md:aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">
                      {img.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-lg">
                Demontáž, převoz a opětovná montáž nábytku na nové adrese.
              </p>
            </div>

            {/* Block 3: Přeprava */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Přeprava</h3>
              <div className="max-w-3xl mx-auto mb-6">
                <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-md">
                  <img src="/transport2.jpeg" alt="Přeprava" className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-gray-600 text-lg text-center">
                Bezpečný převoz vybavení a nábytku pomocí profesionálně vybaveného vozu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Reference <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">zákazníků</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: '/Recenze1.JPG', alt: 'Reference 1' },
              { src: '/Recenze2.JPG', alt: 'Reference 2' },
              { src: '/Recenze3.JPG', alt: 'Reference 3' }
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-2 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={review.src}
                    alt={review.alt}
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Často kladené <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">otázky</span>
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: "Kolik stojí stěhování?",
                a: "Cena závisí na čase, vzdálenosti, množství věcí a náročnosti zakázky."
              },
              {
                q: "Jak dlouho dopředu objednat?",
                a: "Individuálně. Často je možné zajistit stěhování i ve stejný den."
              },
              {
                q: "Stěhujete o víkendech a svátcích?",
                a: "Ano, pracujeme i o víkendech, svátcích a po domluvě i v noci."
              },
              {
                q: "Jak řešíte těžké věci?",
                a: "Individuálně podle váhy a podmínek. Na základě informací uděláme odhad ceny."
              },
              {
                q: "Jak probíhá objednávka?",
                a: "Zavoláte nebo napíšete, popíšete zakázku a my připravíme odhad ceny."
              },
              {
                q: "Je cena pevná?",
                a: "Pevná cena je možná, ale bývá vyšší. Obvykle pracujeme s odhadem."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${openFaq === index ? 'rotate-90' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                    O jakou službu máte zájem?
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="" disabled>Vyberte službu...</option>
                    <option value="Stěhování bytu / domu">Stěhování bytu / domu</option>
                    <option value="Stěhování firmy">Stěhování firmy</option>
                    <option value="Těžká břemena">Těžká břemena</option>
                    <option value="Montáž nábytku">Montáž nábytku</option>
                    <option value="Vyklízení prostor">Vyklízení prostor</option>
                    <option value="Jiný požadavek">Jiný požadavek</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Odkud
                    </label>
                    <input
                      type="text"
                      value={formData.from}
                      onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Např. Praha 3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Kam
                    </label>
                    <input
                      type="text"
                      value={formData.to}
                      onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Např. Brno"
                    />
                  </div>
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
          <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Naše <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">služby</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Zajišťujeme kompletní stěhovací služby pro jednotlivce i firmy. Každou zakázku řešíme individuálně podle vašich potřeb.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    image: '/image1.jpg',
                    title: 'Stěhování bytů a domů',
                    description: 'Postaráme se o kompletní stěhování vaší domácnosti. Od naložení až po vyložení na nové adrese – rychle, bezpečně a bez zbytečných starostí.'
                  },
                  {
                    image: '/image2.jpg',
                    title: 'Stěhování firem',
                    description: 'Zajistíme stěhování kanceláří, skladů i celých provozů. Pracujeme efektivně, abychom co nejméně narušili váš chod firmy.'
                  },
                  {
                    image: '/image3.jpg',
                    title: 'Těžká břemena',
                    description: 'Máme zkušenosti se stěhováním těžkých věcí jako jsou trezory, stroje nebo klavíry. Každou zakázku řešíme individuálně podle náročnosti.'
                  },
                  {
                    image: '/image4.jpg',
                    title: 'Montáž a demontáž nábytku',
                    description: 'Nábytek rozebereme, bezpečně převezeme a znovu složíme na novém místě. Nemusíte se o nic starat.'
                  },
                  {
                    image: '/image5.jpg',
                    title: 'Převoz zboží z obchodů',
                    description: 'Dovezeme nákup z obchodů jako Hornbach, Sconto a dalších. Zajistíme odvoz i vynesení až k vám domů.'
                  },
                  {
                    image: '/image6.jpg',
                    title: 'Převoz palet a zboží pro firmy',
                    description: 'Zajišťujeme převoz palet a dalšího zboží pro firmy po celé ČR i Evropě.'
                  },
                  {
                    image: '/image7.jpg',
                    title: 'Likvidace pozůstalostí',
                    description: 'Pomůžeme s vyklizením bytů nebo domů včetně odvozu a ekologické likvidace věcí.'
                  },
                  {
                    image: '/image8.jpg',
                    title: 'Stěhování v rámci budovy',
                    description: 'Potřebujete přesunout věci jen v rámci jedné budovy? Žádný problém – zajistíme rychlý a bezpečný přesun.'
                  },
                  {
                    image: '/image9.jpg',
                    title: 'Samostatná montáž nábytku',
                    description: 'Možnost objednat pouze montáž nebo demontáž nábytku bez stěhování.'
                  }
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA SECTION */}
              <div className="mt-20 text-center bg-gradient-to-br from-orange-500 to-red-600 p-12 rounded-3xl shadow-2xl text-white">
                <h2 className="text-3xl font-bold mb-4">Nevíte si jistí, co přesně potřebujete?</h2>
                <p className="text-xl mb-10 opacity-90">Ozvěte se nám a připravíme řešení na míru.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:+420774876759"
                    className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-bold shadow-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Zavolat</span>
                  </a>
                  <Link
                    to="/"
                    onClick={() => {
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-xl hover:bg-black transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  >
                    <span>Nezávazná poptávka</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link to="/" className="text-gray-500 hover:text-orange-600 font-semibold transition-colors flex items-center justify-center space-x-2">
                  <span>Zpět na úvodní stránku</span>
                </Link>
              </div>
            </div>
          </div>
        } />
        <Route path="/cenik" element={
          <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Ceník <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">stěhování</span>
                </h1>
                <div className="max-w-2xl mx-auto space-y-4">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Cena stěhování se vždy odvíjí od konkrétní zakázky. Záleží na vzdálenosti, čase, množství věcí a náročnosti práce.
                  </p>
                  <p className="text-lg font-semibold text-orange-600">
                    Níže najdete orientační ceník pro lepší představu.
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                {/* SECTION 1: DOPRAVA */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                      <Truck className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Doprava</h2>
                  </div>
                  <ul className="space-y-4 text-lg">
                    <li className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-600">Praha</span>
                      <span className="font-bold text-gray-900 text-right">přistavení vozidla zdarma</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-600">Mimo Prahu</span>
                      <span className="font-bold text-orange-600 text-right">17 Kč / km</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-600">Po Evropě</span>
                      <span className="font-bold text-orange-600 text-right">19 Kč / km <span className="text-sm font-normal text-gray-400">+ mýtné a poplatky</span></span>
                    </li>
                  </ul>
                </div>

                {/* SECTION 2: PRACOVNÍCI */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                      <Users className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Sazby za pracovníky</h2>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                        <Truck className="w-5 h-5 text-orange-500" />
                        <span>Auto + řidič</span>
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">první hodina</span>
                          <span className="font-bold text-gray-900">1500 Kč</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">každá další hodina</span>
                          <span className="font-bold text-orange-600">1000 Kč</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[
                        { label: 'Dva pracovníci', price: '1100 Kč / hodina' },
                        { label: 'Tři pracovníci', price: '1500 Kč / hodina' },
                        { label: 'Čtyři pracovníci', price: '1900 Kč / hodina' }
                      ].map((item, index) => (
                        <div key={index} className="border border-gray-100 p-4 rounded-xl text-center">
                          <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                          <div className="font-bold text-gray-900">{item.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SECTION 3: TĚŽKÁ BŘEMENA */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                      <Package className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Těžká břemena</h2>
                  </div>
                  <ul className="space-y-4 text-lg">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-600">100–199 kg</span>
                      <span className="font-bold text-gray-900 text-right">1200 Kč <span className="text-sm font-normal text-gray-400">+ 300 Kč za patro nebo delší přenos</span></span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-600">200–299 kg</span>
                      <span className="font-bold text-gray-900 text-right">2400 Kč <span className="text-sm font-normal text-gray-400">+ 400 Kč za patro</span></span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-600">300–399 kg</span>
                      <span className="font-bold text-gray-900 text-right">3500 Kč <span className="text-sm font-normal text-gray-400">+ 500 Kč za patro</span></span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-600">Nad 400 kg</span>
                      <span className="font-bold text-orange-600 text-right">individuální nacenění</span>
                    </li>
                  </ul>
                </div>

                {/* SECTION 4: OBALOVÝ MATERIÁL */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                      <Package className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Obalový materiál</h2>
                  </div>
                  <ul className="space-y-4 text-lg">
                    <li className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-600">Strečová fólie</span>
                      <span className="font-bold text-gray-900 text-right">300 Kč</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-600">Ostatní materiál (bublinková fólie apod.)</span>
                      <span className="font-bold text-orange-600 text-right">dle domluvy</span>
                    </li>
                  </ul>
                </div>

                {/* SECTION 5: DALŠÍ SLUŽBY A INFORMACE */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Další informace</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      'Cena zahrnuje přistavení vozidla (v Praze zdarma)',
                      'Neúčtujeme příplatky za víkendy ani svátky',
                      'Montáž a demontáž nábytku je zahrnuta v ceně',
                      'Patra neúčtujeme navíc (pokud se nejedná o věci nad 100 kg)',
                      'Možnost objednat pouze montáž nábytku nebo stěhování v rámci budovy',
                      'Zajišťujeme i převoz zboží z obchodů (Hornbach, Sconto apod.)',
                      'Možnost převozu palet pro firmy',
                      'Likvidace pozůstalostí dle hodinové sazby + čas na sběrném dvoře'
                    ].map((info, index) => (
                      <div key={index} className="flex items-start space-x-3 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                        <span>{info}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION 6: NOČNÍ PŘÍPLATEK */}
                <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Noční příplatek</h2>
                  <p className="text-lg text-gray-700">
                    Pokud zakázka začíná po <span className="font-bold">22:00</span>, účtujeme příplatek <span className="text-orange-600 font-bold">40 %</span> k finální ceně.
                  </p>
                </div>

                {/* SECTION 7: DŮLEŽITÉ UPOZORNĚNÍ */}
                <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                  <h2 className="text-2xl font-bold text-red-900 mb-4">Důležité upozornění</h2>
                  <div className="space-y-4 text-lg text-red-800">
                    <p>
                      Ceny jsou orientační a vždy záleží na konkrétní zakázce.
                    </p>
                    <p className="font-bold">
                      Přesnou cenu nelze určit předem, proto vždy připravujeme individuální odhad na základě vašich požadavků.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA SECTION */}
              <div className="mt-20 text-center bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl shadow-2xl text-white">
                <h2 className="text-3xl font-bold mb-8">Chcete znát přesnou cenu?</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/"
                    onClick={() => {
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  >
                    <span>Získat nezávaznou kalkulaci</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:+420774876759"
                    className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-bold shadow-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Zavolat</span>
                  </a>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link to="/" className="text-gray-500 hover:text-orange-600 font-semibold transition-colors flex items-center justify-center space-x-2">
                  <span>Zpět na úvodní stránku</span>
                </Link>
              </div>
            </div>
          </div>
        } />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/Stěhování-Fénix-logo.jpg" 
                  alt="Logo Stěhování Fénix" 
                  className="h-10 w-auto object-contain rounded" 
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Stěhování Fénix
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Jako fénix, který povstává z popela, pomáháme klientům začít novou kapitolu bez starostí. Postaráme se o celé stěhování od A do Z.
              </p>
            </div>

            {/* Column 2: Služby */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Naše služby</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="hover:text-orange-500 transition-colors">Stěhování bytů a domů</li>
                <li className="hover:text-orange-500 transition-colors">Stěhování firem</li>
                <li className="hover:text-orange-500 transition-colors">Těžká břemena</li>
                <li className="hover:text-orange-500 transition-colors">Montáž nábytku</li>
                <li className="hover:text-orange-500 transition-colors">Vyklízení prostor</li>
              </ul>
            </div>

            {/* Column 3: Rychlé odkazy */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Rychlé odkazy</h3>
              <ul className="space-y-4 text-gray-400">
                <li><Link to="/" className="hover:text-orange-500 transition-colors">Úvod</Link></li>
                <li><Link to="/sluzby" className="hover:text-orange-500 transition-colors">Naše služby</Link></li>
                <li><Link to="/cenik" className="hover:text-orange-500 transition-colors">Ceník</Link></li>
                <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-orange-500 transition-colors">Kontakt</button></li>
              </ul>
            </div>

            {/* Column 4: Kontakt */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Kontakt</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Praha a okolí / ČR a Evropa</span>
                </li>
                <li>
                  <a href="tel:+420774876759" className="flex items-center space-x-3 hover:text-orange-500 transition-colors">
                    <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>+420 774 876 759</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:stehovanifenix@gmail.com" className="flex items-center space-x-3 hover:text-orange-500 transition-colors">
                    <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>stehovanifenix@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/420774876759" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-orange-500 transition-colors">
                    <MessageCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li className="pt-2">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61583368424282" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-gray-500 text-sm">
              © 2026 Stěhování Fénix. Všechna práva vyhrazena.
            </div>
            <div className="text-gray-500 text-xs uppercase tracking-widest hidden md:block">
              Spolehlivost • Rychlost • Tradice
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}

export default App;
