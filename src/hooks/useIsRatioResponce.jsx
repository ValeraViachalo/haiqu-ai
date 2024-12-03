import { useState, useEffect } from 'react';

const useIsRatioResponse = (options = {}) => {
  const {
    aspectRatio = '4/3', 
    type = 'min', // 'min', 'max', or 'both'
    initialState = false
  } = options;

  const [isMatchingRatio, setIsMatchingRatio] = useState(initialState);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkRatio = () => {
      let match = false;

      switch(type) {
        case 'min':
          match = window.matchMedia(`(min-aspect-ratio: ${aspectRatio})`).matches;
          break;
        case 'max':
          match = window.matchMedia(`(max-aspect-ratio: ${aspectRatio})`).matches;
          break;
        case 'both':
          const [min, max] = aspectRatio.split('-');
          match = window.matchMedia(`(min-aspect-ratio: ${min}) and (max-aspect-ratio: ${max})`).matches;
          break;
        default:
          match = false;
      }

      setIsMatchingRatio(match);
    };

    // Initial check
    checkRatio();

    // Add resize listener
    window.addEventListener('resize', checkRatio);

    // Cleanup listener
    return () => window.removeEventListener('resize', checkRatio);
  }, [aspectRatio, type]);

  return isMatchingRatio;
};

export default useIsRatioResponse;