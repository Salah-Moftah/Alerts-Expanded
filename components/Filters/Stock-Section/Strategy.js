import StrategyAssetList from "@/components/StrategyAssetList";
import TitleName from "@/components/TitleName";
import { strategyList } from "@/constants";

function Strategy() {
  return (
    <div className="mb-3 md:mb-0">
      <div className="md:ml-6 ml-0 mb-2 md:text-start text-center">
        <TitleName title="Strategy" />
      </div>
      <StrategyAssetList list={strategyList} />
    </div>
  );
}

export default Strategy;
