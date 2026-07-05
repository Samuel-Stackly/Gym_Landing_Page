import About from "../components/home/About";
import Blog from "../components/home/Blog";
import BMI from "../components/home/BMI";
import Coaches from "../components/home/Coaches";
import Facilities from "../components/home/Facilities";
import Gallery from "../components/home/Gallery";
import Hero from "../components/home/Hero";
import Pricing from "../components/home/Pricing";
import Review from "../components/home/Reviews";
import Schedule from "../components/home/Schedule";
import Contact from "../components/home/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Facilities />
      <BMI />
      <Schedule />
      <Review />
      <Pricing />
      <Coaches  />
      <Blog />
      <Gallery />
      <Contact />
    </>
  );
}

export default Home;