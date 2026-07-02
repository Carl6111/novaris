import { useEffect, useRef } from "react";
import "./scene.css";

// One continuous canvas behind the whole page. Stays light (paper) and morphs
// to a dark cinematic scene only across the organism section's scroll span,
// so sections flow into each other with no hard cuts.
export default function SceneBackground() {
  const darkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const smooth = (t: number) => t * t * (3 - 2 * t);
    const update = () => {
      const el = document.querySelector<HTMLElement>(".organism-section");
      let dark = 0;
      if (el) {
        const r = el.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        const p = total > 0 ? Math.min(Math.max(-r.top / total, 0), 1) : 0;
        const inR = Math.min(p / 0.14, 1);
        const outR = Math.min(Math.max((1 - p) / 0.14, 0), 1);
        dark = smooth(Math.min(inR, outR));
      }
      if (darkRef.current) darkRef.current.style.opacity = String(dark);
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="scene-bg" aria-hidden="true">
      <div className="scene-paper" />
      <div className="scene-vein" />
      <div className="scene-dark" ref={darkRef} />
    </div>
  );
}
