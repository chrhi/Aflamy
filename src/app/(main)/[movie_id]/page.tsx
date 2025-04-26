import { FC } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getMovieById } from "@/actions/tmdb.actions";
import { Clock, Calendar, Star, DollarSign } from "lucide-react";

interface PageProps {
  params: { movie_id: string };
}

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Page: FC<PageProps> = async ({ params: { movie_id } }) => {
  const movie = await getMovieById({ id: movie_id });

  if (!movie) {
    notFound();
  }

  return (
    <div className="min-h-screen text-white p-6">
      {/* Hero Section with Backdrop */}
      <div className="relative w-full h-80 rounded-xl overflow-hidden mb-8">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-end p-6">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">{movie.title}</h1>
            <div className="flex items-center space-x-2 text-sm opacity-90">
              {movie.status && (
                <span className="bg-green-600 px-2 py-1 rounded text-white">
                  {movie.status}
                </span>
              )}
              <span className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                {movie.vote_average.toFixed(1)} ({movie.vote_count} votes)
              </span>
            </div>
            {movie.tagline && (
              <p className="italic text-gray-300">{movie.tagline}</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Poster and Quick Info */}
        <div className="md:col-span-1">
          <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg">
            <div className="relative aspect-[2/3] w-full">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <span>{movie.runtime} minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span>{formatDate(movie.release_date)}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 bg-zinc-700 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Overview and Details */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-zinc-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
          </div>

          <div className="bg-zinc-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-400">
                  Budget
                </h3>
                <p className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                  {formatCurrency(movie.budget)}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-400">
                  Revenue
                </h3>
                <p className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                  {formatCurrency(movie.revenue)}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-400">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {movie.spoken_languages.map((lang) => (
                    <span
                      key={lang.iso_639_1}
                      className="px-3 py-1 bg-zinc-700 rounded-full text-sm"
                    >
                      {lang.english_name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-400">
                  Countries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {movie.production_countries.map((country) => (
                    <span
                      key={country.iso_3166_1}
                      className="px-3 py-1 bg-zinc-700 rounded-full text-sm"
                    >
                      {country.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Production Companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {movie.production_companies.map((company) => (
                <div
                  key={company.id}
                  className="bg-zinc-700 p-4 rounded-lg flex flex-col items-center justify-center text-center"
                >
                  {company.logo_path ? (
                    <div className="relative h-12 w-full mb-2">
                      <Image
                        src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                        alt={company.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="h-12 w-full mb-2 flex items-center justify-center text-gray-400">
                      No Logo
                    </div>
                  )}
                  <span className="text-sm">{company.name}</span>
                  <span className="text-xs text-gray-400">
                    {company.origin_country}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
