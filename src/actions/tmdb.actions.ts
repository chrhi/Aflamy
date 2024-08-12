"use server";

import { Movie, MovieById } from "@/types";

const BASE_URL = "https://api.themoviedb.org/3";

export const getDiscoverMovies = async (): Promise<Movie[] | undefined> => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_ACCESS_KEY}`,
    },
  };

  try {
    const response = await fetch(url, options);

    const data = await response.json();

    return data?.results as Movie[];
  } catch (err) {
    console.error(err);
  }
};

export const getMovieById = async ({ id }: { id: string }) => {
  const url = `${BASE_URL}/movie/${id}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_ACCESS_KEY}`,
    },
  };

  try {
    const response = await fetch(url, options);

    const data = await response.json();

    return data as MovieById;
  } catch (err) {
    console.error(err);
  }
};

export const getMoviesByGenre = async ({ genreId }: { genreId: number }) => {
  const url = `${BASE_URL}/discover/movie?with_genres=${genreId}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_ACCESS_KEY}`,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    return data?.results as Movie[];
  } catch (err) {
    console.error(err);
  }
};
