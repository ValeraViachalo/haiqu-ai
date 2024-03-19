import { useRef, useEffect } from 'react';
import classNames from 'classnames';
import styles from './ball.module.scss';

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

  useEffect(() => {
    if (ballRef.current) {
      ballRef.current.style.top = trigger ? `${yTransform}%` : `${yPercent}%`;
      ballRef.current.style.left = trigger ? `${xTransform}%` : `${xPercent}%`;
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
