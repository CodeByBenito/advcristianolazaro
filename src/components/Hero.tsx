import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Scale } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { isCounter: true, to: 20, suffix: '+', label: 'Anos de Experiência' },
  { isCounter: true, to: 500, suffix: '+', label: 'Casos Atendidos' },
  { isCounter: false, value: 'Dr.', label: 'Doutorando UFBA' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-24 md:pt-28 md:pb-32 bg-dark-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1a2033_0%,_#080d14_65%)]"></div>

      {/* Subtle diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #d4af37 0px,
            #d4af37 1px,
            transparent 1px,
            transparent 70px
          )`,
        }}
      ></div>

      {/* Gold glow orbs */}
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-gold-400/4 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gold-400/3 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      {/* Decorative center background svg */}
      <motion.div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 opacity-[0.02] pointer-events-none"
        animate={{ y: [-15, 15, -15], rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Scale className="w-[800px] h-[800px] text-white" strokeWidth={0.5} />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-gold-400/30 bg-gold-400/5 rounded-full px-4 py-2 mb-8"
            >
              <Scale className="text-gold-400 w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-gold-400 text-xs font-medium uppercase tracking-widest">
                Defesa Criminal Estratégica
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-serif font-bold text-white leading-[1.15] mb-6">
              Proteção Jurídica e{' '}
              <span className="text-gold-400">Defesa Criminal</span>{' '}
              Estratégica
            </h1>

            <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
              Atuação combativa e especializada para resguardar seus direitos com a
              máxima discrição e excelência técnica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href="https://contate.me/profcristianolazaro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-dark-900 bg-gold-400 hover:bg-gold-300 rounded-full transition-all duration-300 shadow-lg shadow-gold-400/25 hover:shadow-gold-400/40 hover:-translate-y-0.5"
              >
                Consulta Gratuita via WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-gray-300 border border-gray-700 hover:border-gold-400/50 hover:text-gold-400 rounded-full transition-all duration-300"
              >
                Conheça minha trajetória
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-between sm:justify-start gap-x-6 gap-y-8 sm:gap-8 pt-8 border-t border-gray-800/80 w-full">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
                >
                  <p className="text-2xl lg:text-3xl font-serif font-bold text-gold-400">
                    {stat.isCounter ? (
                      <AnimatedCounter to={stat.to!} suffix={stat.suffix} />
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end"
          >
            {/* Decorative rotated frame behind image */}
            <div className="absolute -inset-3 border border-gold-400/12 rounded-3xl rotate-2 pointer-events-none"></div>

            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                <img
                  src="https://i.ibb.co/KzV02QJt/Whats-App-Image-2026-04-14-at-9-25-56-AM.jpg"
                  alt="Dr. Cristiano Lázaro Fiuza"
                  className="object-cover w-full aspect-[4/5] opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-dark-900/10 to-transparent"></div>

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-serif font-bold text-xl leading-tight">
                    Dr. Cristiano Lázaro Fiuza
                  </p>
                  <p className="text-gold-400 text-sm mt-1">Doutorando em Direito · UFBA</p>
                </div>
              </div>

              {/* Floating OAB badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-6 top-1/3 bg-dark-800/90 backdrop-blur-sm border border-gold-400/20 p-4 rounded-2xl shadow-2xl"
              >
                <p className="text-gold-400 font-serif font-bold text-xl leading-none">OAB/BA</p>
                <p className="text-gray-400 text-xs mt-1.5 leading-snug max-w-[130px]">
                  Ordem dos Advogados do Brasil
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-gray-600" />
        </motion.div>
      </motion.div>

      {/* Bottom SVG Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-auto fill-light-50"
          preserveAspectRatio="none"
        >
          <path d="M0,100 L1440,100 L1440,50 C1140,100 300,0 0,50 Z"></path>
        </svg>
      </div>
    </section>
  );
}
