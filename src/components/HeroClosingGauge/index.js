import React from 'react';
import styles from './heroClosingGauge.module.scss';

const HeroClosingGauge = () => (
  <div className={styles.heroClosingGauge}>
    <div className={styles.closingGaugeLeft}>
      <span className={styles.closingGaugeTitle}>closing in</span>
    </div>
    <div className={styles.closinGaugeRight}>
      <span className={styles.closingGaugeNumber}>22</span>
      <span className={styles.closingGaugeDesc}>days</span>
    </div>
  </div>
);

export default HeroClosingGauge;
