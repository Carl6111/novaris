import Reveal from "../ui/Reveal";
import "./about.css";

const VALUES = [
  { t: "Echt statt Schein", d: "Echter Code und echte KI-Agents — keine Klick-Tools, die beim ersten Update brechen." },
  { t: "Wenige, tiefe Lösungen", d: "Wir bauen nicht alles. Wir bauen das Richtige — und das richtig." },
  { t: "Partner, kein Lieferant", d: "Wir betreuen, optimieren und wachsen mit eurem Betrieb. Jeden Monat." },
] as const;

export default function About() {
  return (
    <section className="section about">
      <div className="wrap">
        <Reveal>
          <p className="about-lead">
            Die meisten Agenturen verkaufen Werkzeuge. Wir bauen{" "}
            <span className="accent">Systeme</span>, die Teil eures Betriebs
            werden.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="about-para">
            Novaris baut KI-Systeme, die Arbeit wirklich abnehmen — damit ihr
            mehr schafft, ohne neu einzustellen. Mehr Output, gleiches Team.
            Kein Software-Friedhof, sondern eine Plattform, die euch gehört.
          </p>
        </Reveal>

        <div className="about-values">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={0.12 + i * 0.08} className="about-value">
              <h3>{v.t}</h3>
              <p>{v.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
