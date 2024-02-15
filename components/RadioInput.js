"use client";

import React, { useEffect, useState } from "react";

function RadioInput({ list, name }) {
  const [checkedOption, setCheckedOption] = useState(null);

  useEffect(() => {
    const initiallyChecked = list.find((el) => el.checked);
    if (initiallyChecked) {
      setCheckedOption(initiallyChecked.id);
    }
  }, [list]);

  const handleOptionChange = (id) => {
    setCheckedOption(id);
  };

  return (
    <div className="flex flex-col gap-2 md:ml-5 ml-0 mt-3 md:items-start items-center">
      {list.map((el) => (
        <div key={el.id} className="radio">
          <input
            type="radio"
            name={name}
            id={`${name}-${el.id}`}
            className="mr-2"
            checked={el.id === checkedOption}
            onChange={() => handleOptionChange(el.id)}
          />
          <label
            htmlFor={`${name}-${el.id}`}
            className="text-[13px] font-normal text-white"
          >
            {el.name}
          </label>
        </div>
      ))}
    </div>
  );
}

export default RadioInput;
