import { BsCameraReels } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

export default function InfoCursosBar() {
  return (
    <>
      <div className="stats flex text-xs space-x-2  bg-[#ffff]/80">
        <div className=" flex flex-1  h-6 place-items-center justify-center">
          <div className="stat-figure text-secondary">
          <FiStar className="text-black"/>
          </div>
          <div className="stat-desc text-xs text-[#0A033C]">4.5</div>
          <div className="stat-value text-gray-500 text-xs">(31K)</div>
        </div>

        <div className="flex flex-1 space-x-1 h-5 place-items-center justify-center">
          <div className="stat-figure text-secondary">
          <BsCameraReels className="text-black"/>
          </div>
          <div className="stat-value text-xs text-[#0A033C]">2</div>
          <div className="stat-title text-xs text-[#0A033C]">sessions</div>
        </div>

        <div className="flex flex-1 space-x-1 h-5 place-items-center justify-center">
          <div className="stat-figure text-secondary">
          <FaRegClock className="text-black"/>
          </div>
          <div className="stat-value text-xs text-[#0A033C]">8</div>
          <div className="stat-title text-xs text-[#0A033C]">hours</div>
        </div>
      </div>
    </>
  );
}
