import { FaArrowUp, FaArrowDown } from "react-icons/fa";

type Props = {
  title: string;
  value: string;
  percentage: string;
  positive?: boolean;
  icon: string; // SVG path
  iconColor: string; // Tailwind color class
};

export default function StatsCard({
  title,
  value,
  percentage,
  positive = true,
  icon,
  iconColor,
}: Props) {
  return (
    <div
    className="
      w-full
      h-[128px]
      bg-[#131313]
      border border-[#1F1F1F]
      rounded-[11px]
      p-5
      flex flex-col justify-between
      relative
      shadow-[0px_1px_2px_-1px_#5454541A,0px_4px_4px_0px_#5454541A]
    "
  >
  
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <p className="text-gray-400 text-[14px]">{title}</p>

        <img
  src={icon}
  alt={title}
  className={`w-[20px] h-[20px] object-contain ${iconColor}`}
/>

      </div>

      {/* Value */}
      <h2 className="text-[24px] font-semibold text-white">
        {value}
      </h2>

      {/* Percentage */}
      <div
        className={`flex items-center gap-1 text-[13px] font-medium ${
          positive ? "text-green-400" : "text-red-400"
        }`}
      >
        {positive ? <FaArrowUp size={11} /> : <FaArrowDown size={11} />}
        <span>{percentage}</span>
        <span className="text-gray-400 font-normal ml-1">
          vs last month
        </span>
      </div>
    </div>
  );
}
