import HeroScrub from "../components/hero/HeroScrub";
import Problems from "../components/problems/Problems";
import Payoff from "../components/payoff/Payoff";
import Engine from "../components/engine/Engine";
import Stats from "../components/stats/Stats";
import Integrations from "../components/integrations/Integrations";
import Cta from "../components/cta/Cta";

export default function Home() {
  return (
    <>
      <HeroScrub />
      <Problems />
      <Payoff />
      <Engine />
      <Stats />
      <Integrations />
      <Cta />
    </>
  );
}
