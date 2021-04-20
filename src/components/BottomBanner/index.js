import React from 'react';
import styles from './bottomBanner.module.scss';
import bgPeople from '../../resources/img/bg-people.png';
import bgPeople2 from '../../resources/img/bg-people.@2x.png';

const BottomBanner = () => (
  <div className={styles.container}>
    <aside className={styles.bannerBottom} role="doc-tip" aria-label="Submit a name">
      <img
        srcSet={`${bgPeople} 750w,${bgPeople2} 1440w`}
        sizes="(min-width: 750px) 1440px, 100vw"
        className={styles.bannerBackground}
        src={bgPeople}
        alt=""
        role="none"
      />
      <div className={styles.bannerLeft}>
        <h2 className={styles.bannerHeading}>Is there anyone else you would want us to add?</h2>
      </div>
      <div className={styles.bannerRight}>
        <button type="button" className={styles.bannerCta}>
          Submit a name
        </button>
      </div>
    </aside>
  </div>
);
export default BottomBanner;
