import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Award, Scale } from 'lucide-react';

const milestones = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Doutorando em Direito',
    institution: 'UFBA',
    description: 'Pesquisa avançada em ciências criminais, aprofundando o conhecimento teórico para aplicação prática.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Mestre em Direito',
    institution: 'UCSAL',
    description: 'Dissertação focada em garantias fundamentais e processo penal.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Professor',
    institution: 'UCSAL, Difusão Múltipla, Acadepol',
    description: 'Docência no ensino superior e na formação de agentes de segurança pública.',
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: 'Especialista',
    institution: 'Direito Penal e Administrativo',
    description: 'Atuação técnica e especializada nas áreas mais sensíveis do direito público.',
  },
];

export default function Authority() {
  return (
    <section id="trajetoria" className="py-16 md:py-24 bg-dark-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-dark-800/50 skew-x-12 translate-x-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Trajetória de <span className="text-gold-500">Excelência</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A união entre a base acadêmica sólida e a experiência prática forense, garantindo uma atuação técnica, estratégica e combativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-800 border border-gray-800 p-8 rounded-2xl hover:border-gold-500/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-dark-900 border border-gray-700 rounded-xl flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                {milestone.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">{milestone.title}</h3>
              <p className="text-gold-500 text-sm font-medium mb-4 uppercase tracking-wider">{milestone.institution}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
