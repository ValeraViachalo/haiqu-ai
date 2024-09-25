'use client';

import styles from './team-section.module.scss';
import { Members, MembersMobile } from './components';
import { useIsMobile } from '@/src/hooks';
import { mediaQueries } from '@/src/constants';

const TeamSection = ({data}) => {
    if (data.team.active !== true) {
        return '';
    }

  const isTablet = useIsMobile(mediaQueries.tablet);

    const team = data.team.list.filter(function(item) {
        if (item.name) {
            return true;
        }
        return false;
    }).map(function (item, key) {
        return {id:key+1, photo:item.img, name:item.name, role:item.position, description:item.text}
    })

  return (
    <section className={styles.team}>
      <p className={styles.team__title}>{ data.team.title }</p>
      {isTablet ? <MembersMobile team={team} /> : <Members team={team} />}
    </section>
  );
};

export default TeamSection;
