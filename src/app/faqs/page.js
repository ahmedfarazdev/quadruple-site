"use client";
// Libraries
import React, { Fragment } from "react";
import { useState } from "react";

// Components
import { Minus, Plus } from "../../../utils/icons";
import FaqsData from "../../../data/FaqsData";
import PageHeader from "../../../components/pageheader/PageHeader";

// Styles
import styles from "./page.module.css";

export default function Page() {
  const [isOpen, setIsOpen] = useState("");

  return (
    <Fragment>
      <PageHeader title="Faq's" text="Faq's" />
      <section className={styles.faqs}>
        <div className="container">
          {FaqsData.map((item, index) => (
            <div key={index}>
              <div className={styles.faqs_row}>
                <div className={styles.faqs_meta}>
                  <div className={styles.faqs_accordian}>
                    {isOpen != item?.id ? (
                      <button
                        className={styles.faqs_accordian_btn}
                        onClick={() => setIsOpen(item.id)}
                      >
                        <h3 className={styles.faqs_accordian_title}>
                          {item.title}
                        </h3>
                        <div className={styles.accordian_icon}>
                          <Plus color="rgb(30, 30, 30)" />
                        </div>
                      </button>
                    ) : (
                      <button
                        className={styles.faqs_accordian_open_btn}
                        onClick={() => setIsOpen(false)}
                      >
                        <h3 className={styles.faqs_accordian_title}>
                          {item.title}
                        </h3>
                        <div className={styles.accordian_icon}>
                          <Minus color="rgb(30, 30, 30)" />
                        </div>
                      </button>
                    )}
                    {isOpen == item.id && (
                      <div className={styles.accordian_body}>
                        <p className={styles.accordian_description}>
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
}
