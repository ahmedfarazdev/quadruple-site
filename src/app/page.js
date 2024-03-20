// Libraries
import React from "react";

// Components
import Hero from "../../components/hero/Hero";
import Aboutus from "../../components/aboutus/Aboutus";
import OurProjects from "../../components/ourprojects/OurProjects";

export default function Home() {
  return (
    <>
      <section id="hero-section"><Hero /></section>
      <section id="aboutus-our-services"><Aboutus /></section>
      <section id="projects-section"><OurProjects /></section>
      {/* <section id="services-section"><Services /></section> */}
    </>
  );
}
