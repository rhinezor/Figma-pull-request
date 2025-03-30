import React from 'react';
import { Button } from 'antd';

import styles from './index.module.less';

const LoginButton: React.FC = () => {
  const onSignUpClick = () => {};

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.buttonContainer}>
        <div className={styles.loginSection}>
          <span className={styles.loginText}>Login</span>
        </div>
        <Button
          shape="round"
          onClick={onSignUpClick}
          className={styles.roundedButton}
        >
          <span className={styles.signButtonText}>Sig</span>
          <span className={styles.upButtonText}>n Up</span>
        </Button>
      </div>
    </div>
  );
};

export default LoginButton;
