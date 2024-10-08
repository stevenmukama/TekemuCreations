import Banner from "./common/Banner";
import Benefits from "./components/Benefits";
import ContactUs from "./components/ContactUs";
import FaqComponent from "./components/FaqComponent";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
    <Banner/>
    <Nav/>
    <Hero/>
    <Benefits/>
    <Stats/>
    <Testimonials/>
    <FaqComponent/>
    <Pricing/>
    <ContactUs/>
    <Footer/>
    </>
  );
}
