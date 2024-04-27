import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Feature from "./components/Feature";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="text-2xl bg-zinc text-white overflow-x-hidden">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Eyes />
      <Feature />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
