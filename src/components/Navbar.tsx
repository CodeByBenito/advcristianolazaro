import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Áreas de Atuação', href: '#atuacao' },
    { name: 'Trajetória', href: '#trajetoria' },
    { name: 'Casos', href: '#casos' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-900/97 backdrop-blur-md py-3 shadow-xl border-b border-gold-400/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-serif font-bold text-white tracking-wider">
              Cristiano<span className="text-gold-400">.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-gray-300 hover:text-gold-400 transition-colors uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contato"
              className="ml-2 px-5 py-2.5 text-xs font-semibold text-dark-900 bg-gold-400 hover:bg-gold-300 rounded-full transition-all duration-300 uppercase tracking-widest shadow-md shadow-gold-400/20 hover:-translate-y-0.5"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-1"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-900/98 backdrop-blur-md border-t border-gray-800"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-gold-400 hover:bg-gray-800/50 rounded-xl uppercase tracking-wider transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-800">
                <a
                  href="#contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center px-4 py-3 text-sm font-semibold text-dark-900 bg-gold-400 hover:bg-gold-300 rounded-xl uppercase tracking-wider transition-colors"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
