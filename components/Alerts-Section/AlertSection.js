"use client";

import Alert from "./Alert";
import { alertList } from "@/constants";
import { useState } from "react";

function AlertSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="alerts relative max-h-[100vh] overflow-x-auto md:px-3">
      {alertList.map((ele, index) => (
        <Alert
          key={index}
          ele={ele}
          isOpen={openIndex === index}
          handleToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default AlertSection;
