import Reveal from "../ui/Reveal";
import "./modules.css";

const MODULES = [
  {
    name: "Website",
    desc: "Modern und schnell — auf Google und in KI-Suchen gefunden.",
    tag: "Sichtbarkeit",
  },
  {
    name: "CRM",
    desc: "Alle Leads und Kunden zentral, automatisch erfasst und sortiert.",
    tag: "Überblick",
  },
  {
    name: "AI Docs",
    desc: "Angebote und Doku schreiben sich praktisch von selbst.",
    tag: "Zeit",
  },
  {
    name: "Client Portal",
    desc: "Ein Bereich, in dem eure Kunden alles auf einen Blick sehen.",
    tag: "Vertrauen",
  },
  {
    name: "Invoicing",
    desc: "Rechnungen gehen raus, ohne dass jemand dran denken muss.",
    tag: "Cashflow",
  },
] as const;

export default function Modules() {
  return (
    <section id="system" className="section modules">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">// Die Plattform</p>
            <h2>
              Fünf Bausteine. <span className="gold-text">Eine Plattform.</span>
            </h2>
            <p>
              Echter Code, echte KI — keine Klick-Tools wie Make, Zapier oder
              n8n. Das System gehört euch.
            </p>
          </div>
        </Reveal>

        <div className="modules-grid">
          {MODULES.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 0.06}
              className={`module-card card ${i === 0 ? "module-card--lead" : ""}`}
            >
              <span className="module-num">0{i + 1}</span>
              <h3>{m.name}</h3>
              <p>{m.desc}</p>
              <span className="module-tag">{m.tag}</span>
            </Reveal>
          ))}
          <Reveal delay={0.36} className="module-card module-card--note">
            <p>
              Alles greift ineinander. Ein Login, ein System, euer ganzer
              Betrieb.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
