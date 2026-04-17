import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Award, Scale } from 'lucide-react';
import RevealText from './RevealText';

const milestones = [
  {
    icon: GraduationCap,
    title: 'Doutorando em Direito',
    institution: 'UFBA',
    description:
      'Pesquisa avançada em ciências criminais, aprofundando o conhecimento teórico para aplicação prática.',
  },
  {
    icon: Award,
    title: 'Mestre em Direito',
    institution: 'UCSAL',
    description: 'Dissertação focada em garantias fundamentais e processo penal.',
  },
  {
    icon: BookOpen,
    title: 'Professor',
    institution: 'UCSAL · Difusão Múltipla · Acadepol',
    description: 'Docência no ensino superior e na formação de agentes de segurança pública.',
  },
  {
    icon: Scale,
    title: 'Especialista',
    institution: 'Direito Penal e Administrativo',
    description:
      'Atuação técnica e especializada nas áreas mais sensíveis do direito público.',
  },
];

export default function Authority() {
  return (
    <section id="trajetoria" className="py-20 md:py-28 bg-dark-900 bg-noise text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-400/3 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-400/4 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-400/3 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Credenciais
          </p>
          <RevealText as="h2" className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Trajetória de <span className="text-gold-400">Excelência</span>
          </RevealText>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A união entre a base acadêmica sólida e a experiência prática forense, garantindo
            uma atuação técnica, estratégica e combativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group bg-dark-800/60 border border-gray-800/80 p-8 rounded-2xl hover:border-gold-400/40 hover:bg-dark-800 transition-all duration-300 relative overflow-hidden hover:-translate-y-1"
              >
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 group-hover:from-gold-400/3 to-transparent transition-all duration-300 rounded-2xl pointer-events-none"></div>

                <div className="relative">
                  <div className="w-12 h-12 bg-dark-900 border border-gray-700/80 group-hover:border-gold-400/40 rounded-xl flex items-center justify-center text-gold-400 mb-6 transition-all duration-300 group-hover:scale-105">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-1.5 text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-gold-400 text-xs font-medium mb-4 uppercase tracking-wider">
                    {milestone.institution}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
