import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">NOVARIS</span>
          <p>KI-Systeme, die euren Betrieb täglich entlasten.</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href="#system">System</a>
          <a href="#preise">Preise</a>
          <a href="#faq">FAQ</a>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </nav>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Novaris</span>
        <span>Gebaut mit echtem Code &amp; echter KI.</span>
      </div>
    </footer>
  );
}
