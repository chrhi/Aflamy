import { getMoviesByGenre } from "@/actions/tmdb.actions";
import MovieListing from "@/components/movie-listing";
import { getGenreNameByNumber } from "@/data";
import type { FC } from "react";

interface PageProps {
  params: { id: number };
}

const Page: FC<PageProps> = async ({ params }) => {
  const data = await getMoviesByGenre({ genreId: params?.id });

  console.log(data);

  return (
    <div className="w-full min-h-screen h-fit p-4">
      <div className="w-full h-[70px] flex items-center justify-start">
        <h1 className="text-4xl font-bold text-white">
          {getGenreNameByNumber(params?.id)}
        </h1>
      </div>

      <MovieListing movies={data!} />
    </div>
  );
};

export default Page;
