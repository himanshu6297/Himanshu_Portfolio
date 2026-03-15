import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function useScrollAnimations() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });

    return () => {
      AOS.refresh();
    };
  }, []);
}
