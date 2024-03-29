import { IoNotifications } from "react-icons/io5";

function Notifications() {
  return (
    <div className="relative cursor-pointer mr-2">
      <IoNotifications className='text-accent-color w-[30px] h-[30px]' />
      <div className="w-[16px] h-[16px] bg-green-color rounded-full 
      text-white font-bold text-[12px] flex justify-center items-center absolute
      top-0 right-[-2px]">
        6
      </div>
    </div>
  )
}

export default Notifications
