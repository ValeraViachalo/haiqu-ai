'use client';

import { useState } from 'react';
//import { team } from '@/src/mockedData';
import styles from './members.module.scss';
import MembersDetails from './components/member-details';
import Image from 'next/image';

const Members = ({team}) => {
  const [photoId, setPhotoId] = useState(null);

  const selectedMember = team.find((member) => member.id === photoId);

  return (
    <div className={styles.members}>
      <div className={styles.members__details}>
        {team.map(({ id, name, description, role, photo }) => (
          <MembersDetails
            key={id}
            name={name}
            description={description}
            role={role}
            photo={photo}
            setPhotoId={setPhotoId}
            id={id}
          />
        ))}
      </div>

      <div className={styles.members__video_container}>
        <video
          width="100%"
          height="100%"
          loop
          muted
          autoPlay
          webkit-playsinline="true"
          playsInline
        >
          <source
            src="/videos/footer-video.mp4"
            type="video/mp4"
          />
        </video>

        {photoId && (
          <div className={styles.members__photo}>
            <div className={styles.members__spot} />
            <Image
              fill
              src={selectedMember.photo}
              alt={selectedMember.name}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Members;
