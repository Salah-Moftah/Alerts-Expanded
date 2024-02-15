import React from "react";
import Notifications from "./Notifications";
import Search from "../Search";

function Navbar() {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center w-full gap-3 pb-6">
      <div className="relative">
        <div className="top-1/2 left-0 transform -translate-y-1/2 absolute w-[5px] h-[80%] bg-accent-color rounded-full" />
        <h1 className="text-white font-bold text-[30px] md:text-[48px] ml-5 relative">
          ALERTS
        </h1>
      </div>
      <div className="flex-1">
        <div className="flex gap-3 items-center">
          <Search title="Search By.." style="h-[38px]" textColor="text-white" />
          <Notifications />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
