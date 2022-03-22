import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testmonials from "./components/Testmonials";
import Services from "./components/Services";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Testmonials />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
