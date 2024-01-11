// Libraries
import React from "react";

// Components
import Hero from "../../components/hero/Hero";
import Aboutus from "../../components/aboutus/Aboutus";
import OurProjects from "../../components/ourprojects/OurProjects";
import Services from "../../components/services/Services";

// Styles
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section id="hero-section"><Hero /></section>
      <section id="aboutus-section"><Aboutus /></section>
      <section id="projects-section"><OurProjects /></section>
      <section id="services-section"><Services /></section>
    </>
  );
}
