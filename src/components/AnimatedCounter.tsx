import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'motion/react';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ 
  from = 0, 
  to, 
  duration = 2.5,
  suffix = '',
  prefix = ''
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Trigger animation when the element is well within the viewport
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(from);
  // using spring to make it smoothly decelerate at the end
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 15,
    bounce: 0,
  });

  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }
  }, [motionValue, inView, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
