import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import "./payoff.css";

const MODULES = ["Website", "CRM", "AI Docs", "Client Portal", "Invoicing"];

export default function Payoff() {
  return (
    <section className="platform">
      <div className="wrap platform-grid">
        <div className="platform-copy">
          <Reveal>
            <p className="eyebrow">// Eine Plattform</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="platform-title">
              Euer ganzer Betrieb. <span className="gold-text">Ein Login.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="platform-sub">
              Website, CRM, AI Docs, Client Portal und Invoicing — kein
              Tool-Chaos mehr. Alles greift ineinander, alles in eurer Hand.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="platform-chips">
              {MODULES.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <Button href="#kontakt" variant="primary" className="platform-cta">
              Plattform ansehen
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="platform-visual">
          <img
            src="/images/googleseo.png"
            alt="Novaris Plattform-Dashboard"
            className="platform-dash"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
