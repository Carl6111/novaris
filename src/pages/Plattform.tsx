import PageHero from "../components/ui/PageHero";
import ModuleRows from "../components/modules/ModuleRows";
import Statement from "../components/ui/Statement";
import Examples from "../components/examples/Examples";
import Process from "../components/process/Process";
import Cta from "../components/cta/Cta";

export default function Plattform() {
  return (
    <>
      <PageHero
        eyebrow="// Die Plattform"
        title={
          <>
            Euer ganzer Betrieb. <span className="accent">Ein System.</span>
          </>
        }
        sub="Fünf Werkzeuge, die sonst getrennt laufen — gebündelt, automatisiert, in eurer Hand."
      />
      <ModuleRows />
      <Statement
        eyebrow="// Kein Tool-Chaos"
        sub="Keine Klick-Tools wie Make, Zapier oder n8n. Echter Code, echte KI-Agents — und alles gehört euch."
      >
        Gebaut, nicht <span className="accent">zusammengeklickt.</span>
      </Statement>
      <Examples />
      <Process />
      <Cta />
    </>
  );
}
