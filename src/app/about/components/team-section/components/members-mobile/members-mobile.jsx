//import { team } from '@/src/mockedData';
import styles from './members-mobile.module.scss';
import MemberDetailsMobile from './components/member-details-mobile';

const MembersMobile = ({team}) => {
  return (
    <div className={styles.members}>
      {team.map(({ id, name, description, role, photo }) => (
        <MemberDetailsMobile
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
