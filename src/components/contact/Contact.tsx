import { useState } from "react";
import Reveal from "../ui/Reveal";
import "./contact.css";

const STEPS = [
  { n: "01", t: "Kurzes Gespräch", d: "15 Minuten. Wir hören zu, wo bei euch Zeit verloren geht." },
  { n: "02", t: "Klarer Vorschlag", d: "Ihr bekommt einen konkreten Plan — kein Verkaufsgerede." },
  { n: "03", t: "Wir bauen", d: "Schritt für Schritt, ohne euren Betrieb zu stören." },
] as const;

const EMAIL = "[PLATZHALTER-EMAIL]";

export default function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Anfrage von ${name || "—"}`);
    const body = encodeURIComponent(`${msg}\n\nKontakt: ${from}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <Reveal>
            <p className="eyebrow">// So läuft's</p>
          </Reveal>
          <ol className="contact-steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="contact-step">
                <span className="contact-step-n accent">{s.n}</span>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.1} className="contact-card">
          <form onSubmit={onSubmit}>
            <label>
              Name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Vor- und Nachname"
                required
              />
            </label>
            <label>
              E-Mail oder Telefon
              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="So erreichen wir euch"
                required
              />
            </label>
            <label>
              Worum geht's?
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={4}
                placeholder="Ein, zwei Sätze reichen."
              />
            </label>
            <button type="submit" className="btn btn--primary contact-submit">
              <span>Gespräch anfragen</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
