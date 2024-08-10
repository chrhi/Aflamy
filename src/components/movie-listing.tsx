import { Movie } from "@/types";
import type { FC } from "react";
import MovieCard from "./movie-card";

interface MovieListingProps {
  movies: Movie[];
}

const MovieListing: FC<MovieListingProps> = ({ movies }) => {
  return (
    <div className="w-full min-h-[400px] h-fit grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
      {movies?.map((item) => {
        return <MovieCard movie={item} key={item?.id} />;
      })}
    </div>
  );
};

export default MovieListing;
