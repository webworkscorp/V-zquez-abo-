import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle, ChevronRight, Scale, ShieldCheck, Award, Globe, Menu, X, ArrowRight, ArrowUpRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const CONTACT = {
  phones: ["+506 7140 2211", "+506 2101 3204"],
  email: "info@vasquezabogadoscr.com",
  location: "200 metros sur, 25 oeste de CoopeFlores, San Joaquín de Flores",
  hours: {
    "Lun-Vie": "09:00–18:00",
    "Sáb": "08:00–12:00"
  }
};

const AREAS = [
  { id: "01", name: "Derecho Migratorio", desc: "Asesoría completa en trámites de residencia, visas, permisos de trabajo, naturalización y procesos ante Migración. Te acompañamos paso a paso para que tu proceso sea claro, seguro y sin errores que puedan atrasarlo." },
  { id: "02", name: "Defensa Penal", desc: "Representación legal en procesos penales, desde denuncias e investigaciones hasta juicios. Analizamos tu caso con detalle, construimos una estrategia sólida y protegemos tus derechos en todo momento." },
  { id: "03", name: "Derecho de Familia", desc: "Divorcios, pensiones alimentarias, guarda y crianza, régimen de visitas y procesos de adopción. Trabajamos con firmeza y sensibilidad, buscando acuerdos justos y protegiendo el bienestar de tu familia." },
  { id: "04", name: "Servicios Notariales", desc: "Redacción y autenticación de contratos, poderes, declaraciones juradas, traspasos y constitución de sociedades. Nos aseguramos de que cada documento cumpla con la ley y te brinde total respaldo legal." }
];

