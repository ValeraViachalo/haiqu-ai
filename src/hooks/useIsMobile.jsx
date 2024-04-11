import { useState, useEffect } from 'react';

const useIsMobile = (maxWidth) => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= maxWidth);

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [maxWidth]);

  return isMobile;
};

export default useIsMobile;
