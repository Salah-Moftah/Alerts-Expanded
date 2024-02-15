import React from "react";

function StrategyAssetList({list}) {
  return (
    <ul className="w-[120px] mt-3 text-center md:m-0 m-auto strategyAndAssetList relative">
      {list.map(el => (
        <div key={el.id} className="w-fit  m-auto">
          <li  className={`${el.active && 'bg-accent-color'}
          rounded-[6px] text-[13px] font-normal text-white p-1`}>
            {el.name}
          </li>
        </div>
      ))}
    </ul>
  );
}

export default StrategyAssetList;
