import { motion } from 'motion/react';
import { ShieldCheck, Target, TrendingUp, CheckCircle2 } from 'lucide-react';
import RevealText from './RevealText';
import TiltCard from './TiltCard';

const cases = [
  {
    icon: ShieldCheck,
    tag: 'Habeas Corpus',
    title: 'Defesa em Crime Tributário',
    situation:
      'Acusação de crime contra a ordem tributária com risco iminente de prisão preventiva.',
    strategy:
      'Impetração de Habeas Corpus com base em nulidades processuais na fase de inquérito.',
    result: 'Trancamento da ação penal e liberdade garantida.',
  },
  {
    icon: Target,
    tag: 'Processo Administrativo',
    title: 'Processo Administrativo Disciplinar',
    situation: 'Servidor público respondendo a PAD com risco de demissão do cargo.',
    strategy:
      'Defesa técnica focada na ausência de materialidade e violação da ampla defesa.',
    result: 'Absolvição no PAD e manutenção do cargo.',
  },
  {
    icon: TrendingUp,
    tag: 'Consultoria Preventiva',
    title: 'Investigação Licitatória',
    situation: 'Empresa sob investigação complexa por supostos crimes licitatórios.',
    strategy: 'Consultoria preventiva e atuação colaborativa com os órgãos de controle.',
    result: 'Arquivamento do inquérito por atipicidade da conduta.',
  },
];

export default function Cases() {
  return (
    <section id="casos" className="py-20 md:py-28 bg-light-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Resultados Reais
          </p>
          <RevealText as="h2" className="text-4xl md:text-5xl font-serif font-bold text-dark-900 mb-4">
            Casos de <span className="text-gold-500">Sucesso</span>
          </RevealText>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Exemplos práticos de como a aplicação de estratégias jurídicas sólidas e
            personalizadas pode mudar o rumo de um processo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => {
            const Icon = item.icon;
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
                  <div className="group bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/60 border border-gray-100 relative overflow-hidden flex flex-col h-full hover:shadow-xl hover:shadow-gray-200/80 transition-shadow duration-300">
                    {/* Gold top border on hover */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                    {/* Tag badge */}
                    <span className="inline-flex items-center self-start px-3 py-1 text-xs font-medium text-gold-600 bg-gold-400/8 border border-gold-400/20 rounded-full mb-6">
                      {item.tag}
                    </span>

                    {/* Icon */}
                    <div className="w-14 h-14 bg-light-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold-400/10 transition-colors">
                      <Icon className="w-7 h-7 text-gold-500" />
                    </div>

                    <h3 className="text-xl font-serif font-bold text-dark-900 mb-6">{item.title}</h3>

                    <div className="space-y-4 text-sm flex-1">
                      <div>
                        <span className="font-semibold text-dark-800 block mb-1.5 text-[11px] uppercase tracking-wider">
                          Situação
                        </span>
                        <p className="text-gray-600 leading-relaxed">{item.situation}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-dark-800 block mb-1.5 text-[11px] uppercase tracking-wider">
                          Estratégia
                        </span>
                        <p className="text-gray-600 leading-relaxed">{item.strategy}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-gray-100 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-semibold text-gold-600 uppercase tracking-wider block mb-0.5">
                          Resultado
                        </span>
                        <p className="text-dark-900 font-semibold text-sm">{item.result}</p>
                      </div>
                    </div>
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
