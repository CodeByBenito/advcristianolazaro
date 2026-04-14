import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-light-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block mb-12 lg:mb-0"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/lawyer2/800/1000" 
                alt="Dr. Cristiano Lázaro Fiuza" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-900 mb-2">
              Agende sua <span className="text-gold-500">Consulta</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Preencha o formulário abaixo e entraremos em contato o mais breve possível.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Seu Nome" 
                    className="w-full px-4 py-3 rounded-lg bg-light-100 border-transparent focus:border-gold-500 focus:bg-white focus:ring-0 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Seu E-mail" 
                    className="w-full px-4 py-3 rounded-lg bg-light-100 border-transparent focus:border-gold-500 focus:bg-white focus:ring-0 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="sr-only">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Seu Telefone / WhatsApp" 
                    className="w-full px-4 py-3 rounded-lg bg-light-100 border-transparent focus:border-gold-500 focus:bg-white focus:ring-0 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="sr-only">Área de Interesse</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 rounded-lg bg-light-100 border-transparent focus:border-gold-500 focus:bg-white focus:ring-0 transition-colors text-gray-600"
                  >
                    <option value="">Área de Interesse</option>
                    <option value="penal">Direito Penal</option>
                    <option value="administrativo">Direito Administrativo</option>
                    <option value="consultoria">Consultoria Jurídica</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Descreva brevemente sua situação" 
                  className="w-full px-4 py-3 rounded-lg bg-light-100 border-transparent focus:border-gold-500 focus:bg-white focus:ring-0 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="button"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-gold-500 hover:bg-gold-600 rounded-full transition-colors duration-300 shadow-lg shadow-gold-500/20 w-full md:w-auto"
              >
                Enviar Mensagem
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
