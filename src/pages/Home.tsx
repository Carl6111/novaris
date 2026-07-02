import HeroScrub from "../components/hero/HeroScrub";
import Problems from "../components/problems/Problems";
import Payoff from "../components/payoff/Payoff";
import Organism from "../components/organism/Organism";
import Stats from "../components/stats/Stats";
import Integrations from "../components/integrations/Integrations";
import Cta from "../components/cta/Cta";

export default function Home() {
  return (
    <>
      <HeroScrub />
      <Problems />
      <Payoff />
      <Organism />
      <Stats />
      <Integrations />
      <Cta />
    </>
  );
}
