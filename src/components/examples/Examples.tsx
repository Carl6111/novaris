import Reveal from "../ui/Reveal";
import "./examples.css";

const EXAMPLES = [
  {
    name: "Lead-Capture",
    flow: "Anfrage rein → qualifizierte Antwort → Eintrag im CRM",
    desc: "In Minuten statt Stunden. Kein Lead bleibt liegen.",
  },
  {
    name: "Support-Agent",
    flow: "Frage rein → Antwort rund um die Uhr → Eskalation nur bei Bedarf",
    desc: "Beantwortet Kundenfragen 24/7, eskaliert nur das Komplexe.",
  },
  {
    name: "Reporting-Agent",
    flow: "Woche endet → Bericht raus → Klarheit am Montag",
    desc: "Conversion, Antwortzeit, Lead-Qualität — automatisch.",
  },
] as const;

export default function Examples() {
  return (
    <section className="section examples">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">// In der Praxis</p>
            <h2>So sieht ein Agent im Alltag aus.</h2>
          </div>
        </Reveal>

        <div className="examples-grid">
          {EXAMPLES.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.08} className="example-card card">
              <h3>{e.name}</h3>
              <p className="example-flow">{e.flow}</p>
              <p className="example-desc">{e.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
