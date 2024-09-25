import { Card } from '@/src/ui';
import styles from './our_middleware_section.module.scss';

const OurMiddlewareSection = () => {
  return (
    <section className={styles.our_middleware}>
      <div className={styles.our_middleware__leftside}>
        <p className={styles.our_middleware__title}>Our Middleware</p>
        <p className={styles.our_middleware__description}>
          Haiqu developing tools of other parts of the stack
        </p>
      </div>

      <div className={styles.our_middleware__rightside}>
        <Card
          color="blue"
          btn_title="request demo"
          image="/images/technology-page/pivet-img.svg"
          imageText="pivet"
          title="PIVET – Approximate Execution"
          moto="Execute 100x deeper circuits"
          badges={['For static circuits', '100x more depth']}
          text="Our most powerful solution. This proprietary approximate divide-and-conquer circuit execution scheme allows for the execution of circuits which are 100x deeper, as compared with any other technique on the market. We supplement this execution scheme with noise mitigation and error suppression."
        />
        <Card
          color="red"
          btn_title="request demo"
          image="/images/technology-page/zivet-img.svg"
          imageText="zivet"
          title="ZIVET – Noise Mitigation"
          moto="Execute 100x deeper circuits"
          badges={[
            'For variational jobs',
            'For static circuits',
            '2-3x better fidelity',
          ]}
          text="The most effective noise mitigation on the market. Our mitigation yields a 2-3x fidelity improvement above existing noise-reduction techniques, all with minimal classical overhead. The overhead is so low you can use it during variational circuit routines!"
        />
        <Card
          btn_title="view on github"
          title="RIVET – Modular Transpilation"
          image="/images/technology-page/rivet-img.svg"
          imageText="rivet"
          moto="Reduce your QML runtime from hours to seconds"
          badges={['Open-source']}
          text="This transpilation SDK allows you to speeds up the transpilation time for routines involving a high-volume of circuit. Run your QML and other workloads in seconds instead of hours. And it’s open- source."
        />
      </div>
    </section>
  );
};

export default OurMiddlewareSection;
