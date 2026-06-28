import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import "./hero.css";

const FRAME_COUNT = 144;
const framePath = (i: number) =>
  `/hero/frame-${String(i).padStart(3, "0")}.jpg`;

function useFrames(enabled: boolean) {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === FRAME_COUNT && !cancelled) setReady(true);
      };
      imgs[i - 1] = img;
    }
    setImages(imgs);
    return () => {
      cancelled = true;
    };
  }, [enabled]);

  return { images, ready };
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  w: number,
  h: number
) {
  if (!img.complete || img.naturalWidth === 0) return;
  const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
  const dw = img.naturalWidth * scale;
  const dh = img.naturalHeight * scale;
  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
}

interface BeatProps {
  progress: MotionValue<number>;
  range: [number, number, number, number];
  children: ReactNode;
  className?: string;
}

function Beat({ progress, range, children, className }: BeatProps) {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, range, [40, 0, 0, -40]);
  return (
    <motion.div className={`hero-beat ${className ?? ""}`} style={{ opacity, y }}>
      {children}
    </motion.div>
  );
}

export default function HeroScrub() {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { images, ready } = useFrames(!prefersReduced);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const render = (p: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const idx = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.round(p * (FRAME_COUNT - 1)))
    );
    drawCover(ctx, images[idx], canvas.width, canvas.height);
  };

  useMotionValueEvent(scrollYProgress, "change", render);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      render(scrollYProgress.get());
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  useEffect(() => {
    if (ready) render(scrollYProgress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  if (prefersReduced) {
    return (
      <section className="hero hero--static">
        <img src="/hero/frame-001.jpg" alt="" className="hero-static-img" />
        <div className="hero-static-copy wrap">
          <p className="eyebrow">// Dein Betrieb. Jeden Tag.</p>
          <h1>
            Hunderte Probleme im Unternehmen.
            <br />
            <span className="gold-text">Eine Lösung. Ein System.</span>
          </h1>
          <p className="hero-sub">
            Anfragen, Doku, Rechnungen, Leads — alles auf einmal, alles von Hand.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="hero" aria-label="Novaris System">
      <div className="hero-sticky">
        <canvas ref={canvasRef} className="hero-canvas" />
        {!ready && <div className="hero-loader" aria-hidden="true" />}

        <div className="hero-overlay wrap">
          <Beat progress={scrollYProgress} range={[0, 0.04, 0.26, 0.34]}>
            <p className="eyebrow">// Dein Betrieb. Jeden Tag.</p>
            <h1>Hunderte Probleme im Unternehmen.</h1>
            <p className="hero-sub">
              Anfragen, Doku, Rechnungen, Leads — alles auf einmal, alles von
              Hand.
            </p>
            <span className="hero-cue">Scroll ↓</span>
          </Beat>

          <Beat progress={scrollYProgress} range={[0.4, 0.5, 0.62, 0.7]}>
            <h2 className="hero-mid gold-text">Eine Lösung.</h2>
          </Beat>

          <Beat progress={scrollYProgress} range={[0.74, 0.84, 0.93, 1]}>
            <h2 className="hero-mid">
              Ein <span className="gold-text">System.</span>
            </h2>
            <p className="hero-sub">
              Alles, was euer Betrieb täglich braucht — in eurer Hand.
            </p>
          </Beat>
        </div>
      </div>
    </section>
  );
}
