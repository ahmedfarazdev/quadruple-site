import React from 'react';
import Link from 'next/link';

// Components
import {
  Analytics,
  BagIcon,
  Consultation,
  ContentManagement,
  Ecommerce,
  HouseIcon,
  OneIcon,
  SearchEngine,
  SocialMedia,
  UIUXDesign,
  UserIcon,
  WebHosting,
} from '../../../../utils/icons';

// Styles
import styles from '../page.module.css';

const Services = () => {
  return (
    <>
      <section className={styles.services}>
        <div className="container">
          <h2 className="site-heading">More Services</h2>
          <p className="site-text">more services we provide</p>
          <div className={styles.services_card}>
            <div className={styles.single_card}>
              <div className={styles.single_card_content}>
                <div className={styles.icon_bg}>
                  <Ecommerce
                    fill="white"
                    fillLight="#b7b7b7"
                    width={45}
                    height={45}
                  />
                </div>
                <h4>
                  E-commerce <br></br> Solutions
                </h4>
                <p className={styles.card_text}>
                  Building online stores with secure payment gateways, inventory
                  management, and user-friendly interfaces to facilitate smooth
                  transactions.
                </p>
              </div>
            </div>
            <div className={styles.single_card}>
              <div className={styles.single_card_content}>
                <div className={styles.icon_bg}>
                  <ContentManagement
                    fill="white"
                    fillLight="#b7b7b7"
                    width={42}
                    height={42}
                  />
                </div>
                <h4>
                  Content Management <br></br> Systems Developement
                </h4>
                <p className={styles.card_text}>
                  Developing websites using popular CMS platforms like
                  WordPress, Joomla, or Drupal for easy content management by
                  clients.
                </p>
              </div>
            </div>
            <div className={styles.single_card}>
              <div className={styles.single_card_content}>
                <div className={styles.icon_bg}>
                  <SearchEngine
                    fill="white"
                    fillLight="#b7b7b7"
                    width={45}
                    height={45}
                  />
                </div>
                <h4>
                  Search <br></br> Engine Optimization
                </h4>
                <p className={styles.card_text}>
                  Optimizing websites to improve their visibility on search
                  engines and drive organic traffic, including keyword research,
                  on-page optimization, and content strategy.
                </p>
              </div>
            </div>
            <div className={styles.single_card}>
              <div className={styles.single_card_content}>
                <div className={styles.icon_bg}>
                  <WebHosting
                    fill="white"
                    fillLight="#b7b7b7"
                    width={44}
                    height={44}
                  />
                </div>
                <h4>
                  Web Hosting <br></br> Domain Registration
                </h4>
                <p className={styles.card_text}>
                  Assisting clients in choosing the right hosting plans and
                  registering domain names for their websites.
                </p>
              </div>
            </div>
            <div className={styles.single_card}>
              <div className={styles.single_card_content}>
                <div className={styles.icon_bg}>
                  <Consultation
                    fill="white"
                    fillLight="#b7b7b7"
                    width={45}
                    height={45}
                  />
                </div>
                <h4>
                  Consultation <br></br> and Strategy
                </h4>
                <p className={styles.card_text}>
                  Offering consultancy services to help clients define their
                  digital strategy, identify business goals, and plan effective
                  web solutions to achieve their objectives.
                </p>
              </div>
            </div>
            <div className={styles.single_card}>
              <div className={styles.single_card_content}>
                <div className={styles.icon_bg}>
                  <Analytics
                    fill="white"
                    fillLight="#b7b7b7"
                    width={45}
                    height={45}
                  />
                </div>
                <h4>
                  Analytics <br></br> And Reporting
                </h4>
                <p className={styles.card_text}>
                  Integrating analytics tools like Google Analytics to track
                  website performance, user behavior, and conversion metrics,
                  and providing regular reports to clients.
                </p>
              </div>
            </div>
            <div className={styles.single_card}>
              <div className={styles.single_card_content}>
                <div className={styles.icon_bg}>
                  <SocialMedia
                    fill="white"
                    fillLight="#b7b7b7"
                    width={42}
                    height={42}
                  />
                </div>
                <h4>
                  Social <br></br> Media Integration
                </h4>
                <p className={styles.card_text}>
                  Integrating social media platforms into websites to expand
                  online presence, encourage user engagement, and facilitate
                  social sharing of content.
                </p>
              </div>
            </div>
            <div className={styles.single_card}>
              <div className={styles.single_card_content}>
                <div className={styles.icon_bg}>
                  <UIUXDesign
                    fill="white"
                    fillLight="#b7b7b7"
                    width={45}
                    height={45}
                  />
                </div>
                <h4>
                  UI/UX<br></br> Design
                </h4>
                <p className={styles.card_text}>
                  Creating intuitive and visually appealing user interfaces (UI)
                  and enhancing user experience (UX) to engage visitors and
                  increase conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
