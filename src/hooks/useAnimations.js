import { useEffect, useState, useRef } from 'react';

/**
 * Hook for reusable Intersection Observer
 */
export const useIntersectionObserver = (options = { threshold: 0.1, rootMargin: '0px' }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isIntersecting];
};

/**
 * Hook for animating a number counter
 */
export const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5, rootMargin: '0px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isIntersecting && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime = null;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing out function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * (end - start) + start);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isIntersecting, end, duration, start]);

  return [ref, count];
};

/**
 * Hook for detecting clicks outside a component (useful for modals/drawers)
 */
export const useClickOutside = (handler) => {
  const ref = useRef();

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);

  return ref;
};
