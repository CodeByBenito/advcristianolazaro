import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import RevealText from './RevealText';

const stats = [
  { value: 'Doutorando', label: 'em Direito · UFBA' },
  { value: 'Mestre', label: 'em Direito · UCSAL' },
  { value: 'Professor', label: 'UCSAL & Acadepol' },
];

const highlights = [
  'Atendimento personalizado e sigiloso',
  'Análise minuciosa de cada detalhe do processo',
  'Estratégias baseadas em sólida doutrina e jurisprudência',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-light-50 relative overflow-hidden">
      {/* Subtle right-side accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-light-100 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/60">
              <img
                src="https://i.ibb.co/CKLf7ypP/Whats-App-Image-2026-04-14-at-9-25-56-AM-1.jpg"
                alt="Dr. Cristiano Lázaro Fiuza"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/15 to-transparent"></div>
            </div>
            {/* Decorative accents */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-400/8 rounded-2xl -z-10 border border-gold-400/10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-light-200 rounded-xl -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100/80"
          >
            <p className="text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3">
              — Advogado Criminalista
            </p>
            <RevealText as="h2" className="text-3xl md:text-4xl font-serif font-bold text-dark-900 mb-6 leading-tight">
              Sua Defesa. Sua Voz.<br className="hidden md:block" />{' '}
              <span className="text-gold-500">Seu Aliado Estratégico.</span>
            </RevealText>

            <div className="space-y-5 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                Com sólida formação acadêmica e vasta experiência prática, atuo na defesa
                intransigente dos direitos de meus clientes. Como professor e doutorando,
                aplico o rigor científico à prática forense, garantindo estratégias
                inovadoras e precisas para cada caso.
              </p>
              <p>
                Acredito que cada cliente merece uma defesa técnica, humana e incansável.
                Meu compromisso é com a excelência, a ética e a busca incessante pelo
                melhor resultado possível.
              </p>
            </div>

            <div className="mt-8 space-y-3.5">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-800 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <p className="text-base font-serif font-bold text-dark-900 leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://contate.me/profcristianolazaro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-dark-900 bg-gold-400 hover:bg-gold-300 rounded-full transition-all duration-300 shadow-md shadow-gold-400/20 hover:-translate-y-0.5"
              >
                Fale Comigo Agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
