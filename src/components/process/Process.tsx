import Reveal from "../ui/Reveal";
import "./process.css";

const STEPS = [
  {
    n: "01",
    title: "Analyse",
    desc: "Wir schauen, wo Zeit und Anfragen verloren gehen.",
  },
  {
    n: "02",
    title: "Aufbau",
    desc: "Wir bauen euer System auf eurem echten Prozess.",
  },
  {
    n: "03",
    title: "Integration",
    desc: "Es läuft mit euren Tools und eurem Team.",
  },
  {
    n: "04",
    title: "Betrieb",
    desc: "Wir betreuen, optimieren und erweitern — monatlich.",
  },
] as const;

export default function Process() {
  return (
    <section id="ablauf" className="section process">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">// Der Weg</p>
            <h2>Von der Analyse bis zum Betrieb.</h2>
          </div>
        </Reveal>

        <ol className="process-track">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="process-step">
              <span className="process-num gold-text">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
