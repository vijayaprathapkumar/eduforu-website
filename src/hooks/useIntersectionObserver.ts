import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (
  options?: IntersectionObserverInit
): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
