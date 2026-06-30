import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import "./engine.css";

// Scroll progress driven off the section's own rect via rAF.
// Robust against Lenis smooth-scroll, which useScroll does not reliably track here.
function useSectionProgress(ref: React.RefObject<HTMLElement | null>): MotionValue<number> {
  const progress = useMotionValue(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
      progress.set(p);
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [ref, progress]);
  return progress;
}

type Piece = {
  name: string;
  back: string;
  num: string;
  tag: string;
  benefits: string[];
  hx: string;
  hy: string;
  hz: string;
  angle: string;
  start: { x: number; y: number; rz: number };
  icon: React.ReactNode;
};

const R = "var(--R)";
const r5 = "calc(var(--R) * 0.5)";
const r86 = "calc(var(--R) * 0.866)";

const PIECES: Piece[] = [
  {
    name: "Website",
    back: "Website",
    num: "01",
    tag: "Sichtbar",
    benefits: ["SEO-ready", "mobil top", "Lead-Capture eingebaut"],
    hx: "0px",
    hy: `calc(${R} * -1)`,
    hz: "34px",
    angle: "-90deg",
    start: { x: -540, y: -320, rz: -38 },
    icon: (
      <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
      </svg>
    ),
  },
  {
    name: "CRM",
    back: "CRM",
    num: "02",
    tag: "Leads",
    benefits: ["keine verlorenen Anfragen", "Status-Pipeline", "Follow-up automatisch"],
    hx: r86,
    hy: `calc(${r5} * -1)`,
    hz: "0px",
    angle: "-30deg",
    start: { x: 580, y: -240, rz: 34 },
    icon: (
      <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="6" cy="6" r="2.4" />
        <circle cx="18" cy="9" r="2.4" />
        <circle cx="9" cy="18" r="2.4" />
        <path d="M8 7l8 1.6M8 8l1 8" />
      </svg>
    ),
  },
  {
    name: "AI Docs",
    back: "AI Docs",
    num: "03",
    tag: "Doku",
    benefits: ["Minuten statt Stunden", "immer konsistent", "auf Knopfdruck"],
    hx: r86,
    hy: r5,
    hz: "18px",
    angle: "30deg",
    start: { x: 620, y: 280, rz: -30 },
    icon: (
      <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 3h7l5 5v13H6z" />
        <path d="M13 3v5h5" />
        <path d="M11 13l1.1 2.4L14.5 16.5 12.1 17.6 11 20l-1.1-2.4L7.5 16.5 9.9 15.4z" />
      </svg>
    ),
  },
  {
    name: "Client Portal",
    back: "Client Portal",
    num: "04",
    tag: "Kunden",
    benefits: ["alles an einem Ort", "transparent", "weniger Rückfragen"],
    hx: "0px",
    hy: R,
    hz: "34px",
    angle: "90deg",
    start: { x: -40, y: 480, rz: 26 },
    icon: (
      <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <circle cx="6" cy="6.5" r=".6" fill="currentColor" />
        <path d="M7 14h6" />
      </svg>
    ),
  },
  {
    name: "Invoicing",
    back: "Invoicing",
    num: "05",
    tag: "Umsatz",
    benefits: ["Zahlungs-Tracking", "keine Mahn-Arbeit", "pünktlich raus"],
    hx: `calc(${r86} * -1)`,
    hy: r5,
    hz: "18px",
    angle: "150deg",
    start: { x: -620, y: 260, rz: 38 },
    icon: (
      <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />
        <path d="M9 8h6M9 12h6" />
      </svg>
    ),
  },
  {
    name: "Sichtbarkeit",
    back: "SEO + Google Business",
    num: "06",
    tag: "Gefunden",
    benefits: ["lokal gefunden werden", "Top-Rankings", "Profil gepflegt"],
    hx: `calc(${r86} * -1)`,
    hy: `calc(${r5} * -1)`,
    hz: "0px",
    angle: "210deg",
    start: { x: -580, y: -280, rz: -36 },
    icon: (
      <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21c4-4.5 6-7.7 6-11a6 6 0 0 0-12 0c0 3.3 2 6.5 6 11z" />
        <path d="M12 6.5l1 2 2.2.2-1.7 1.5.6 2.1L12 12.2 9.9 12.3l.6-2.1L8.8 8.7 11 8.5z" />
      </svg>
    ),
  },
];

