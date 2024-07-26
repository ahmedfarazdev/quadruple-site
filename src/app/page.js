// Libraries
import React from "react";
import dynamic from "next/dynamic";
// Components
// import Hero from "../../components/hero/Hero";
// import Aboutus from "../../components/aboutus/Aboutus";
// import OurProjects from "../../components/ourprojects/OurProjects";
// import Blogs from "../../components/blogs/Blogs";
// import MobileAppShowCase from "../../components/mobileappshowcase/MobileAppShowCase";

const Hero = dynamic(() => import('../../components/hero/Hero'), {
  ssr: false,
});

const Aboutus = dynamic(() => import('../../components/aboutus/Aboutus'), {
  ssr: false,
});

const OurProjects = dynamic(() => import('../../components/ourprojects/OurProjects'), {
  ssr: false,
});

const Blogs = dynamic(() => import('../../components/blogs/Blogs'), {
  ssr: false,
});

const MobileAppShowCase = dynamic(() => import('../../components/mobileappshowcase/MobileAppShowCase'), {
  ssr: false,
});


export default function Home() {
  return (
    <>
      <section id="hero-section"><Hero /></section>
      <section id="aboutus-our-services"><Aboutus /></section>
      <section id="projects-section"><OurProjects /></section>
      <MobileAppShowCase />
      <section id="blogs-section"><Blogs /></section>
      {/* <section id="services-section"><Services /></section> */}
    </>
  );
}
