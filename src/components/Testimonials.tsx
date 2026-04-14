import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "O Dr. Cristiano foi fundamental no momento mais difícil da minha vida. Sua competência técnica e clareza me deram a segurança que eu precisava. Acompanhou cada passo com dedicação extrema.",
    name: "Carlos M.",
    role: "Cliente de Defesa Criminal"
  },
  {
    quote: "Profissionalismo impecável. A estratégia adotada foi brilhante e o resultado superou nossas expectativas. Recomendo de olhos fechados para qualquer questão complexa.",
    name: "Roberto S.",
    role: "Empresário"
  },
  {
    quote: "A consultoria preventiva nos salvou de um passivo enorme. A visão estratégica e o conhecimento profundo do Dr. Cristiano fazem toda a diferença.",
    name: "Ana P.",
    role: "Diretora Executiva"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-light-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text & Controls */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-900 mb-6">
              O que dizem <br/>
              <span className="text-gold-500">Meus Clientes</span>
            </h2>
            <p className="text-gray-600 mb-10 max-w-md">
              Histórias reais de clientes que confiaram em meu trabalho para proteger seus direitos e patrimônio.
            </p>
            
            <div className="flex space-x-4">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full border border-dark-900 flex items-center justify-center text-dark-900 hover:bg-dark-900 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full bg-dark-900 flex items-center justify-center text-white hover:bg-gold-500 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 text-gold-500/20">
              <Quote className="w-24 h-24 rotate-180" />
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 relative z-10 min-h-[300px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-8">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <p className="font-serif font-bold text-dark-900 text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gold-600 text-sm font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
