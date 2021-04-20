import React, { useState } from 'react';
import styles from './topBanner.module.scss';

const TopBanner = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.container}>
      <aside className={styles.bannerTop} role="doc-tip" aria-label="Speak Out">
        <div className={styles.leftBanner}>
          <span className={styles.bannerHairline}>Speak out. Be heard.</span>
          <span className={styles.bannerTitle}>Be counted</span>
        </div>
        <div className={styles.bannerRight}>
          <p className={styles.bannerText}>
            Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone
            can speak out and speak freely.
            It’s easy: You share your opinion, we analyze and put the data in a public report.
          </p>
        </div>
        <button type="button" className={styles.iconButton} aria-label="close" onClick={handleClose}>
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke="#000"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            >
              <path d="M1 19L19 1M1 1l18 18" />
            </g>
          </svg>
        </button>
      </aside>
    </div>
  );
};
export default TopBanner;
