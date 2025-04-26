import { Movie } from "@/types";
import type { FC } from "react";
import MovieCard from "./movie-card";

interface MovieListingProps {
  movies: Movie[];
}

const MovieListing: FC<MovieListingProps> = ({ movies }) => {
  return (
    <div className="w-full min-h-[400px] h-fit grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
      {movies?.map((item, index) => {
        return <MovieCard index={index} movie={item} key={item?.id} />;
      })}
    </div>
  );
};

export default MovieListing;
