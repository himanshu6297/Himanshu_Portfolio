import { useEffect, useState } from 'react';

export default function useParallax(offset = 50) {
  const [yPos, setYPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setYPos(window.scrollY * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return yPos;
}
