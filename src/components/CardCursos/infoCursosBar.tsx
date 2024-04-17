import { BsCameraReels } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

export default function InfoCursosBar() {
  return (
    <>
      <div className="stats flex space-x-2  bg-base-100/75 items-center">
        <div className="flex flex-1 h-8 items-center justify-center -mr-6">
          <div className="stat-figure text-sm">
            <FiStar className="text-sm" />
          </div>
          <div className="stat-value text-sm">4.5</div>
        </div>
        <div className="flex flex-1 space-x-1 h-5 place-items-center justify-center">
          <div className="stat-figure ml-2">
            <BsCameraReels className="text-sm" />
          </div>
          <div className="stat-value text-sm">2</div>
          <div className="stat-value text-sm">sessões</div>
        </div>

        <div className="flex flex-1 space-x-1 h-5 place-items-center justify-center">
          <div className="stat-figure text-sm">
            <FaRegClock className="text-sm" />
          </div>
          <div className="stat-value text-sm">8</div>          
          <div className="stat-value text-sm">horas</div>
        </div>
      </div>
    </>
  );
}