const TEAM = [
  { 
    name: "Fransuá Vásquez Rojas", 
    role: "Director de la Firma Vásquez Abogados",
    image: "https://i.imgur.com/aIsl2tX.jpeg",
    desc: "Bachiller y Licenciado en Derecho de la Universidad Escuela Libre Derecho graduado de Honor con la mención Summa Cum Laude Probatus. Especialista en Derecho Notarial y Registral de la Universidad Escuela Libre Derecho. Doctorando en Derecho Penal de la Universidad Escuela Libre Derecho."
  },
  { 
    name: "Camila Garcia Lopez", 
    role: "Asistente Legal",
    image: "https://i.imgur.com/OvwBEH7.jpeg",
    desc: "Atención de servicio al cliente. Idioma de inglés B2."
  },
  { 
    name: "Lic. Joselyn Rodriguez Mora", 
    role: "Abogada y Notario Pública",
    desc: "Bachiller y licenciada en Derecho por la Universidad Escuela Libre de Derecho. Especialista en Derecho Notarial y Registral."
  },
  { 
    name: "Lic. Joel González Vega", 
    role: "Abogado",
    image: "https://i.imgur.com/zYZpLW8.jpeg",
    desc: "Licenciado en Derecho por la Universidad Hispanoamericana. Encargado de trámites de Cobro Judicial y Resolución Alterna de Conflictos. Bachiller en Derecho por la Universidad Escuela Libre de Derecho. Abogado y mediador."
  },
  { 
    name: "Genesis Vasquez Rojas", 
    role: "Departamento de Comunicación",
    image: "https://i.imgur.com/UZ5PITH.jpeg",
    desc: "Bachiller en Relaciones Públicas por la Universidad Latina de Costa Rica. Especialista en el manejo de Redes Sociales y Marketing Digital. Licenciatura en Producción Audiovisual."
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      {/* Navigation - Architectural Minimal */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white py-4 border-b border-line' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/p6Q2Yww.png" 
              className={`h-16 md:h-24 w-auto object-contain transition-all duration-500 ${!isScrolled ? 'brightness-0 invert' : ''}`}
              alt="Vásquez Abogados Logo"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className={`hidden lg:flex items-center gap-12 text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-500 ${isScrolled ? 'text-primary/40' : 'text-white/40'}`}>
            <a href="#firma" className={`hover:text-primary transition-colors ${!isScrolled && 'hover:text-white'}`}>La Firma</a>
            <a href="#especialidad" className={`hover:text-primary transition-colors ${!isScrolled && 'hover:text-white'}`}>Especialidad</a>
            <a href="#equipo" className={`hover:text-primary transition-colors ${!isScrolled && 'hover:text-white'}`}>El Consejo</a>
            <a href="#contacto" className={`px-8 py-3 transition-all duration-300 ${isScrolled ? 'bg-primary text-white hover:bg-accent' : 'bg-white text-primary hover:bg-white/90'}`}>
              Contacto
            </a>
          </div>

          <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className={isScrolled ? 'text-primary' : 'text-white'} size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-12"
          >
            <button className="self-end mb-24" onClick={() => setMobileMenuOpen(false)}>
              <X size={32} className="text-primary" />
            </button>
            <div className="flex flex-col gap-8 text-4xl font-display font-medium">
              <a href="#firma" onClick={() => setMobileMenuOpen(false)}>La Firma</a>
              <a href="#especialidad" onClick={() => setMobileMenuOpen(false)}>Especialidad</a>
              <a href="#equipo" onClick={() => setMobileMenuOpen(false)}>El Consejo</a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section - Professional Cover */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">
          {/* Background Image - High Sharpness with Subtle Zoom */}
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              src="https://i.imgur.com/LYjt5v8.jpeg" 
              className="w-full h-full object-cover"
              alt="Legal Architecture"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 mt-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-5xl md:text-[80px] leading-[0.9] mb-12 text-white font-display font-bold tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                Firmes en Defensa. <br />
                <span className="text-white/80">Humanos en Asesoría.</span>
              </h1>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href="#contacto" className="bg-white text-black px-12 py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all shadow-2xl">
                  Iniciar Consulta
                </a>
                <a href="#especialidad" className="bg-transparent border border-white text-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all shadow-2xl">
                  Ver Servicios
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Vertical Rail */}
          <div className="absolute bottom-12 left-12 hidden xl:block">
            <span className="vertical-text text-[8px] uppercase tracking-[0.8em] text-white/20 font-bold">
              SAN JOAQUÍN DE FLORES • COSTA RICA
            </span>
          </div>

          {/* Data Overlay */}
          <div className="absolute bottom-12 right-12 text-white/20 text-right hidden lg:block">
            <p className="data-value">LAT: 10.0039° N</p>
            <p className="data-value">LNG: 84.1492° W</p>
            <p className="data-value">EST: 2010</p>
          </div>
        </section>

        {/* The Firm - Grid Layout */}
        <section id="firma" className="py-40 border-y border-line">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-24 items-start"
            >
              <div className="lg:col-span-5">
                <span className="micro-label mb-8 block">LA FIRMA</span>
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-12 leading-[1.1] tracking-tighter text-primary">
                  Convertimos problemas legales en <br className="hidden md:block" /> soluciones reales.
                </h2>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="overflow-hidden shadow-2xl"
                >
                  <img 
                    src="https://i.imgur.com/16iCtgU.jpeg" 
                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    alt="Legal Precision"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
              <div className="lg:col-span-7 space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="text-lg font-medium text-primary">Nuestra Misión</p>
                    <p className="text-sm text-primary/50 leading-relaxed font-light">
                      Vásquez Abogados es una firma de abogados en Costa Rica, cuyo objetivo es brindar servicios legales de confianza y al alcance de todas las personas.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg font-medium text-primary">Compromiso Humano</p>
                    <p className="text-sm text-primary/50 leading-relaxed font-light">
                      Nos dedicamos a proteger los intereses de nuestros clientes con integridad y profesionalismo, manteniendo siempre una visión humana que nos permite ofrecer soluciones legales efectivas y personalizadas.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise - Professional Architectural Grid */}
        <section id="especialidad" className="bg-white border-y border-line overflow-hidden">
          <div className="grid lg:grid-cols-12">
            {/* Left Column - Header */}
            <div className="lg:col-span-4 p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-line bg-white">
              <div className="flex flex-col h-full justify-between">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="micro-label mb-8 block tracking-[0.6em]">ESPECIALIDAD</span>
                  <h2 className="text-6xl md:text-7xl font-display font-bold leading-[0.85] tracking-tighter text-primary">
                    Áreas de <br /> 
                    Práctica.
                  </h2>
                </motion.div>
              </div>
            </div>
            
            {/* Right Column - Animated Grid */}
            <div className="lg:col-span-8 grid md:grid-cols-2">
              {AREAS.map((area, idx) => (
                <motion.div 
                  key={area.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative p-12 md:p-16 border-b border-r border-line transition-all duration-700 hover:bg-[#050505] hover:text-white"
                >
                  <h3 className="text-3xl font-display font-bold mb-6 tracking-tighter transition-colors duration-500">
                    {area.name}
                  </h3>
                  
                  <p className="text-sm text-primary/50 group-hover:text-white/50 leading-relaxed font-light mb-16 max-w-sm transition-colors duration-500">
                    {area.desc}
                  </p>

                  <div className="flex items-center gap-4 text-primary/30 group-hover:text-white transition-all duration-500">
                    <div className="h-px w-8 bg-current"></div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Explorar</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team - Architectural Portraits */}
        <section id="equipo" className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row justify-between items-end mb-24"
            >
              <div>
                <span className="micro-label mb-4 block">EQUIPO</span>
                <h2 className="text-5xl font-display font-bold tracking-tighter">Liderazgo <br /> Profesional.</h2>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
              {TEAM.map((member, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-12 group flex flex-col"
                >
                  {member.image && (
                    <div className="aspect-[3/4] mb-10 overflow-hidden transition-all duration-700">
                      <img 
                        src={member.image} 
                        className="w-full h-full object-contain transition-transform duration-700" 
                        alt={member.name} 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                  )}
                  <h4 className="text-xl font-display font-bold text-primary mb-2">{member.name}</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40 mb-6">{member.role}</p>
                  <p className="text-sm text-primary/60 font-light leading-relaxed mt-auto">
                    {member.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Guarantee Section */}
        <section className="py-24 bg-[#fafafa] border-b border-line">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto px-6 text-center"
          >
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-primary text-primary" />
              ))}
            </div>
            <h3 className="text-3xl font-display font-bold tracking-tighter mb-4">Calidad garantizada</h3>
            <p className="text-primary/40 text-[10px] uppercase tracking-[0.4em] font-bold">Excelencia en cada proceso legal</p>
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-32 bg-white border-b border-line">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-20"
            >
              <span className="micro-label text-primary/30 mb-8 block">¿POR QUÉ ELEGIRNOS?</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter leading-tight mb-6">
                Destacados por <br /> múltiples razones.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { label: "Años de experiencia", value: "+10" },
                { label: "Tipos de casos", value: "+9" },
                { label: "Clientes felices", value: "+1,423" }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 border border-line/50 hover:border-primary/20 transition-colors duration-500"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 mb-4">{stat.label}</p>
                  <p className="text-6xl font-display font-bold text-primary mb-2">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-32 bg-[#fafafa] border-b border-line overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="micro-label text-primary/30 mb-8 block">TESTIMONIOS</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter leading-tight mb-6">
                Lo que dicen <br /> nuestros clientes.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-white p-10 shadow-sm border border-line/50">
                <div className="flex gap-1 text-[#FFD700] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg font-light italic text-primary/80 mb-8 leading-relaxed">
                  "Su atención, compromiso y entrega en el trabajo. Excelente asesoría y consejería."
                </p>
                <div>
                  <p className="font-display font-bold text-primary">Milly Flores</p>
                  <p className="text-[10px] uppercase tracking-widest text-primary/40 mt-1">Cliente Verificado</p>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white p-10 shadow-sm border border-line/50">
                <div className="flex gap-1 text-[#FFD700] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg font-light italic text-primary/80 mb-8 leading-relaxed">
                  "Un profesional comprometido con su trabajo. Totalmente recomendado."
                </p>
                <div>
                  <p className="font-display font-bold text-primary">Diana Gonzalez</p>
                  <p className="text-[10px] uppercase tracking-widest text-primary/40 mt-1">Cliente Verificado</p>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-white p-10 shadow-sm border border-line/50">
                <div className="flex gap-1 text-[#FFD700] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg font-light italic text-primary/80 mb-8 leading-relaxed">
                  "Gracias a su intervención logré resolver mi situación legal de manera rápida y efectiva. Muy agradecido."
                </p>
                <div>
                  <p className="font-display font-bold text-primary">Carlos Méndez</p>
                  <p className="text-[10px] uppercase tracking-widest text-primary/40 mt-1">Cliente Verificado</p>
                </div>
              </div>

               {/* Review 4 */}
               <div className="bg-white p-10 shadow-sm border border-line/50 hidden md:block">
                <div className="flex gap-1 text-[#FFD700] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg font-light italic text-primary/80 mb-8 leading-relaxed">
                  "Excelente servicio, muy profesionales y atentos en todo momento. Me sentí respaldada."
                </p>
                <div>
                  <p className="font-display font-bold text-primary">Sofía Ramírez</p>
                  <p className="text-[10px] uppercase tracking-widest text-primary/40 mt-1">Cliente Verificado</p>
                </div>
              </div>

               {/* Review 5 */}
               <div className="bg-white p-10 shadow-sm border border-line/50 hidden md:block">
                <div className="flex gap-1 text-[#FFD700] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg font-light italic text-primary/80 mb-8 leading-relaxed">
                  "La claridad con la que explican los procesos legales es invaluable. Gran equipo humano."
                </p>
                <div>
                  <p className="font-display font-bold text-primary">Jorge Villalobos</p>
                  <p className="text-[10px] uppercase tracking-widest text-primary/40 mt-1">Cliente Verificado</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact - Simplified Premium Section */}
        <section id="contacto" className="bg-[#fcfcfc] py-40 border-t border-line">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <span className="micro-label text-primary/30 mb-8 block">CONTACTO DIRECTO</span>
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter leading-[0.9] mb-6">
                Hablemos de su caso.
              </h2>
              <p className="text-primary/40 text-sm font-light max-w-lg mx-auto">
                Estamos listos para analizar su situación con la rigurosidad que merece.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-white p-12 md:p-16 border border-line shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]"
            >
              <form 
                className="space-y-12"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const message = formData.get('message');
                  const text = `Hola, mi nombre es ${name}. Consulta: ${message}`;
                  window.open(`https://wa.me/50621013204?text=${encodeURIComponent(text)}`, '_blank');
                }}
              >
                <div className="group space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/30 group-focus-within:text-primary transition-colors">Nombre Completo</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-line py-4 outline-none text-lg font-light focus:border-primary transition-all placeholder:text-primary/10" 
                    placeholder="Escriba su nombre" 
                  />
                </div>

                <div className="group space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/30 group-focus-within:text-primary transition-colors">Detalle de su consulta</label>
                  <textarea 
                    name="message"
                    required
                    rows={6} 
                    className="w-full bg-transparent border-b border-line py-4 outline-none text-lg font-light focus:border-primary transition-all placeholder:text-primary/10 resize-none" 
                    placeholder="Describa brevemente su situación legal..."
                  ></textarea>
                </div>

                <button type="submit" className="group relative w-full py-6 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.4em] overflow-hidden transition-all duration-500 hover:bg-black">
                  <span className="relative z-10">Enviar Consulta</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer - Professional Detailed */}
      <footer className="py-24 bg-white border-t border-line">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            {/* Brand Column */}
            <div className="col-span-1">
              <img 
                src="https://i.imgur.com/p6Q2Yww.png" 
                className="h-16 w-auto object-contain mb-8" 
                alt="Vásquez Abogados Logo"
                referrerPolicy="no-referrer"
              />
              <p className="text-primary/40 text-xs font-light leading-relaxed max-w-xs">
                Firma legal comprometida con la excelencia técnica y la defensa rigurosa de sus intereses.
              </p>
            </div>

            {/* Contact Info Column */}
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Phone size={12} className="text-primary/20" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/20">Contacto</span>
              </div>
              <div className="space-y-4">
                {CONTACT.phones.map(phone => (
                  <p key={phone} className="text-sm font-medium text-primary/60">{phone}</p>
                ))}
                <p className="text-sm font-medium text-primary/60">{CONTACT.email}</p>
              </div>
            </div>

            {/* Location Column */}
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={12} className="text-primary/20" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/20">Ubicación</span>
              </div>
              <p className="text-sm font-medium text-primary/60 leading-relaxed">
                {CONTACT.location}
              </p>
            </div>

            {/* Social Column */}
            <div className="col-span-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary/20 mb-6 block">Síganos</span>
              <div className="flex gap-6">
                <a href="https://www.facebook.com/share/18PwuicvXY/?mibextid=wwXIfr" target="_blank" className="text-primary/30 hover:text-primary transition-colors" title="Facebook"><Facebook size={18} /></a>
                <a href="https://www.instagram.com/vasquezabogados?igsh=N2luM2trenNoa2d3" target="_blank" className="text-primary/30 hover:text-primary transition-colors" title="Instagram"><Instagram size={18} /></a>
                <a href={`https://wa.me/${CONTACT.phones[0].replace(/\D/g, '')}`} target="_blank" className="text-primary/30 hover:text-primary transition-colors" title="WhatsApp"><MessageCircle size={18} /></a>
                <a href={`mailto:${CONTACT.email}`} className="text-primary/30 hover:text-primary transition-colors" title="Gmail"><Mail size={18} /></a>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-line flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="text-[9px] font-mono text-primary/20 uppercase tracking-widest">© 2026 VÁSQUEZ ABOGADOS</span>
            <div className="flex gap-12 text-[9px] uppercase tracking-[0.3em] font-bold text-primary/20 cursor-default">
              <span className="hover:text-primary transition-colors">Privacidad</span>
              <span className="hover:text-primary transition-colors">Términos</span>
              <span className="hover:text-primary transition-colors">Legal</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action - WhatsApp Brand */}
      <a 
        href="https://wa.me/50621013204" 
        target="_blank" 
        className="fixed bottom-12 right-12 z-50 w-14 h-14 bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-full"
        title="Chat en WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
