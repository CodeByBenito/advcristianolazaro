import { useScroll, useSpring, motion } from 'motion/react';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      aria-hidden
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #b08d4a, #d4af37, #e8cc6b, #d4af37)',
      }}
    />
  );
}
