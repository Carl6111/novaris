import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import "./statement.css";

type Props = {
  eyebrow?: string;
  children: ReactNode;
  sub?: string;
  tone?: "bone" | "ink";
};

export default function Statement({ eyebrow, children, sub, tone = "bone" }: Props) {
  const reduce = useReducedMotion();
  const v = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
      };
  return (
    <section className={`statement statement--${tone}`}>
      <motion.div className="wrap statement-inner" {...v}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="statement-line">{children}</h2>
        {sub && <p className="statement-sub">{sub}</p>}
      </motion.div>
    </section>
  );
}
