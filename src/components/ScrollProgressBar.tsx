import { useScroll, useSpring, motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const SECTIONS: { id: string; label: string }[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'atuacao', label: 'Áreas de Atuação' },
  { id: 'trajetoria', label: 'Trajetória' },
  { id: 'casos', label: 'Direito é Lógica' },
  { id: 'diferenciais', label: 'Diferenciais' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'contato', label: 'Contato' },
];

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeId, setActiveId] = useState<string>('inicio');
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Among intersecting entries, pick the one with the highest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Consider a section "active" when its middle zone is in the viewport
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const elements: Element[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const activeLabel =
    SECTIONS.find((s) => s.id === activeId)?.label ?? SECTIONS[0].label;

  return (
    <>
      {/* Hover capture zone — thicker than the visible bar so it's easy to hit */}
      <div
        className="fixed top-0 left-0 right-0 h-5 z-[60] pointer-events-auto"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-hidden
      >
        {/* Visible progress bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] origin-left"
          style={{
            scaleX,
            background:
              'linear-gradient(90deg, #b08d4a, #d4af37, #e8cc6b, #d4af37)',
          }}
        />

        {/* Tooltip pill with active section name */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="scroll-tooltip"
              initial={{ opacity: 0, y: -6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.95 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute top-5 right-5 pointer-events-none"
            >
              <div className="flex items-center gap-2 bg-dark-900/95 backdrop-blur-md border border-gold-400/25 rounded-full px-3.5 py-1.5 shadow-lg shadow-dark-900/40">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-400">
                  {activeLabel}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
