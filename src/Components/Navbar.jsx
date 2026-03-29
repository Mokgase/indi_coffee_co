"use client"
import { useEffect, useState } from 'react';
import styles from '../Style/navbar.module.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About Us", route: "#about" },
    { name: "Blog", route: "#blog" },
    { name: "Cafe", route: "#cafe" },
  ];

  const handleLinkClick = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          {/* Logo */}
          <a href="#" className={styles.navbarLogo}>
            <img src="/Assets/images/i_logo.png" alt="Indi Coffee Co" />
          </a>

          {/* Desktop Nav Links */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.route} className={styles.navLink}>{link.name}</a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a href="#contact" className={styles.ctaButton}>Contact Us</a>

          {/* Hamburger Button (mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.hamburgerButton}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.lineTopActive : ''}`} />
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.lineMiddleActive : ''}`} />
            <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.lineBottomActive : ''}`} />
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay (mobile) */}
      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.menuOverlayActive : ''}`}>
        <div className={styles.menuContent}>
          <ul className={styles.menuList}>
            {[...navLinks, { name: "Contact Us", route: "#contact" }].map((link, index) => (
              <li
                key={link.name}
                className={`${styles.menuItem} ${isMenuOpen ? styles.menuItemActive : ''}`}
                style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
              >
                <a href={link.route} onClick={handleLinkClick} className={styles.menuLink}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
