type Props = {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconColor: string;   // change here
};

export default function MiniStatCard({
  title,
  value,
  icon,
  iconColor,
}: Props) {
  return (
    <div className="bg-gradient-to-b from-[#131313] to-[#0f0f14] 
    p-4 
    rounded-xl 
    shadow-md 
    flex 
    items-center 
    gap-3 
    h-[100px] 
    w-full">

      
      {/* Icon */}
      <div className={`text-lg ${iconColor}`}>
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-[14px] text-gray-400">{title}</p>
        <h3 className="text-[15px] font-semibold text-white">{value}</h3>
      </div>
    </div>
  );
}
