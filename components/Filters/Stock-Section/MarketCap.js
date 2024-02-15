import HeadLineStock from "@/components/HeadLineStock";
import RadioInput from "@/components/RadioInput";
import { marketCapList } from "@/constants";

function MarketCap() {
  return (
    <div className="mb-3 md:mb-0">
      <HeadLineStock title="Market Cap" />
      <RadioInput list={marketCapList} name="market" />
    </div>
  );
}

export default MarketCap;
