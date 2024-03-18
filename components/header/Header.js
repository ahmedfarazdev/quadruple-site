"use client";

// Libraries
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Components
import { Close, Logo, Menu } from "../../utils/icons";

// Styles
import styles from "./header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <Fragment>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.navbar}>
            <Link href="/">
              <Logo width={118} height={60} />
            </Link>
            <ul className={styles.navbar_nav}>
              <li>
                <Link href="/" className={pathname == "/" ? styles.active : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#aboutus-our-services"
                  className={pathname == "/about-us" ? styles.active : ""}
                >
                  Our Servies
                </Link>
              </li>
              <li>
                <Link
                  href="#projects-section"
                  className={pathname == "/projects" ? styles.active : ""}
                >
                  Our Projects
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#services-section"
                  className={pathname == "/services" ? styles.active : ""}
                >
                  Services
                </Link>
              </li> */}
              <li>
                <Link
                  href="#contact-section"
                  className={pathname == "/contact-us" ? styles.active : ""}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* <div className={styles.header_btn}>
              <button type="submit">White Paper</button>
            </div> */}
            <div className={styles.toggle_open} onClick={handleMenuOpen}>
              <Menu stroke="#2C2929" width={24} height={24} />
            </div>
          </div>
        </div>
      </header>

      <header
        className={`${styles.navbar_drawer} ${
          isMenuOpen ? styles.drawer_open : ""
        }`}
      >
        <div className={styles.toggle_close} onClick={handleMenuClose}>
          <Close fill="#2C2929" width={26} height={26} />
        </div>
        <nav>
          <ul className={styles.navbar_nav}>
            <li>
              <Link
                href="/"
                className={pathname == "/" ? styles.active : ""}
                onClick={handleMenuClose}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about-us"
                className={pathname == "/about-us" ? styles.active : ""}
                onClick={handleMenuClose}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="#projucts"
                className={pathname == "/projucts" ? styles.active : ""}
                onClick={handleMenuClose}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className={pathname == "/services" ? styles.active : ""}
                onClick={handleMenuClose}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#contact-us"
                className={pathname == "/contact-us" ? styles.active : ""}
                onClick={handleMenuClose}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {/* <div className={styles.header_btn_mobile}>
            <button type="submit">White Paper</button>
          </div> */}
        </nav>
      </header>
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.overlay_show : ""}`}
      ></div>
    </Fragment>
  );
}
