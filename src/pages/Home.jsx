import About from "../components/home/About";
import BMI from "../components/home/BMI";
import Facilities from "../components/home/Facilities";
import Hero from "../components/home/Hero";
import Pricing from "../components/home/Pricing";
import Review from "../components/home/Reviews";
import Schedule from "../components/home/Schedule";

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
    </>
  );
}

export default Home;