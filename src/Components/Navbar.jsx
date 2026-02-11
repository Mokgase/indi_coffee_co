"use client"
import React, { useEffect, useState } from 'react';
import styles from '../Style/navbar.module.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const navLinks = [
    { name: "About Us", route: "#about" },
    { name: "Blog", route: "#blog" },
    { name: "Cafe", route: "#cafe" },
    { name: "Contact Us", route: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav className={`${styles.navbar} ${hasScrolled ? styles.navbarScrolled : ''}`}>
        <div className={styles.navbarContainer}>
          {/* Logo */}
          <a href="#" className={styles.navbarLogo}>
            LOGO
          </a>

          {/* Hamburger Button */}
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

      {/* Fullscreen Menu Overlay */}
      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.menuOverlayActive : ''}`}>
        <div className={styles.menuContent}>
          <ul className={styles.menuList}>
            {navLinks.map((link, index) => (
              <li 
                key={link.name}
                className={`${styles.menuItem} ${isMenuOpen ? styles.menuItemActive : ''}`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' 
                }}
              >
                <a
                  href={link.route}
                  onClick={handleLinkClick}
                  className={styles.menuLink}
                >
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