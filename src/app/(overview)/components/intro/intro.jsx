import styles from './intro.module.scss';

const Intro = () => {
  return (
    <section className={styles.intro}>
      <p className={styles.intro__title}>
        Clumsy <br />
        Hardware
      </p>

      <div
        className={styles.intro__video_container}
        // ref={videoContainerRef}
      >
        <video
          muted
          autoPlay
          webkit-playsinline="true"
          playsInline
        //   ref={videoRef}
        >
          <source
            src="/videos/intro-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <p className={styles.intro__title_bottom}>
        Needs Careful <br />
        Software
      </p>
    </section>
  );
};

export default Intro;
