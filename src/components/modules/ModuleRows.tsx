import { motion } from "motion/react";
import "./module-rows.css";

type Module = {
  tag: string;
  title: string;
  accent: string;
  desc: string;
  img?: string;
};

const MODULES: Module[] = [
  {
    tag: "Website",
    title: "Gefunden,",
    accent: "nicht gesucht.",
    desc: "Eine schnelle, moderne Seite — sichtbar auf Google und in KI-Suchen. Euer erster Eindruck arbeitet für euch.",
    img: "/images/googleseo.png",
  },
  {
    tag: "CRM",
    title: "Jeder Lead",
    accent: "an einem Ort.",
    desc: "Kontakte, Anfragen und Status — automatisch erfasst, sortiert und nie wieder vergessen.",
    img: "/images/crm.png",
  },
  {
    tag: "AI Docs",
    title: "Angebote, die sich",
    accent: "selbst schreiben.",
    desc: "Doku und Angebote entstehen aus euren Daten — in Minuten statt Abenden.",
    img: "/images/aidocs.png",
  },
  {
    tag: "Client Portal",
    title: "Ein Zuhause",
    accent: "für eure Kunden.",
    desc: "Status, Dateien, Rechnungen — alles auf einen Blick. Weniger Rückfragen, mehr Vertrauen.",
    img: "/images/clientportal.png",
  },
  {
    tag: "Invoicing",
    title: "Rechnungen,",
    accent: "die rausgehen.",
    desc: "Automatisch erstellt und versendet — niemand muss mehr dran denken.",
  },
];

function ModuleRow({ m, index }: { m: Module; index: number }) {
  const flipped = index % 2 === 1;
  return (
    <div className={`mrow ${flipped ? "mrow--flip" : ""}`}>
      <motion.div
        className="mrow-copy"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="mrow-num">{String(index + 1).padStart(2, "0")}</span>
        <p className="mrow-tag">{m.tag}</p>
        <h3 className="mrow-title">
          {m.title} <span className="accent">{m.accent}</span>
        </h3>
        <p className="mrow-desc">{m.desc}</p>
      </motion.div>

      <motion.div
        className="mrow-visual"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mrow-frame">
          <div className="mrow-bar">
            <span /><span /><span />
          </div>
          {m.img ? (
            <img src={m.img} alt={`${m.tag} Ansicht`} loading="lazy" />
          ) : (
            <div className="mrow-mock" aria-hidden="true">
              <div className="mrow-mock-row" />
              <div className="mrow-mock-row short" />
              <div className="mrow-mock-amount">€ 2.480,00</div>
              <div className="mrow-mock-row" />
              <div className="mrow-mock-cta">Bezahlt</div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function ModuleRows() {
  return (
    <section id="system" className="section module-rows">
      <div className="wrap">
        {MODULES.map((m, i) => (
          <ModuleRow key={m.tag} m={m} index={i} />
        ))}
      </div>
    </section>
  );
}
