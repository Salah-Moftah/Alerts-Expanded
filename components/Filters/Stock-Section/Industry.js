import HeadLineStock from "@/components/HeadLineStock";
import React from "react";
import { industryList } from "@/constants";

function Industry() {
  return (
    <div>
      <HeadLineStock title="Industry" />
      <ul className="md:grid md:grid-cols-2 flex items-center gap-3 md:gap-0 flex-col mt-3">
        {industryList.map((el) => (
          <li
            key={el.title}
            className="h-[25px] md:border-l p-3 md:pb-4 pb-6 text-white text-[12px]
          font-normal  w-fit"
          >
            <div className="text-center flex items-center gap-2 px-1 rounded-[6px] hover:bg-accent-color hover:text-first-gray">
              <img src={el.img} alt="photo" className="w-[13px]  md:block hidden" />
              <span>{el.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Industry;
