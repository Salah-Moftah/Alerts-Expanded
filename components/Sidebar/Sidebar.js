'use client'

import { useContext, useState } from "react";
import { OpenFilterContext } from "@/contexts/openFilterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faGraduationCap,
  faGears,
  faFolderOpen,
  faArrowUpRightDots,
  faFilterCircleDollar,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faBell, faGraduationCap, faGears, faFolderOpen, faFilterCircleDollar, faArrowUpRightDots);

import { sidebarList } from "@/constants";

function Sidebar() {

  const [isHovered, setIsHovered] = useState(false);

  const {open, setOpen} = useContext(OpenFilterContext)
  
  function openFilter() {
    if (open === false) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  return (
    <div
      className={`w-[80px] fixed z-50 top-0 bg-third-gray
      min-h-full ml-2
    flex items-center justify-between flex-col transition-all
    ${isHovered ? 'sm:hover:w-[180px] hover:w-[150px]' : ''} ease-in-out duration-300 shadow hover:shadow-3xl
    `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center flex-col">
        <div>
          <img src="/logo.png" alt="logo" className={`${isHovered ? 'w-[124px]' : 'w-[50px]'} mt-9`} />
        </div>
        <ul className="mt-14">
          {sidebarList.map((el) => (
            <li
              className={`${el.active ? 'opacity-100 hover:text-accent-color' : 'opacity-30'}
            text-white flex items-center gap-3 mb-6 cursor-pointer transition-all duration-300 `}
              key={el.id}
            >
                <FontAwesomeIcon icon={el.logo} className={`${!isHovered ? 'text-[28px]' : 'text-[20px]' }`} />
                <span className={`sm:text-[19px] text-[15px] font-normal ${isHovered ? 'block' : 'hidden'}`}>{el.name}</span>
            </li>
          ))}
        </ul>
        <div onClick={openFilter} className={`${open ? 'text-accent-color' : 'text-white'} md:hidden flex gap-3 transition-all duration-300`}>
        <FontAwesomeIcon icon={faFilterCircleDollar} className={`${!isHovered ? 'text-[28px]' : 'text-[20px]' }`} />
        <span className={`sm:text-[19px] text-[15px] mr-6 font-normal ${isHovered ? 'block' : 'hidden'}`}>Filters</span>
        </div>
      </div>
      <div className="flex flex-col items-center mb-[30px]">
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <img src="/avatar.png" alt="avatar" className="w-[38px] h-[41px] m-auto" />
          <div className={`${isHovered ? 'block' : 'hidden'} text-center`}>
            <h4 className="text-[15px] text-white ">Salah Moftah</h4>
            <span className="text-text-gray-color text-[13px] font-semibold">Begineer</span>
          </div>
        </div>
          <span className={`${isHovered ? 'block' : 'hidden'} mt-3 text-[14px] font-normal text-[#424242]`}>Street Suite. 2.0</span>
      </div>
    </div>
  );
}

export default Sidebar;
