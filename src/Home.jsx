import "./style.css";
import "./slider.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import SocialSection from "./components/SocialSection";
import About from "./components/About";
import Services from "./components/Services";
import News from "./components/News";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Slider />
      <SocialSection />
      <About />
      <Services />
      <News />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;