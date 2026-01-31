// import { FaVideo, FaImage } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";

type Template = {
  title: string;
  type: "Video" | "Image";
  uses: number;
};

const templates: Template[] = [
  { title: "Product Showcase Video", type: "Video", uses: 1245 },
  { title: "Social Media Banner", type: "Image", uses: 987 },
  { title: "Instagram Story", type: "Video", uses: 856 },
  { title: "YouTube Thumbnail", type: "Image", uses: 734 },
  { title: "Marketing Video Ad", type: "Video", uses: 623 },
];

export default function PopularTemplates() {
  return (
    <div className="bg-[#0f0f14] border border-[#1a1a25] rounded-2xl p-4 h-[450px]">

      {/* Title */}
      <h2 className="text-white text-lg font-semibold mb-6">
        Most Popular Templates (Last 7 Days)
      </h2>

      <div>
        {templates.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 border-b border-[#1a1a25] last:border-none hover:bg-[#14141c] transition"
          >
            {/* Left Side */}
            <div className="flex items-center gap-4">

              {/* White Icon Box */}
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                {item.type === "Video" ? (
                  <IoVideocamOutline className="text-purple-600" size={16} />
                ) : (
                  <CiImageOn className="text-purple-600" size={16} />
                )}
              </div>

              {/* Text */}
              <div>
                <p className="text-sm font-medium text-white">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500">
                  {item.type}
                </p>
              </div>

            </div>

            {/* Right Side */}
            <div className="text-right">
              <p className="text-sm font-semibold text-white">
                {item.uses.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">
                uses
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
