import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';

const quickLinks = [
  { name: 'Sobre Mim', href: '#sobre' },
  { name: 'Áreas de Atuação', href: '#atuacao' },
  { name: 'Trajetória', href: '#trajetoria' },
  { name: 'Casos de Sucesso', href: '#casos' },
  { name: 'Contato', href: '#contato' },
];

const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/adv.cristianolazaro/',
    Icon: Instagram,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/cristiano-l%C3%A1zaro-fiuza-figueiredo-9b5b5528/',
    Icon: Linkedin,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/cristiano.fiuzaadvogado/',
    Icon: Facebook,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCJ51GcLhgAnk5Uu2bVn6msA',
    Icon: Youtube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 pt-16 md:pt-20 pb-8 border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CTA Banner */}
        <div className="relative bg-dark-800 border border-gray-700/60 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between overflow-hidden gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-400/3 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-2">
              Vamos Trabalhar <span className="text-gold-400">Juntos</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Proteja seus direitos com quem entende do assunto.
            </p>
          </div>

          <div className="relative z-10">
            <a
              href="https://contate.me/profcristianolazaro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-dark-900 bg-gold-400 hover:bg-gold-300 rounded-full transition-all duration-300 shadow-lg shadow-gold-400/20 hover:-translate-y-0.5"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <a
              href="#"
              className="text-2xl font-serif font-bold text-white tracking-wider block mb-4"
            >
              Cristiano Lázaro<span className="text-gold-400">.</span>
            </a>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-1.5 text-sm">
              Advocacia criminal estratégica e especializada, pautada na ética, no rigor
              técnico e na busca incansável pelos melhores resultados.
            </p>
            <p className="text-gray-600 text-xs mb-8">OAB/BA — Advogado Criminalista</p>
            <div className="flex gap-3">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 rounded-full bg-dark-700 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-400/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold text-base mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold text-base mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://contate.me/profcristianolazaro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm leading-snug hover:text-gold-400 transition-colors"
                >
                  WhatsApp — Fale agora
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  contato@cristianolazaro.com.br
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-snug">
                  Av. ACM, Ed. Base Empresarial<br />
                  Sala 204, Pituba — Salvador/BA<br />
                  CEP 41800-700
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Cristiano Lázaro Fiuza. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-gold-400 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
