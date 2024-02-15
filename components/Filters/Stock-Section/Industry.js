import HeadLineStock from "@/components/HeadLineStock";
import React from "react";
import { industryList } from "@/constants";

function Industry() {
  return (
    <div>
      <HeadLineStock title="Industry" />
      <ul className="md:grid md:grid-cols-2 flex items-center flex-col mt-3">
        {industryList.map((el) => (
          <li
            key={el.title}
            className="h-[25px] md:border-l p-3 pb-4 text-white text-[12px]
          font-normal  w-fit"
          >
            <div className="flex items-center gap-2 px-1 rounded-[6px] hover:bg-accent-color hover:text-first-gray">
              <img src={el.img} alt="photo" className="w-[13px]" />
              <span>{el.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Industry;
