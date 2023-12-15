import React from "react";
// Sections
import TopNavbar from "../Nav/TopNavbar";
import Header from "../Sections/Header";
import Services from "../Sections/Services";
import Projects from "../Sections/Projects";
import Blog from "../Sections/Blog";
import Pricing from "../Sections/Pricing";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}


