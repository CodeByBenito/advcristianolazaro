import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Doutorando', value: 'UFBA' },
    { label: 'Mestre', value: 'UCSAL' },
    { label: 'Professor', value: 'Acadepol' },
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-light-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.ibb.co/CKLf7ypP/Whats-App-Image-2026-04-14-at-9-25-56-AM-1.jpg" 
                alt="Dr. Cristiano Lázaro Fiuza" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative box */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold-500/10 rounded-2xl -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-900 mb-6 leading-tight">
              Sua Defesa. Sua Voz. <br/>
              <span className="text-gold-500">Seu Aliado Estratégico.</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Com sólida formação acadêmica e vasta experiência prática, atuo na defesa intransigente dos direitos de meus clientes. Como professor e doutorando, aplico o rigor científico à prática forense, garantindo estratégias inovadoras e precisas para cada caso.
              </p>
              <p>
                Acredito que cada cliente merece uma defesa técnica, humana e incansável. Meu compromisso é com a excelência, a ética e a busca incessante pelo melhor resultado possível, compreendendo a complexidade e a urgência de cada situação.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {[
                'Atendimento personalizado e sigiloso',
                'Análise minuciosa de cada detalhe do processo',
                'Estratégias baseadas em sólida doutrina e jurisprudência'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-gold-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-dark-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-100 pt-8 text-center sm:text-left">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-2xl font-serif font-bold text-dark-900">{stat.value}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
