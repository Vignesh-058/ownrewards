import React, { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';

const AnimatedSection = ({ children, className, animation = 'animate-fade-up', delay = 0, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once visible, keep it visible (no fade out on scroll up)
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return (
    <div
      ref={domRef}
      className={clsx(className, isVisible ? animation : 'opacity-0')}
      style={{
        animationDelay: `${delay}ms`,
        opacity: isVisible ? undefined : 0,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
