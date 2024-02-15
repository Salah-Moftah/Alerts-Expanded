"use client";

import { MdClose } from "react-icons/md";
import StockSection from "./Stock-Section/StockSection";
import FilterButton from "../Buttons/FilterButton";
import { OpenFilterContext } from "@/contexts/openFilterContext";
import { useContext } from "react";

function Filters() {
  const { open } = useContext(OpenFilterContext);

  return (
    <div
      className={`${open ? "hidden" : "block"} relative sm:my-7
    bg-third-gray md:p-6 p-3 p rounded-s-[8px] rounded-e-[8px]`}
    >
      <h2 className="md:text-[24px] tex-[20px] text-center text-white font-semibold">
        Filters
      </h2>
      <div className="w-full mt-3">
        <div className="w-full mt-3">
          <div className="flex justify-between ">
            <span className="text-[14px] font-medium text-text-gray-color">
              Filters Applied
            </span>
            <span className="text-white text-[14px] font-medium">
              Clear All
            </span>
          </div>
          <div className="bg-first-gray rounded-[7px] h-[50px] p-2">
            <span className="flex items-center gap-2 w-fit text-[11px] font-normal rounded-[4.5px] bg-accent-color px-1">
              Real Estate
              <MdClose />
            </span>
          </div>
        </div>
        <StockSection />
        <FilterButton />
      </div>
    </div>
  );
}

export default Filters;