type PieceProps = {
  piece: Piece;
  index: number;
  progress: MotionValue<number>;
  reduced: boolean;
};

function EnginePiece({ piece, index, progress, reduced }: PieceProps) {
  const s0 = 0.12 + index * 0.1;
  const e0 = Math.min(s0 + 0.22, 1);
  const x = useTransform(progress, [s0, e0], [piece.start.x, 0]);
  const y = useTransform(progress, [s0, e0], [piece.start.y, 0]);
  const z = useTransform(progress, [s0, e0], [-480, 0]);
  const rotateZ = useTransform(progress, [s0, e0], [piece.start.rz, 0]);
  const scale = useTransform(progress, [s0, e0], [0.5, 1]);
  const opacity = useTransform(progress, [Math.max(s0 - 0.04, 0), s0 + 0.08], [0, 1]);
  const [flipped, setFlipped] = useState(false);

  const flyStyle = reduced ? undefined : { x, y, z, rotateZ, scale, opacity };

  return (
    <div
      className="slot"
      style={
        { "--hx": piece.hx, "--hy": piece.hy, "--hz": piece.hz } as React.CSSProperties
      }
    >
      <motion.div className="piece-fly" style={flyStyle}>
        <button
          type="button"
          className="piece"
          aria-pressed={flipped}
          aria-label={`${piece.name} — umdrehen für Details`}
          onClick={() => setFlipped((f) => !f)}
        >
          <motion.div
            className="piece-card"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          >
            <div className="face front">
              {piece.icon}
              <div>
                <div className="pt">{piece.name}</div>
                <div className="pn">
                  {piece.num} / {piece.tag}
                </div>
              </div>
            </div>
            <div className="face back">
              <div className="bt">{piece.back}</div>
              <ul>
                {piece.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </button>
      </motion.div>
    </div>
  );
}

type SpokeProps = {
  index: number;
  angle: string;
  progress: MotionValue<number>;
  reduced: boolean;
};

function Spoke({ index, angle, progress, reduced }: SpokeProps) {
  const s0 = 0.16 + index * 0.1;
  const e0 = Math.min(s0 + 0.2, 1);
  const scaleX = useTransform(progress, [s0, e0], [0, 1]);

  return (
    <div
      className="spoke"
      style={{ "--a": angle, "--fd": `${index * 0.4}s` } as React.CSSProperties}
    >
      <motion.div
        className="spoke-bar"
        style={reduced ? undefined : { scaleX }}
      />
      <span className="dot" />
    </div>
  );
}

export default function Engine() {
  const ref = useRef<HTMLElement>(null);
  const reducedRaw = useReducedMotion();
  const reduced = !!reducedRaw;
  const scrollYProgress = useSectionProgress(ref);
  const [lit, setLit] = useState(reduced);
  useMotionValueEvent(scrollYProgress, "change", (v) => setLit(v > 0.82));

  const coreScale = useTransform(scrollYProgress, [0.04, 0.2], [0, 1]);
  const coreOpacity = useTransform(scrollYProgress, [0.04, 0.18], [0, 1]);

  return (
    <section ref={ref} className="engine-section" id="system" aria-label="Growth Engine Plus">
      <div className={`engine-pin ${lit ? "lit-engine" : ""}`}>
        <div className="engine-head">
          <p className="eyebrow">// Die Growth Engine Plus</p>
          <h2>
            Sechs Teile. <span className="gold-text">Ein Triebwerk.</span>
          </h2>
          <p>Scroll — und sieh, wie sich die Bausteine zu einem laufenden System fügen.</p>
        </div>

        <div className="engine-stage">
          <div className="engine-world">
            {PIECES.map((p, i) => (
              <Spoke
                key={`spoke-${p.name}`}
                index={i}
                angle={p.angle}
                progress={scrollYProgress}
                reduced={reduced}
              />
            ))}

            <motion.div
              className="engine-core"
              style={reduced ? undefined : { scale: coreScale, opacity: coreOpacity }}
            >
              <span className="core-label">
                GROWTH
                <br />
                ENGINE
              </span>
            </motion.div>

            {PIECES.map((p, i) => (
              <EnginePiece
                key={p.name}
                piece={p}
                index={i}
                progress={scrollYProgress}
                reduced={reduced}
              />
            ))}
          </div>
        </div>

        <p className="engine-tip">Tipp — tippe ein Teil an, um es umzudrehen</p>
      </div>
    </section>
  );
}
