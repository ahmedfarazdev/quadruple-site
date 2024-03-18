// Libraries
import React from "react";

// Styles
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>Quadruple</h1>
          <p className={styles.hero_text}>Solutions</p>
          <br />
          <p className={styles.hero_text_mini}>Turning Ideas into Digital Success!</p>
        </div>
      </div>
    </section>
  );
}
