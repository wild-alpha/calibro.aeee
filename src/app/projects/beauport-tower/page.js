import { Sora } from "next/font/google";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import Body from "./components/Body";

const sora = Sora({ subsets: ["latin"], display: "swap" });

export default function BeauportTowerPage() {
  return (
    <>
      <Navbar />
      <main className={sora.className}>
        <Hero />
        <Body />
      </main>
      <Footer />
    </>
  );
}
