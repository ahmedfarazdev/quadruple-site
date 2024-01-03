// Libraries
import React from "react";
import Link from "next/link";

// Components
import {
  Call,
  Email,
  Facebook,
  Instagram,
  Linkedin,
  Location,
  Logo,
  Twitter,
} from "../../utils/icons";

// Styles
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_meta}>
          <div className={styles.footer_left}>
            <Link href="/">
              <Logo width={118} height={75} />
            </Link>
            <ul className={styles.social_media_links_list}>
              <li>
                <Link
                  className={styles.social_media_link}
                  href="#"
                  title="facebook link"
                  target="_blank"
                >
                  <Facebook fill="white" width={8} height={16} />
                </Link>
              </li>
              <li>
                <Link
                  className={styles.social_media_link}
                  href="#"
                  title="twitter link"
                  target="_blank"
                >
                  <Twitter fill="white" width={16} height={13} />
                </Link>
              </li>
              <li>
                <Link
                  className={styles.social_media_link}
                  href="#"
                  title="instagram link"
                  target="_blank"
                >
                  <Instagram fill="white" width={15} height={15} />
                </Link>
              </li>
              <li>
                <Link
                  className={styles.social_media_link}
                  href="#"
                  title="linkedin link"
                  target="_blank"
                >
                  <Linkedin fill="white" width={14} height={14} />
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_right}>
            <div className={styles.footer_cols}>
              <h6>Company</h6>
              <ul className={styles.footer_list}>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Projects</Link>
                </li>
                <li>
                  <Link href="#">Services</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer_cols}>
              <h6>Contact Us</h6>
              <ul
                className={`${styles.footer_list} ${styles.footer_conatct_list}`}
              >
                <li>
                  <Location stroke="white" width={16} height={20} />
                  <span>Islamabad, Pakistan</span>
                </li>
                <li>
                  <Link href="tel:(333) 123-4567">
                    <Call stroke="white" width={20} height={20} />
                    <span>(333) 123-4567</span>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:support@gmail.com">
                    <Email stroke="white" width={18} height={16} />
                    <span>support@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer_cols}>
              <h6>Report</h6>
              <div className={styles.footer_form}>
                <input
                  type="text"
                  id="message"
                  placeholder="Enter Somthing..."
                  className={styles.form_input}
                  required
                />
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className="container">
          <div className={styles.footer_bottom_meta}>
            <p>©2023 by Quadruple Solution.</p>
            <ul className={styles.bottom_list}>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms Of Use</Link>
              </li>
              <li>
                <Link href="#">Faq's</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
