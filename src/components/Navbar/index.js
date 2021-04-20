import React, { useState } from 'react';
import cx from 'classnames';
import styles from './navbar.module.scss';
import search from '../../resources/svg/search.svg';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <nav className={styles.nav} role="navigation">
      <div className={styles.maxCentered}>
        <h1 className={styles.navLogo}>Rule of thumb.</h1>
        <button type="button" className={`${styles.hamburger} ${styles.iconButton}`} onClick={handleHamburgerClick} alt="Open Menu">
          <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" fill="#FFF" fillRule="nonzero" /></svg>
        </button>
        <ul className={cx(styles.navLinks, {
          [styles.open]: isMobileOpen,
        })}
        >
          <li>
            <a href="/">Past Trials</a>
          </li>
          <li>
            <a href="/">How It Works</a>
          </li>
          <li>
            <a href="/">Login / Sign Up</a>
          </li>
          <li>
            <input className={styles.navSearchInput} type="text" />
            <button className={`${styles.navSearch} ${styles.iconButton}`} alt="Search" type="submit">
              <img src={search} alt="search" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
