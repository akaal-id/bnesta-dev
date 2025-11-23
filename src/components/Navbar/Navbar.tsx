"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", active: true },
  { label: "About BNesta" },
  { label: "Our Villas" },
  { label: "Stories" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Logic for Styling (Transparent vs White)
      // If we are not at the very top, apply the "scrolled" style
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Logic for Visibility (Hide vs Show)
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling DOWN AND past the top area -> Hide
        setIsVisible(false);
      } else {
        // Scrolling UP -> Show
        setIsVisible(true);
      }

      // Update the "last" position for the next comparison
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${styles.navbar} 
      ${isScrolled ? styles.scrolled : ""} 
      ${!isVisible ? styles.hidden : ""}`}
    >
      <div className={styles.navInner}>
        <div className={styles.logoGroup}>
          <Image
            src="/images/bnesta-logo.png"
            alt="BNesta"
            width={112}
            height={29}
            priority
            className={styles.logoImage}
          />
          <span className={styles.divider} />
          <nav className={styles.navLinks}>
            {navLinks.map((link) => (
              <span
                key={link.label}
                className={`${styles.link} ${
                  link.active ? styles.linkActive : ""
                }`}
              >
                {link.label}
              </span>
            ))}
          </nav>
        </div>

        <div className={styles.ctaGroup}>
          <span className={styles.language}>
            EN/ID
            <span aria-hidden>▾</span>
          </span>
          <button className={styles.outlineButton} type="button">
            Contact Us
          </button>
          <button className={styles.primaryButton} type="button">
            Book Now<span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </header>
  );
}