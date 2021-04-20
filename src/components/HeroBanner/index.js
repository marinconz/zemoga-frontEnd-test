import React from 'react';

import styles from './heroBanner.module.scss';
import HeroClosingGauge from '../HeroClosingGauge';
import HeroCard from '../HeroCard';
import popeImg from '../../resources/img/pope-francis.png';
import popeImgLarge from '../../resources/img/pope-francis.@2x.png';

const HeroBanner = () => (
  <header className={styles.hero}>
    <img
      className={styles.background}
      srcSet={`${popeImg} 750w, ${popeImgLarge} 1440w`}
      sizes="(min-width: 750px) 1440px, 100vw"
      src={popeImg}
      alt="Pope Francis"
    />
    <HeroCard />
    <HeroClosingGauge />
  </header>
);

export default HeroBanner;
