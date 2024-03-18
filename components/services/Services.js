// Libraries
import React from 'react';
import Link from 'next/link';

// Components
import { BagIcon, HouseIcon, OneIcon, UserIcon } from '../../utils/icons';

// Styles
import styles from './services.module.css';

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <h2 className="site-heading">More Services</h2>
        <p className="site-text">more services we provide</p>
        <div className={styles.services_card}>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <BagIcon fill="white" width={30} height={28} />
            </div>
            <h4>
              E-commerce <br></br> Solutions
            </h4>
            <p className={styles.card_text}>
              Building online stores with secure payment gateways, inventory
              management, and user-friendly interfaces to facilitate smooth
              transactions.
            </p>
            <Link href="services-detail" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <OneIcon fill="white" width={32} height={30} />
            </div>
            <h4>
              Content Management Systems <br></br> Developement
            </h4>
            <p className={styles.card_text}>
              Developing websites using popular CMS platforms like WordPress,
              Joomla, or Drupal for easy content management by clients.
            </p>
            <Link href="services-detail" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <HouseIcon fill="white" width={32} height={30} />
            </div>
            <h4>
              Search Engine <br></br> Optimization
            </h4>
            <p className={styles.card_text}>
              Optimizing websites to improve their visibility on search engines
              and drive organic traffic, including keyword research, on-page
              optimization, and content strategy.
            </p>
            <Link href="services-detail" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <UserIcon fill="white" width={32} height={30} />
            </div>
            <h4>
              Web Hosting <br></br> Domain Registration
            </h4>
            <p className={styles.card_text}>
              Assisting clients in choosing the right hosting plans and
              registering domain names for their websites.
            </p>
            <Link href="services-detail" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <UserIcon fill="white" width={32} height={30} />
            </div>
            <h4>
              Consultation and <br></br>Strategy
            </h4>
            <p className={styles.card_text}>
              Offering consultancy services to help clients define their digital
              strategy, identify business goals, and plan effective web
              solutions to achieve their objectives.
            </p>
            <Link href="services-detail" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <UserIcon fill="white" width={32} height={30} />
            </div>
            <h4>
              Analytics <br></br> And Reporting
            </h4>
            <p className={styles.card_text}>
              Integrating analytics tools like Google Analytics to track website
              performance, user behavior, and conversion metrics, and providing
              regular reports to clients.
            </p>
            <Link href="services-detail" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <UserIcon fill="white" width={32} height={30} />
            </div>
            <h4>
              Social Media<br></br> Integration
            </h4>
            <p className={styles.card_text}>
              Integrating social media platforms into websites to expand online
              presence, encourage user engagement, and facilitate social sharing
              of content.
            </p>
            <Link href="services-detail" className={styles.card_link}>
              See more
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.icon_bg}>
              <UserIcon fill="white" width={32} height={30} />
            </div>
            <h4>
              UI/UX<br></br> Design
            </h4>
            <p className={styles.card_text}>
              Creating intuitive and visually appealing user interfaces (UI) and
              enhancing user experience (UX) to engage visitors and increase
              conversions.
            </p>
            <Link href="services-detail" className={styles.card_link}>
              See more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
