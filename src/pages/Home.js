import React from "react";
import Clients from "../components/partners";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/header";
import Intro from "../components/introduction";
import Portfolio from "../components/Portfolio";
import Services from "../components/quran_and-dua";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Portfolio />
      <Clients />
      <Footer />
    </>
  );
};

export default Home;
