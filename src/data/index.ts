import {
  Bomb,
  Flame,
  FlaskConical,
  Flower,
  Laugh,
  Martini,
  MicVocal,
  Rocket,
  Scroll,
  Search,
  Shield,
  TreePalm,
  Users,
  WandSparkles,
} from "lucide-react";

export const dashboardItems = [
  {
    name: "Action",
    icon: Flame,
    url: "/genre/28",
  },
  {
    name: "Fantasy",
    icon: WandSparkles,
    url: "/genre/14",
  },
  {
    name: "Comedy",
    icon: Laugh,
    url: "/genre/35",
  },
  {
    name: "Adventure",
    icon: TreePalm,
    url: "/genre/12",
  },
  {
    name: "Crime",
    icon: Bomb,
    url: "/genre/80",
  },

  {
    name: "Documentary",
    icon: Shield,
    url: "/genre/99",
  },
  {
    name: "Drama",
    icon: Flower,
    url: "/genre/18",
  },
  {
    name: "Family",
    icon: Users,
    url: "/genre/10751",
  },

  {
    name: "History",
    icon: Scroll,
    url: "/genre/36",
  },
  {
    name: "Horror",
    icon: Flame,
    url: "/genre/27",
  },
  {
    name: "Music",
    icon: MicVocal,
    url: "/genre/10402",
  },

  {
    name: "Mystery",
    icon: Search,
    url: "/genre/9648",
  },
  {
    name: "Romance",
    icon: Flame,
    url: "/genre/10749",
  },
  {
    name: "Science Fiction",
    icon: FlaskConical,
    url: "/genre/878",
  },

  {
    name: "TV Movie",
    icon: Flame,
    url: "/genre/10770",
  },
  {
    name: "Thriller",
    icon: Rocket,
    url: "/genre/53",
  },
  {
    name: "War",
    icon: Shield,
    url: "/genre/10752",
  },
  {
    name: "Western",
    icon: Martini,
    url: "/genre/37",
  },
];

export const getGenreNameByNumber = (
  genreNumber: number
): string | undefined => {
  const genre = dashboardItems.find(
    (item) => item.url === `/genre/${genreNumber}`
  );
  return genre ? genre.name : undefined;
};
