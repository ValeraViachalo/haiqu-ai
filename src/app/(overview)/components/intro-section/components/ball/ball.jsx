import { useRef, useEffect } from 'react';
import classNames from 'classnames';
import styles from './ball.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Ball = ({
  fill,
  xPercent,
  yPercent,
  xTransform,
  yTransform,
  zIndex,
  rotate,
  visibility,
  trigger,
}) => {
  const ballRef = useRef(null);

  const styleObj = {
    visibility: visibility,
    transform: `rotate(${rotate}deg)`,
    zIndex: zIndex,
  };

  // useGSAP(() => {
  //   gsap.to(ballRef.current, {
  //     opacity: trigger ? 1 : 0,
  //     duration: 0.2,
  //     delay: 0.2, // Тривалість анімації в секундах, налаштуйте за потребою
  //   });
  // }, [trigger]);

  useEffect(() => {
    if (ballRef.current) {
      ballRef.current.style.top = trigger ? `${yTransform}%` : `${yPercent}%`;
      ballRef.current.style.left = trigger ? `${xTransform}%` : `${xPercent}%`;
      ballRef.current.style.opacity = trigger ? 1 : 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return (
    <div
      className={classNames(styles.ball, {
        [styles.ball__fill]: fill,
        [styles.ball__gradient]: !fill,
      })}
      ref={ballRef}
      style={styleObj}
    />
  );
};

export default Ball;
