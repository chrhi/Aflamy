"use client";

import { Movie } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { FC } from "react";

interface MovieCardProps {
  movie: Movie;
  index: number;
}

const MovieCard: FC<MovieCardProps> = ({ movie, index }) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <Link href={`/${movie.id}`}>
      <div className="w-full max-w-[300px] h-[400px] flex flex-col gap-y-4 hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="h-[80%] w-full rounded-2xl relative bg-zinc-800 overflow-hidden">
          {/* Skeleton loader while image loads */}
          {imageLoading && (
            <div className="absolute inset-0 bg-zinc-800 animate-pulse">
              <div className="h-full w-full bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-800"></div>
            </div>
          )}

          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className={`object-cover rounded-2xl transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              priority={index < 6} // Prioritize loading for first 6 images
              onLoadingComplete={() => setImageLoading(false)}
            />
          ) : (
            // Fallback when there's no poster image
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-zinc-400">
              No Image
            </div>
          )}
        </div>

        {/* Title with skeleton loader */}
        <div className="h-6 w-full">
          {imageLoading ? (
            <div className="h-full w-3/4 mx-auto rounded bg-zinc-800 animate-pulse"></div>
          ) : (
            <p className="text-white text-xl truncate text-center font-bold">
              {movie.title}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
