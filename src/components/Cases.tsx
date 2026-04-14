import { motion } from 'motion/react';
import { ShieldCheck, Target, TrendingUp } from 'lucide-react';

const cases = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-gold-500" />,
    title: 'Defesa em Crime Tributário',
    situation: 'Acusação de crime contra a ordem tributária com risco iminente de prisão preventiva.',
    strategy: 'Impetração de Habeas Corpus com base em nulidades processuais na fase de inquérito.',
    result: 'Trancamento da ação penal e liberdade garantida.',
  },
  {
    icon: <Target className="w-8 h-8 text-gold-500" />,
    title: 'Processo Administrativo Disciplinar',
    situation: 'Servidor público respondendo a PAD com risco de demissão do cargo.',
    strategy: 'Defesa técnica focada na ausência de materialidade e violação da ampla defesa.',
    result: 'Absolvição no PAD e manutenção do cargo.',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-gold-500" />,
    title: 'Investigação Licitatória',
    situation: 'Empresa sob investigação complexa por supostos crimes licitatórios.',
    strategy: 'Consultoria preventiva e atuação colaborativa com os órgãos de controle.',
    result: 'Arquivamento do inquérito por atipicidade da conduta.',
  },
];

export default function Cases() {
  return (
    <section id="casos" className="py-16 md:py-24 bg-light-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-900 mb-4">
            Casos de <span className="text-gold-500">Sucesso</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Exemplos práticos de como a aplicação de estratégias jurídicas sólidas e personalizadas pode mudar o rumo de um processo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 relative overflow-hidden group"
            >
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gold-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="mb-6 bg-light-100 w-16 h-16 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-serif font-bold text-dark-900 mb-6">{item.title}</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-bold text-dark-800 block mb-1">O cliente enfrentava:</span>
                  <p className="text-gray-600">{item.situation}</p>
                </div>
                <div>
                  <span className="font-bold text-dark-800 block mb-1">Estratégia aplicada:</span>
                  <p className="text-gray-600">{item.strategy}</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <span className="font-bold text-gold-600 block mb-1">Resultado:</span>
                  <p className="text-dark-900 font-medium">{item.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
