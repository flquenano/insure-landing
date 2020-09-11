import React from "react";
import "./App.scss";

import Header from "components/Header/Header.jsx";
import Intro from "components/Intro/Intro.jsx";
import Features from "components/Features/Features.jsx";
import CTA from "components/CTA/CTA.jsx";
import Footer from "components/Footer/Footer.jsx";
const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Features />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
