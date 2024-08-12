import { Movie } from "@/types";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link href={`/${movie.id}`}>
      <div className="w-full max-w-[300px] h-[400px] flex flex-col gap-y-4 hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="h-[80%] w-full rounded-2xl relative">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            fill
            className="object-cover rounded-2xl"
            loading="eager"
          />
        </div>

        <p className="text-white text-xl truncate text-center font-bold">
          {movie.title}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
