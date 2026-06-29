import PageHero from "../components/ui/PageHero";
import Pricing from "../components/pricing/Pricing";
import Includes from "../components/includes/Includes";
import Faq from "../components/faq/Faq";
import Cta from "../components/cta/Cta";

export default function Preise() {
  return (
    <>
      <PageHero
        eyebrow="// Pakete"
        title={
          <>
            Klein anfangen. <span className="accent">Groß wachsen.</span>
          </>
        }
        sub="Alle Preise sind Richtwerte. Wir schnüren das Paket auf euren echten Prozess."
      />
      <Pricing />
      <Includes />
      <Faq />
      <Cta />
    </>
  );
}
