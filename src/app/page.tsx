import { getDiscoverMovies } from "@/actions/tmdb.actions";
import Banner from "@/components/bnnner";
import MovieListing from "@/components/movie-listing";
import { Movie } from "@/types";

export default async function Home() {
  const movies = await getDiscoverMovies();

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
