
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductionSpotLight from "./components/ProductionSpotLight";
import CalibroShowcase from "./components/CalibroShowcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <ProductionSpotLight />
        <CalibroShowcase />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
