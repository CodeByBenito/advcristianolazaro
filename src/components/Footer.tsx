import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 pt-16 md:pt-24 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="bg-dark-800 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
          
          <div className="mb-8 md:mb-0 relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-2">
              Vamos Trabalhar <span className="text-gold-500">Juntos</span>
            </h2>
            <p className="text-gray-400">Proteja seus direitos com quem entende do assunto.</p>
          </div>
          
          <div className="relative z-10">
            <a 
              href="https://contate.me/profcristianolazaro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-dark-900 bg-gold-500 hover:bg-gold-400 rounded-full transition-colors duration-300 shadow-lg shadow-gold-500/20"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <a href="#" className="text-2xl font-serif font-bold text-white tracking-wider block mb-6">
              Cristiano<span className="text-gold-500">.</span>
            </a>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
              Advocacia criminal estratégica e especializada, pautada na ética, no rigor técnico e na busca incansável pelos melhores resultados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-gray-800 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-gray-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li><a href="#sobre" className="text-gray-400 hover:text-gold-500 transition-colors">Sobre Mim</a></li>
              <li><a href="#atuacao" className="text-gray-400 hover:text-gold-500 transition-colors">Áreas de Atuação</a></li>
              <li><a href="#trajetoria" className="text-gray-400 hover:text-gold-500 transition-colors">Trajetória</a></li>
              <li><a href="#casos" className="text-gray-400 hover:text-gold-500 transition-colors">Casos de Sucesso</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">WhatsApp: <br/> (XX) XXXXX-XXXX</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">contato@cristianolazaro.com.br</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Salvador, BA - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cristiano Lázaro Fiuza. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
