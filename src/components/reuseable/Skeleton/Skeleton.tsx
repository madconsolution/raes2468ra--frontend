import { Skeleton } from "@/components/ui/skeleton";

const SkeletonComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-100 space-y-4 ">
      {/* Large Rectangular Skeleton */}
      <Skeleton className="w-48 h-64 rounded-t-xl mt-2 bg-gray-300" />

      {/* Bottom Device Simulation Skeleton */}
      <div className="w-72 h-12 rounded-full  relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-1.5 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default SkeletonComponent;
