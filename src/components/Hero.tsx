import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-32 md:pb-24 bg-dark-900 overflow-hidden">
      {/* Background Pattern/Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-dark-800 via-dark-900 to-dark-900"></div>
      
      {/* Decorative Gold Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-dark-800/50 border border-gray-800 rounded-full px-4 py-2 mb-8">
              <span className="text-gold-500 text-sm">⚖️</span>
              <span className="text-gray-300 text-xs font-medium uppercase tracking-widest">Defesa Estratégica & Autoridade</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Proteção Jurídica e <br/>
              <span className="text-gold-500">Defesa Criminal</span> Estratégica
            </h1>
            
            <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
              Atuação combativa e especializada para resguardar seus direitos com a máxima discrição e excelência técnica.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://contate.me/profcristianolazaro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-dark-900 bg-gold-500 hover:bg-gold-400 rounded-full transition-colors duration-300 shadow-lg shadow-gold-500/20"
              >
                Fale com um especialista agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#sobre"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white border border-gray-700 hover:border-gold-500 hover:text-gold-500 rounded-full transition-colors duration-300"
              >
                <Phone className="mr-2 h-4 w-4" />
                Conheça minha trajetória
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative w-full aspect-[4/5] rounded-t-full overflow-hidden border-b-0 border-4 border-dark-800 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/lawyer/800/1000" 
                alt="Dr. Cristiano Lázaro Fiuza" 
                className="object-cover w-full h-full opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute bottom-10 -left-10 bg-dark-800 border border-gray-700 p-6 rounded-2xl shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center">
                  <span className="text-gold-500 font-serif font-bold text-xl">20+</span>
                </div>
                <div>
                  <p className="text-white font-medium">Anos de Experiência</p>
                  <p className="text-gray-400 text-sm">Acadêmica e Prática</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      {/* Bottom Curve/Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-light-50" preserveAspectRatio="none">
          <path d="M0,120 L1440,120 L1440,60 C1140,120 300,0 0,60 Z"></path>
        </svg>
      </div>
    </section>
  );
}
