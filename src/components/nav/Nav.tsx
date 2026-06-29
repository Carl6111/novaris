import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from "motion/react";
import Button from "../ui/Button";
import "./nav.css";

const LINKS = [
  { to: "/plattform", label: "Plattform" },
  { to: "/preise", label: "Preise" },
  { to: "/ueber", label: "Über" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 80));

  // dark hero only on home → transparent light nav; elsewhere solid from top
  const solid = scrolled || !isHome;

  return (
    <header className={`nav ${solid ? "nav--solid" : ""}`}>
      <div className="nav-inner wrap">
        <Link to="/" className="nav-logo" aria-label="Novaris Startseite">
          <img src="/logos/novaris-mark.png" alt="" className="nav-mark" />
          <span>OVARIS</span>
        </Link>

        <nav className="nav-links" aria-label="Hauptnavigation">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Button href="/kontakt" variant="primary" className="nav-cta">
          Gespräch buchen
        </Button>

        <button
          className="nav-burger"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="nav-close"
              aria-label="Menü schließen"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <nav className="nav-overlay-links">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link to={l.to} onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
