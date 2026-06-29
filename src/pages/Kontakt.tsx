import PageHero from "../components/ui/PageHero";
import Contact from "../components/contact/Contact";

export default function Kontakt() {
  return (
    <>
      <PageHero
        eyebrow="// 15 Minuten"
        title={
          <>
            Lass uns <span className="accent">reden.</span>
          </>
        }
        sub="Wir schauen gemeinsam, wo euer System am meisten Zeit spart — unverbindlich."
      />
      <Contact />
    </>
  );
}
