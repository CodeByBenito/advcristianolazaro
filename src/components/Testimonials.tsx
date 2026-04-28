import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import RevealText from './RevealText';

const testimonials = [
  {
    quote:
      'O Dr. Cristiano Lázaro foi fundamental no momento mais difícil da minha vida. Sua competência técnica e clareza me deram a segurança que eu precisava. Acompanhou cada passo com dedicação extrema.',
    name: 'Carlos M.',
    role: 'Cliente de Defesa Criminal',
  },
  {
    quote:
      'Profissionalismo impecável. A estratégia adotada foi brilhante e o resultado superou nossas expectativas. Recomendo de olhos fechados para qualquer questão complexa.',
    name: 'Roberto S.',
    role: 'Empresário',
  },
  {
    quote:
      'A consultoria preventiva nos salvou de um passivo enorme. A visão estratégica e o conhecimento profundo do Dr. Cristiano Lázaro fazem toda a diferença.',
    name: 'Ana P.',
    role: 'Diretora Executiva',
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-dark-900 border-t border-white/5 relative">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">
            Depoimentos
          </p>
          <RevealText as="h2" className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            O que dizem <span className="text-gold-400">Meus Clientes</span>
          </RevealText>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Histórias reais de clientes que confiaram em meu trabalho para proteger
            seus direitos e patrimônio.
          </p>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group bg-dark-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg shadow-black/40 border border-white/5 flex flex-col relative hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/5"
            >
              {/* Decorative quote mark */}
              <div className="absolute top-6 right-6 text-gold-400/10 group-hover:text-gold-400/20 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <StarRating />

              <p className="text-gray-300 italic leading-relaxed flex-1 text-sm">
                "{testimonial.quote}"
              </p>

              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="font-serif font-bold text-white">{testimonial.name}</p>
                <p className="text-gold-400 text-xs font-medium mt-0.5">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div className="relative bg-dark-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg shadow-black/40 border border-white/5 min-h-[300px] flex flex-col justify-center">
            <div className="absolute top-6 right-6 text-gold-400/10">
              <Quote className="w-10 h-10" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <StarRating />
                <p className="text-gray-300 italic leading-relaxed text-sm">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="font-serif font-bold text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gold-400 text-xs font-medium mt-0.5">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-6 bg-gold-400' : 'w-1.5 bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-dark-900 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
