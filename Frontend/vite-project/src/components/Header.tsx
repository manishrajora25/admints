import { FaChevronDown, FaSearch } from "react-icons/fa";
import FaBell from "../img/notification.svg"

export default function Header() {
  return (
    <div
  className="
    fixed top-0 left-64
    w-[calc(100%-256px)]
    h-[81px]
    bg-[#131313]
    border-b border-[#292929]
    px-[30px] pt-[16px] pb-[1px]
    flex items-center justify-between
    z-40
  "
>

      {/* Left Content */}
      <div className="w-[334px] flex flex-col gap-[8px] pb-[20px]">
  <h2 className="text-[22px] leading-[28px] font-semibold text-white h-[30px] pt-2">
    Welcome back, User!
  </h2>

  <p className="text-[15px] leading-[20px] text-white h-[20px] pt-1">
    Here's what's happening with your platform.
  </p>
</div>


      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search Input */}
        <div className="relative">
          <FaSearch
            size={12}
            className="absolute left-[16px] top-1/2 -translate-y-1/2 text-gray-400 "
          />
          <input
            type="text"
            placeholder="Search..."
            className="
              w-[319px] h-[38px]
              bg-[#1A1A1A]
              border border-[#1F1F1F]
              rounded-[10px]
              pl-[40px] pr-[16px]
              pt-[8px] pb-[8px]
              text-[13px] text-gray-300
              outline-none
            "
          />
        </div>

        {/* Notification Icon (36x36) */}
        <div className="relative w-[36px] h-[36px] rounded-[10px] flex items-center justify-center">
  
  <img
    src={FaBell}
    alt="notification"
    className="w-[20px] h-[20px] object-contain"
  />

  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[12px] flex items-center justify-center text-white">
    3
  </span>

</div>


     {/* Profile Container */}
<div className="w-[80px] h-[48px] px-[12px] flex items-center gap-[8px] rounded-[10px]">
  
  {/* Avatar 32x32 */}
  <div
    className="
      w-[32px] h-[32px]
      rounded-full
      flex items-center justify-center
      bg-gradient-to-r from-pink-500 to-purple-500
      text-white text-[12px] font-semibold
    "
    style={{
      boxShadow:
        "0px 2px 4px -2px #0000001A, 0px 4px 6px -1px #0000001A",
    }}
  >
    A
  </div>

  {/* Chevron */}
  <FaChevronDown size={10} className="text-gray-400" />
</div>

      </div>
    </div>
  );
}