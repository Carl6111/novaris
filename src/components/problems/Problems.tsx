import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import "./problems.css";

const PROBLEMS = [
  "Anfragen bleiben Stunden liegen — der Lead ist längst beim Nächsten.",
  "Angebote schreibt ihr abends von Hand. Jedes Mal neu.",
  "Rechnungen gehen zu spät raus. Oder gehen ganz unter.",
  "Niemand weiß auf Anhieb, wo ein Lead gerade steht.",
  "Das Team ertrinkt in Kleinkram, statt zu wachsen.",
  "Mehr Umsatz hieße bisher: mehr Leute einstellen.",
] as const;

interface ItemProps {
  progress: MotionValue<number>;
  index: number;
  total: number;
  text: string;
}

// motion useTransform requires a monotonically increasing input range within [0,1]
function clampRange(
  raw: [number, number, number, number]
): [number, number, number, number] {
  const out = raw.map((v) => Math.min(1, Math.max(0, v)));
  for (let i = 1; i < out.length; i++) {
    if (out[i] <= out[i - 1]) out[i] = Math.min(1, out[i - 1] + 0.0001);
  }
  return out as [number, number, number, number];
}

function ProblemItem({ progress, index, total, text }: ItemProps) {
  const side = index % 2 === 0 ? "left" : "right";
  const center = (index + 0.5) / total;
  const span = 0.5 / total;
  const range = clampRange([
    center - span * 1.6,
    center - span * 0.7,
    center + span * 0.7,
    center + span * 1.6,
  ]);

  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, range, [70, 0, 0, -70]);
  const xFrom = side === "left" ? -60 : 60;
  const x = useTransform(progress, range, [xFrom, 0, 0, xFrom * 0.5]);

  return (
    <motion.div
      className={`problem-card problem-card--${side}`}
      style={{ opacity, y, x }}
    >
      <span className="problem-index">0{index + 1}</span>
      <p>{text}</p>
    </motion.div>
  );
}

export default function Problems() {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const thesisScale = useTransform(scrollYProgress, [0, 0.15], [0.94, 1]);

  if (prefersReduced) {
    return (
      <section className="problems problems--static">
        <div className="wrap">
          <p className="eyebrow">// Der ganz normale Tag</p>
          <h2 className="problems-thesis-text">Erkennen Sie sich wieder?</h2>
          <ul className="problems-list">
            {PROBLEMS.map((t, i) => (
              <li key={i}>
                <span className="problem-index">0{i + 1}</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="problems" aria-label="Probleme im Betrieb">
      <div className="problems-sticky">
        <motion.div className="problems-thesis" style={{ scale: thesisScale }}>
          <p className="eyebrow">// Der ganz normale Tag</p>
          <h2 className="problems-thesis-text">
            Erkennen Sie sich <span className="gold-text">wieder?</span>
          </h2>
        </motion.div>

        <div className="problems-stage">
          {PROBLEMS.map((t, i) => (
            <ProblemItem
              key={i}
              progress={scrollYProgress}
              index={i}
              total={PROBLEMS.length}
              text={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
