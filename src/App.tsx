import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "motion/react";
import Nav from "./components/nav/Nav";
import HeroScrub from "./components/hero/HeroScrub";
import Problems from "./components/problems/Problems";
import Payoff from "./components/payoff/Payoff";
import Modules from "./components/modules/Modules";
import Pricing from "./components/pricing/Pricing";
import Process from "./components/process/Process";
import Examples from "./components/examples/Examples";
import Faq from "./components/faq/Faq";
import Cta from "./components/cta/Cta";
import Footer from "./components/footer/Footer";

export default function App() {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [prefersReduced]);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <Nav />
      <main>
        <HeroScrub />
        <Payoff />
        <Modules />
        <Problems />
        <Pricing />
        <Process />
        <Examples />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
