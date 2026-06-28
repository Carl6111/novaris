import Reveal from "../ui/Reveal";
import "./payoff.css";

export default function Payoff() {
  return (
    <section className="payoff">
      <div className="wrap payoff-inner">
        <Reveal>
          <p className="eyebrow">// Vom Chaos zur Klarheit</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="payoff-line">
            So viel passiert täglich in eurem Betrieb.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="payoff-line payoff-line--accent gold-text">
            Ein System bündelt alles.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="payoff-sub">
            Alles, was euer Betrieb täglich braucht — gebündelt, automatisiert,
            in eurer Hand.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
