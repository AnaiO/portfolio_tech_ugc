import Header from "./components/Header";
import Hero from "./components/Hero";
import APropos from "./components/APropos";
import UGCvsPub from "./components/UGCvsPub";
import Realisations from "./components/Realisations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="divider" />
        <APropos />
        <div className="divider" />
        <UGCvsPub />
        <div className="divider" />
        <Realisations />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
