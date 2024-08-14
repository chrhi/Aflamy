import { getMovieById } from "@/actions/tmdb.actions";
import Image from "next/image";
import type { FC } from "react";
import { notFound } from "next/navigation";

interface PageProps {
  params: { movie_id: string };
}

const Page: FC<PageProps> = async ({ params: { movie_id } }) => {
  const movie = await getMovieById({ id: movie_id });

  console.log(movie);

  if (!movie) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen flex flex-col p-8 ">
      <div className="w-full h-[400px] grid grid-cols-4 gap-x-8">
        <div className="w-[250px] h-[350px] 2xl:w-[350px] 2xl:h-[450px] rounded-2xl relative ">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={movie?.title ?? ""}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="w-full h-[400px] col-span-3 flex flex-col gap-y-4 px-4">
          <h1 className="font-bold text-4xl text-start text-white ">
            {movie?.title}
          </h1>

          <p className=" text-white text-start text-xl max-w-2xl">
            {movie?.overview}
          </p>

          <div className="w-full h-[100px] flex items-center justify-start gap-x-4">
            <div className="w-[200px] h-[50px] flex items-center justify-start gap-x-2">
              {movie?.spoken_languages.map((item) => {
                return (
                  <div
                    key={item.name}
                    className="w-[100px] h-[40px] flex items-center justify-center border border-white"
                  >
                    <span className="text-white">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
