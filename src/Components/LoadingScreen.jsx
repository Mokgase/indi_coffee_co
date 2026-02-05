import React, { useEffect } from 'react';
import i_logo from '../../public/Assets/images/i_logo.png'
import styles from '../Style/loadingScreen.module.css';


const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 10); 

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={styles.loadingScreen}>
      <img
        src={i_logo}
        alt="Test Loading Logo"
        width={550}
        height={550}
        className={styles.logo}
      />
    </div>
  );
};

export default LoadingScreen;
