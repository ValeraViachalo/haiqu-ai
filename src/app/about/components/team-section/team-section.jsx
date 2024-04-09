import Members from './components/members';
import styles from './team-section.module.scss';

const TeamSection = () => {
  return (
    <section className={styles.team}>
      <p className={styles.team__title}>Team</p>
      <Members />
    </section>
  );
};

export default TeamSection;
