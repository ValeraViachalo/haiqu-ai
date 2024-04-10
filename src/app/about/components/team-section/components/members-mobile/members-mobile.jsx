import { team } from '@/src/mockedData';
import styles from './members-mobile.module.scss';
import MemberMobile from './components/member-mobile';

const MembersMobile = () => {
  return (
    <div className={styles.members}>
      {team.map(({ id, name, description, role, photo }) => (
        <MemberMobile
          key={id}
          name={name}
          description={description}
          role={role}
          photo={photo}
        />
      ))}
    </div>
  );
};

export default MembersMobile;
