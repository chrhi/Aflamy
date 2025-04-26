import { FC } from "react";

const MovieDetailsSkeleton: FC = () => {
  return (
    <div className="min-h-screen text-white p-6 animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="relative w-full h-80 rounded-xl overflow-hidden mb-8 bg-zinc-800">
        <div className="relative h-full flex items-end p-6">
          <div className="flex flex-col space-y-2 w-full">
            <div className="h-8 bg-zinc-700 rounded-lg w-1/2"></div>
            <div className="flex items-center space-x-2">
              <div className="h-6 bg-zinc-700 rounded-lg w-20"></div>
              <div className="h-6 bg-zinc-700 rounded-lg w-32"></div>
            </div>
            <div className="h-6 bg-zinc-700 rounded-lg w-3/4"></div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Poster Skeleton */}
        <div className="md:col-span-1">
          <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-[2/3] w-full bg-zinc-700"></div>
            <div className="p-4 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-zinc-700"></div>
                <div className="h-5 bg-zinc-700 rounded-lg w-32"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-zinc-700"></div>
                <div className="h-5 bg-zinc-700 rounded-lg w-40"></div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="h-6 bg-zinc-700 rounded-full w-20"
                    ></div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content Skeletons */}
        <div className="md:col-span-2 space-y-6">
          {/* Overview Section Skeleton */}
          <div className="bg-zinc-800 rounded-xl p-6 shadow-lg">
            <div className="h-7 bg-zinc-700 rounded-lg w-32 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-zinc-700 rounded w-full"></div>
              <div className="h-4 bg-zinc-700 rounded w-full"></div>
              <div className="h-4 bg-zinc-700 rounded w-3/4"></div>
            </div>
          </div>

          {/* Details Section Skeleton */}
          <div className="bg-zinc-800 rounded-xl p-6 shadow-lg">
            <div className="h-7 bg-zinc-700 rounded-lg w-32 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index}>
                    <div className="h-6 bg-zinc-700 rounded-lg w-24 mb-2"></div>
                    <div className="h-5 bg-zinc-700 rounded-lg w-32"></div>
                  </div>
                ))}
            </div>
          </div>

          {/* Production Companies Section Skeleton */}
          <div className="bg-zinc-800 rounded-xl p-6 shadow-lg">
            <div className="h-7 bg-zinc-700 rounded-lg w-64 mb-4"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-zinc-700 p-4 rounded-lg flex flex-col items-center justify-center"
                  >
                    <div className="h-12 w-full mb-2 bg-zinc-600 rounded"></div>
                    <div className="h-4 bg-zinc-600 rounded-lg w-20 mb-1"></div>
                    <div className="h-3 bg-zinc-600 rounded-lg w-12"></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSkeleton;
