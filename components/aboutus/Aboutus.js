// Libraries
import React from "react";
import Link from "next/link";

// Components
import {
  PenIcon,
  SecurityIcon,
  GraphIcon,
  UserIcon,
  HatIcon,
  LocationIcon,
  AI,
  AIServices,
  Blockchain,
  WebDevelopment,
  Devops,
  WebSecurity,
  Aws,
} from "../../utils/icons";

// Styles
import styles from "./aboutus.module.css";

export default function Aboutus() {
  return (
    <section className={styles.about_us}>
      <div className="container">
        <h2 className="site-heading">Services We Provide</h2>
        <p className="site-text">Discover Our Core Services</p>
        <div className={styles.about_card}>
          <div className={styles.single_card}>
            <div className={styles.single_card_content}>
              <AIServices
                fill="#2C2929"
                width={50}
                height={50}
                className={styles.card_icon}
              />
              <h4>
                AI <br></br> Services
              </h4>
              <p className={styles.card_text}>
                Unlock the power of Artificial Intelligence (AI) with our
                comprehensive suite of services
              </p>
            </div>
            <Link href="services-detail" className={styles.card_link}>
              See More
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.single_card_content}>
              <Blockchain
                fill="#2C2929"
                width={50}
                height={50}
                className={styles.card_icon}
              />
              <h4>
                Blockchain <br></br> Development
              </h4>

              <p className={styles.card_text}>
                The groundbreaking potential of Blockchain technology is a core
                belief at Quadruple.
              </p>
            </div>
            <Link href="services-detail" className={styles.card_link}>
              See More
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.single_card_content}>
              <WebDevelopment
                fill="#2C2929"
                width={50}
                height={50}
                className={styles.card_icon}
              />
              <h4>
                Web <br></br> Development
              </h4>
              <p className={styles.card_text}>
                At Quadtruple Solutions, we craft web applications that
                seamlessly blend cutting-edge technology with creative
                innovation, ensuring simplicity, effectiveness, and captivation
                for your users.
              </p>
            </div>
            <Link href="services-detail" className={styles.card_link}>
              See More
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.single_card_content}>
              <Devops
                fill="#2C2929"
                width={60}
                height={60}
                className={styles.card_icon}
              />
              <h4>
                DevOps <br></br> Services
              </h4>
              <p className={styles.card_text}>
                Quadruple offers comprehensive DevOps services to streamline and
                enhance your development and operations processes.
              </p>
            </div>
            <Link href="services-detail" className={styles.card_link}>
              See More
            </Link>
          </div>
          <div className={styles.single_card}>
            <div className={styles.single_card_content}>
              <WebSecurity
                fill="#2C2929"
                width={50}
                height={50}
                className={styles.card_icon}
              />
              <h4>
                Web/Cyber <br></br> Security
              </h4>
              <p className={styles.card_text}>
                Quadruple offers custom web and cyber security services,
                including assessments and incident response planning, to
                safeguard your digital assets.
              </p>
            </div>
            <Link href="services-detail" className={styles.card_link}>
              See More
            </Link>
          </div>
          {/* <div className={styles.single_card}>
            <HatIcon
              fill="#2C2929"
              width={77}
              height={44}
              className={styles.card_icon}
            />
            <h4>
              Cyber <br></br> Security
            </h4>
            <p className={styles.card_text}>
              Elevate your digital defenses with Quadruple&apos;s cutting-edge
              cyber security solutions. We fortify your digital assets with
              robust cyber security measures, shielding you from evolving online
              threats.
            </p>
            <Link href="services-detail" className={styles.card_link}>
              See More
            </Link>
          </div> */}
          <div className={styles.single_card}>
            <div className={styles.single_card_content}>
              <Aws
                fill="#2C2929"
                width={60}
                height={60}
                className={styles.card_icon}
              />
              <h4>
                AWS <br></br> Services
              </h4>
              <p className={styles.card_text}>
                Unlock the full potential of cloud computing with
                Quadruple&apos;s AWS services, delivering unparalleled
                scalability, reliability, and innovation.
              </p>
            </div>
            <Link href="services-detail" className={styles.card_link}>
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
