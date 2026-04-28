import { motion } from 'motion/react';
import { Lightbulb, BookMarked, HeartHandshake, MessageSquare } from 'lucide-react';
import RevealText from './RevealText';
import TiltCard from './TiltCard';

const differentials = [
  {
    icon: Lightbulb,
    title: 'Abordagem Estratégica',
    description:
      'Análise minuciosa e planejamento personalizado para cada caso, buscando sempre a melhor solução jurídica.',
  },
  {
    icon: BookMarked,
    title: 'Base Acadêmica',
    description:
      'Aplicação prática do rigor científico e da constante atualização doutrinária e jurisprudencial.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento Humanizado',
    description:
      'Compreensão da urgência e do impacto emocional de cada caso, com acolhimento e respeito ao cliente.',
  },
  {
    icon: MessageSquare,
    title: 'Transparência Total',
    description:
      'Comunicação clara, objetiva e constante sobre o andamento e as perspectivas do processo.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-dark-900 bg-noise text-white relative overflow-hidden">
      {/* CSS dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle, #d4af37 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      ></div>

      {/* Radial gradient accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-400/4 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold-400/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Diferenciais
          </p>
          <RevealText as="h2" className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Por que me <span className="text-gold-400">escolher?</span>
          </RevealText>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Diferenciais que garantem uma atuação de excelência e resultados expressivos
            na defesa dos seus direitos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="h-full"
              >
                <TiltCard className="h-full">
                  <div className="group bg-dark-800/50 border border-gray-800 rounded-2xl p-8 hover:border-gold-400/30 hover:bg-dark-800 transition-colors duration-300 h-full">
                    <div className="w-14 h-14 bg-dark-900 border border-gray-700 group-hover:border-gold-400/40 rounded-xl flex items-center justify-center text-gold-400 mb-6 transition-all duration-300 group-hover:shadow-md group-hover:shadow-gold-400/10">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3">{diff.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{diff.description}</p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
