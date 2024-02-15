import { FaSearch } from "react-icons/fa";

function Search({title, style, textColor}) {

  return (
    <div className="flex-1">
      <div className="flex items-center rounded relative w-full">
        <input
          className={`${style} ${textColor} w-full focus:outline-none rounded-[5px]
          pl-3 bg-second-gray text-[12px] md:text-[15px]`}
          type="text"
          placeholder={`${title}`}
        />
      <FaSearch className={`${textColor} opacity-50 absolute right-0 mr-3 cursor-pointer`} />
      </div>
    </div>
  );
}

export default Search;