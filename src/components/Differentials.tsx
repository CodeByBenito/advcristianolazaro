import { motion } from 'motion/react';
import { Lightbulb, BookMarked, HeartHandshake, MessageSquare } from 'lucide-react';

const differentials = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Abordagem Estratégica',
    description: 'Análise minuciosa e planejamento personalizado para cada caso, buscando sempre a melhor solução jurídica.',
  },
  {
    icon: <BookMarked className="w-8 h-8" />,
    title: 'Base Acadêmica',
    description: 'Aplicação prática do rigor científico e da constante atualização doutrinária e jurisprudencial.',
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: 'Atendimento Humanizado',
    description: 'Compreensão da urgência e do impacto emocional de cada caso, com acolhimento e respeito ao cliente.',
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Transparência',
    description: 'Comunicação clara, objetiva e constante sobre o andamento e as perspectivas do processo.',
  },
];

export default function Differentials() {
  return (
    <section className="py-16 md:py-24 bg-dark-900 text-white relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/justice/1920/1080" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/90 to-dark-900"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Por que me <span className="text-gold-500">escolher?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Diferenciais que garantem uma atuação de excelência e resultados expressivos na defesa dos seus direitos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto bg-dark-800 border border-gray-700 rounded-full flex items-center justify-center text-gold-500 mb-6 shadow-lg shadow-gold-500/10">
                {diff.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{diff.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
