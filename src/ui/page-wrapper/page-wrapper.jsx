import React from 'react';
import styles from './page-wrapper.module.scss';

const PageWrapper = ({ children }) => {
  return <div className={styles.page_wrapper}>{children}</div>;
};

export default PageWrapper;
