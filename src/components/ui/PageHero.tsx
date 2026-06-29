import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import "./pagehero.css";

type Props = {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
};

export default function PageHero({ eyebrow, title, sub }: Props) {
  const reduce = useReducedMotion();
  const rise = (d: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: d, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <header className="pagehero">
      <div className="wrap">
        <motion.p className="eyebrow" {...rise(0)}>
          {eyebrow}
        </motion.p>
        <motion.h1 className="pagehero-title" {...rise(0.08)}>
          {title}
        </motion.h1>
        {sub && (
          <motion.p className="pagehero-sub" {...rise(0.16)}>
            {sub}
          </motion.p>
        )}
      </div>
    </header>
  );
}
