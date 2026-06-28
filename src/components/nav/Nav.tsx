import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import Button from "../ui/Button";
import "./nav.css";

const LINKS = [
  { href: "#system", label: "System" },
  { href: "#preise", label: "Preise" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 80));

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <div className="nav-inner wrap">
        <a href="#" className="nav-logo" aria-label="Novaris Startseite">
          NOVARIS
        </a>
        <nav className="nav-links" aria-label="Hauptnavigation">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <Button href="#kontakt" variant="primary" className="nav-cta">
          Gespräch buchen
        </Button>
      </div>
    </header>
  );
}
