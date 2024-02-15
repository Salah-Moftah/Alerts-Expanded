import Accordion from "../Accordion";

function Alert({ ele, isOpen, handleToggle }) {
  return (
    <div className="relative mb-5 min-w-[750px]">
      <ul
        className={`${!isOpen ? 'bg-second-gray' : 'bg-accent-color'} grid grid-cols-4 relative cursor-pointer rounded-[8px] p-[16px]`}
        onClick={handleToggle}
      >
        <li className={`flex gap-10 border-r-[1px] ${isOpen ? 'border-line-gray' : 'border-white'} justify-center`}>
          <img
            src="/Stock-name.png"
            alt="photo"
            className="w-[26px] h-[24px] z-30"
          />
          <h4 className={`${!isOpen ? 'font-normal' : 'font-bold'} text-[15px] w-[30px] uppercase text-white z-30`}>
            {ele.title}
          </h4>
        </li>
        <li className={`flex gap-10 border-r-[1px] ${isOpen ? 'border-line-gray' : 'border-white'} justify-center`}>
          <img
            src="/AlertPhoto.png"
            alt="photo"
            className="w-[26px] h-[24px] z-30"
          />
          <h4 className={`${!isOpen ? 'font-normal' : 'font-bold'}  text-[15px] text-white z-30`}>
            {ele.number}
          </h4>
        </li>
        <li className={`flex gap-10 border-r-[1px] ${isOpen ? 'border-line-gray' : 'border-white'} justify-center`}>
          <img
            src="/Stocks.png"
            alt="photo"
            className="w-[26px] h-[24px] z-30"
          />
          <h4
            className={`text-[15px] z-30 ${
              ele.percent.color === "red" ? "text-[#D94111]" : "text-[#118F4B]"
            } ${!isOpen ? 'font-normal' : 'font-bold'}`}
          >
            {ele.percent.rate}
          </h4>
        </li>
        <li className="flex gap-10 justify-center">
          <img
            src={ele.risk.state === "high" ? "/high-risk.png" : "/low-risk.png"}
            alt="photo"
            className="w-[30px] h-[24px] z-30"
          />
          <h4 className={`${!isOpen ? 'font-normal' : 'font-bold'}  text-[15px] text-white z-30`}>
            {ele.risk.name}
          </h4>
        </li>
      </ul>
      <Accordion title={ele.title} isOpen={isOpen} />
    </div>
  );
}

export default Alert;
