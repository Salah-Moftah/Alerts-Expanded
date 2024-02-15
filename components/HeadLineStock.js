import { TiArrowSortedDown } from "react-icons/ti";
import TitleName from "./TitleName";

function HeadLineStock({title}) {
  return (
    <div className="flex gap-2 md:justify-start justify-center items-center">
      <TiArrowSortedDown className="text-white" />
      <TitleName title={title}/>
    </div>
  )
}

export default HeadLineStock