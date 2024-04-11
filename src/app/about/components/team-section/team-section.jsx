'use client';

import styles from './team-section.module.scss';
import { Members, MembersMobile } from './components';
import { useIsMobile } from '@/src/hooks';
import { mediaQueries } from '@/src/constants';

const TeamSection = () => {
  const isTablet = useIsMobile(mediaQueries.tablet);

  return (
    <section className={styles.team}>
      <p className={styles.team__title}>Team</p>
      {isTablet ? <MembersMobile /> : <Members />}
    </section>
  );
};

export default TeamSection;
