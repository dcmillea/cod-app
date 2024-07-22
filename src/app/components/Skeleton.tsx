// components/SkeletonCard.js
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => (
  <div className="flex flex-col space-y-20 max-w-screen-xl w-full mt-32 items-center">
    <div className="w-3/4 flex items-center flex-col"></div>
    <div className="flex justify-center transition-all duration-1000 animate-pulse bg-slate-600 w-[400px] h-[500px] relative items-start gap-x-8"></div>
  </div>
);

export default SkeletonCard;
