'use client';

import { useState, useEffect } from 'react';

const Video = () => {
  const [videoSrc, setVideoSrc] = useState(
    getVideoSource('/videos/quant-comp-mobile.mp4')
  );

  console.log('videosrc', videoSrc);

  function getVideoSource(width) {
    const tabletViewport = 834;
    const mobileViewport = 430;

    if (width > tabletViewport) {
      return '/videos/quant-comp-desktop.mp4';
    } else if (width <= tabletViewport && width > mobileViewport) {
      return '/videos/quant-comp-tablet.mp4';
    } else {
      return '/videos/quant-comp-mobile.mp4';
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setVideoSrc(getVideoSource(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <video
      width="100%"
      height="100%"
      loop
      muted
      autoPlay
      playsInline
    >
      <source
        src={videoSrc}
        type="video/mp4"
      />
    </video>
  );
};

export default Video;
