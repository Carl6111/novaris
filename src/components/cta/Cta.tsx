import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import "./cta.css";

export default function Cta() {
  return (
    <section id="kontakt" className="cta">
      <div className="cta-glow" aria-hidden="true" />
      <div className="wrap cta-inner">
        <Reveal>
          <p className="eyebrow">// Unverbindlich</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="cta-title">
            Lass uns <span className="gold-text">15 Minuten</span> reden.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="cta-sub">
            Wir schauen gemeinsam, wo euer System am meisten Zeit spart —
            unverbindlich.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="cta-actions">
            <Button href="mailto:[PLATZHALTER-EMAIL]" variant="primary">
              Gespräch buchen
            </Button>
            <a href="tel:[PLATZHALTER-TEL]" className="cta-call">
              oder anrufen
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
