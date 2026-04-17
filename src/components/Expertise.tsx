import { motion } from 'motion/react';
import { Scale, Building2, Shield, Briefcase } from 'lucide-react';
import RevealText from './RevealText';

const areas = [
  {
    icon: Scale,
    number: '01',
    title: 'Direito Penal',
    description:
      'Defesa técnica em inquéritos e processos criminais, garantindo o respeito ao devido processo legal e aos direitos fundamentais.',
  },
  {
    icon: Building2,
    number: '02',
    title: 'Direito Administrativo',
    description:
      'Atuação em processos administrativos disciplinares, improbidade administrativa e defesa de servidores públicos.',
  },
  {
    icon: Shield,
    number: '03',
    title: 'Defesa Criminal Estratégica',
    description:
      'Planejamento e execução de defesas complexas, com foco em resultados e mitigação de danos.',
  },
  {
    icon: Briefcase,
    number: '04',
    title: 'Consultoria Jurídica',
    description:
      'Orientação preventiva para empresas e pessoas físicas, evitando litígios e passivos criminais.',
  },
];

export default function Expertise() {
  return (
    <section id="atuacao" className="py-20 md:py-28 bg-light-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Especialidades
          </p>
          <RevealText as="h2" className="text-4xl md:text-5xl font-serif font-bold text-dark-900 mb-4">
            Minhas Áreas de <span className="text-gold-500">Atuação</span>
          </RevealText>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Foco em áreas estratégicas para oferecer a melhor defesa e consultoria jurídica,
            aliando conhecimento acadêmico e prática forense.
          </p>
        </div>

        <div className="divide-y divide-gray-200">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group py-8 flex flex-col md:flex-row md:items-center gap-5 hover:bg-white/60 transition-colors px-6 -mx-6 rounded-2xl cursor-pointer"
              >
                {/* Index number */}
                <div className="hidden md:flex w-10 flex-shrink-0">
                  <span className="text-gray-200 group-hover:text-gold-400/30 font-serif font-bold text-3xl transition-colors select-none">
                    {area.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-light-200 group-hover:bg-gold-400 group-hover:shadow-md group-hover:shadow-gold-400/20 flex items-center justify-center transition-all duration-300">
                  <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <div className="md:w-[220px] flex-shrink-0">
                  <h3 className="text-xl font-serif font-semibold text-dark-900 group-hover:text-gold-600 transition-colors">
                    {area.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-dark-900 hover:bg-dark-800 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-0.5 border border-gray-700 hover:border-gray-600"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
