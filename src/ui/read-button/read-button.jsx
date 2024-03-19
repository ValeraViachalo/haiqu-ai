import React from 'react';
import styles from './read-button.module.scss';
import classNames from 'classnames';

const ReadButton = ({ dark, visibility, title }) => (
  <button
    className={classNames(`${styles.read_button}`, {
      [`${styles.read_button__dark}`]: dark,
      [`${styles.read_button__visible}`]: visibility,
    })}
  >
    {title}
  </button>
);

export default ReadButton;
