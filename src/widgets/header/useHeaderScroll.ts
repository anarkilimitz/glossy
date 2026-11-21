import { useEffect, useState } from 'react';

export function useHeaderScroll() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let frame = 0;
    let previousY = window.scrollY;

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        setIsHidden(currentY > 80 && currentY > previousY);
        previousY = currentY;
        frame = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return { isHidden };
}
