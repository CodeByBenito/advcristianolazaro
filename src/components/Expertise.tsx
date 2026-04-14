import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const areas = [
  {
    title: 'Direito Penal',
    description: 'Defesa técnica em inquéritos e processos criminais, garantindo o respeito ao devido processo legal e aos direitos fundamentais.',
  },
  {
    title: 'Direito Administrativo',
    description: 'Atuação em processos administrativos disciplinares, improbidade administrativa e defesa de servidores públicos.',
  },
  {
    title: 'Defesa Criminal Estratégica',
    description: 'Planejamento e execução de defesas complexas, com foco em resultados e mitigação de danos.',
  },
  {
    title: 'Consultoria Jurídica',
    description: 'Orientação preventiva para empresas e pessoas físicas, evitando litígios e passivos criminais.',
  },
];

export default function Expertise() {
  return (
    <section id="atuacao" className="py-16 md:py-24 bg-light-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-900 mb-4">
            Minhas Áreas de <span className="text-gold-500">Atuação</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Foco em áreas estratégicas para oferecer a melhor defesa e consultoria jurídica, aliando conhecimento acadêmico e prática forense.
          </p>
        </div>

        <div className="space-y-0">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-b border-gray-300 py-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/50 transition-colors px-4 -mx-4 rounded-xl cursor-pointer"
            >
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-2xl font-serif font-semibold text-dark-900 group-hover:text-gold-600 transition-colors">
                  {area.title}
                </h3>
              </div>
              <div className="md:w-1/2 pr-8">
                <p className="text-gray-600">
                  {area.description}
                </p>
              </div>
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-gold-500 hover:bg-gold-600 rounded-full transition-colors duration-300 shadow-lg shadow-gold-500/20"
          >
            Agendar Consulta
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
