'use client';

import React, { useState, useEffect } from 'react';
import styles from './team-section.module.scss';
import { Members, MembersMobile } from './components';

const TeamSection = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 834);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 834);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <section className={styles.team}>
      <p className={styles.team__title}>Team</p>
      {isMobile ? <MembersMobile /> : <Members />}
    </section>
  );
};

export default TeamSection;
