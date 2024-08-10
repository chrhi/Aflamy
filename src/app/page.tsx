import Banner from "@/components/bnnner";
import MovieListing from "@/components/movie-listing";
import { Movie } from "@/types";

export const getData = async (): Promise<Movie[] | undefined> => {
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

export default async function Home() {
  const movies = await getData();

  if (!movies) {
    <p className="text-3xl font-bold text-white">
      there is no movies to be displayed
    </p>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-auto px-8">
      <Banner moviesData={movies!} />
      <MovieListing movies={movies!} />
    </main>
  );
}
