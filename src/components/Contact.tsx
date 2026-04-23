import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Lock, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Substitua pelo número de WhatsApp correto (ex: 5571999999999)
    const whatsappNumber = "5571983105123"; 
    
    const text = `*Novo Contato via Site*%0A%0A*Nome:* ${formData.name}%0A*E-mail:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A*Área de Interesse:* ${formData.service || 'Não especificada'}%0A*Mensagem:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-light-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image — real lawyer photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/60">
              <img
                src="https://i.ibb.co/CKLf7ypP/Whats-App-Image-2026-04-14-at-9-25-56-AM-1.jpg"
                alt="Dr. Cristiano Lázaro Fiuza"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/25 to-transparent"></div>
            </div>

            {/* Floating "resposta rápida" card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white border border-gray-200 p-5 rounded-2xl shadow-xl max-w-[220px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-dark-900 leading-tight">Resposta Rápida</p>
                  <p className="text-xs text-gray-500">via WhatsApp</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-snug">
                Atendimento ágil e discreto para a sua situação.
              </p>
            </motion.div>

            {/* Floating "endereço" card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-6 -left-6 bg-white border border-gray-200 p-5 rounded-2xl shadow-xl max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-gold-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-dark-900" />
                </div>
                <div>
                  <p className="text-xs font-bold text-dark-900 leading-tight">Escritório</p>
                  <p className="text-xs text-gray-500">Salvador / BA</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-snug">
                Av. ACM, Ed. Base Empresarial<br />
                Sala 204, Pituba — CEP 41800-700
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100/80"
          >
            <p className="text-gold-700 text-xs font-semibold uppercase tracking-widest mb-3">
              Entre em Contato
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-900 mb-2">
              Agende sua <span className="text-gold-500">Consulta</span>
            </h2>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Fale diretamente pelo WhatsApp ou preencha o formulário. Respondemos com
              agilidade e total discrição.
            </p>

            {/* WhatsApp primary CTA */}
            <a
              href="https://contate.me/profcristianolazaro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 mb-8 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-2xl transition-all duration-300 shadow-md shadow-green-500/20 hover:-translate-y-0.5 text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              Falar pelo WhatsApp Agora
            </a>

            {/* Divider */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-xs text-gray-400 uppercase tracking-widest">
                  ou envie uma mensagem
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[11px] font-semibold text-dark-800 mb-1.5 uppercase tracking-wider"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-xl bg-light-100 border border-transparent focus:border-gold-400 focus:bg-white transition-all text-sm placeholder:text-gray-400 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-semibold text-dark-800 mb-1.5 uppercase tracking-wider"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-light-100 border border-transparent focus:border-gold-400 focus:bg-white transition-all text-sm placeholder:text-gray-400 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[11px] font-semibold text-dark-800 mb-1.5 uppercase tracking-wider"
                  >
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-light-100 border border-transparent focus:border-gold-400 focus:bg-white transition-all text-sm placeholder:text-gray-400 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-[11px] font-semibold text-dark-800 mb-1.5 uppercase tracking-wider"
                  >
                    Área de Interesse
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-light-100 border border-transparent focus:border-gold-400 focus:bg-white transition-all text-sm text-gray-600 outline-none"
                  >
                    <option value="">Selecione...</option>
                    <option value="defesa-criminal">Defesa Criminal</option>
                    <option value="tribunal-juri">Tribunal do Júri</option>
                    <option value="habeas-corpus">Habeas Corpus</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[11px] font-semibold text-dark-800 mb-1.5 uppercase tracking-wider"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Descreva brevemente sua situação..."
                  className="w-full px-4 py-3 rounded-xl bg-light-100 border border-transparent focus:border-gold-400 focus:bg-white transition-all text-sm placeholder:text-gray-400 resize-none outline-none"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-dark-900 hover:bg-dark-800 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                >
                  Enviar Mensagem
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Lock className="w-3.5 h-3.5" />
                  <span>100% Confidencial</span>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
