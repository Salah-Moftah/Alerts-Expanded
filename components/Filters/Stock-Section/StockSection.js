import {
  Industry,
  MarketCap,
  RiskLevel,
  Strategy,
  Asset,
  Search,
} from "@/components";

function StockSection() {
  return (
    <div className="bg-first-gray rounded-[7px] mt-3 p-4">
      <h4 className="text-[15px] text-white font-bold">Stock</h4>
      <div className="m-3 mr-5">
        <Search title="$ TICKER" style="h-[36px]" textColor="text-[#737373]" />
      </div>
      <div className="mt-4 m-3">
        <Industry />
        <div className="mt-5 lg:gap-6 gap-0 grid md:grid-cols-2 grid-cols-1 w-full">
          <MarketCap />
          <RiskLevel />
        </div>
        <div className="mt-6 lg:gap-6 gap-0 grid md:grid-cols-2 grid-cols-1">
          <Strategy />
          <Asset />
        </div>
      </div>
    </div>
  );
}

export default StockSection;
