import { ReactNode, ElementType } from 'react';
import { motion } from 'motion/react';

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

export default function RevealText({ 
  children, 
  delay = 0, 
  className = '',
  as: Component = 'div' 
}: RevealTextProps) {
  return (
    <Component className={`overflow-hidden inline-flex ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        {children}
      </motion.div>
    </Component>
  );
}
