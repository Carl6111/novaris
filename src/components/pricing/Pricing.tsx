import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import "./pricing.css";

const TIERS = [
  {
    name: "Automations",
    price: "ab 500€",
    period: "/ Monat",
    desc: "Einzelne KI-Lösungen für konkrete Probleme.",
    features: [
      "Lead-Capture & Auto-Reply",
      "Anbindung an euer CRM",
      "1 Agent, sauber integriert",
    ],
    featured: false,
  },
  {
    name: "Pipeline",
    price: "~2.000€",
    period: "/ Monat",
    desc: "Lead- und Sales-Pipeline plus Automatisierungen.",
    features: [
      "Lead-Qualifizierung",
      "Sales-Automatisierung",
      "Mehrere Agents im Verbund",
      "Monatliche Optimierung",
    ],
    featured: true,
  },
  {
    name: "Growth Engine Plus",
    price: "4.000€",
    period: "/ Monat",
    desc: "Die volle Plattform für euren ganzen Betrieb.",
    features: [
      "Website + CRM + AI Docs",
      "Client Portal + Invoicing",
      "Support- & Reporting-Agents",
      "Laufender Betrieb & Support",
    ],
    featured: false,
  },
] as const;

export default function Pricing() {
  return (
    <section id="preise" className="section pricing">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">// Pakete</p>
            <h2>
              Klein anfangen — oder das{" "}
              <span className="gold-text">volle System.</span>
            </h2>
            <p>
              Alle Preise sind Richtwerte. Wir schnüren das Paket auf euren
              echten Prozess.
            </p>
          </div>
        </Reveal>

        <div className="pricing-grid">
          {TIERS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className={`price-card card ${t.featured ? "price-card--featured" : ""}`}
            >
              {t.featured && <span className="price-badge">Beliebt</span>}
              <h3>{t.name}</h3>
              <div className="price-amount">
                <span className="price-value gold-text">{t.price}</span>
                <span className="price-period">{t.period}</span>
              </div>
              <p className="price-desc">{t.desc}</p>
              <ul className="price-features">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Button
                href="#kontakt"
                variant={t.featured ? "primary" : "ghost"}
                className="price-cta"
              >
                Gespräch buchen
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
