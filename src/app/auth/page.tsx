"use client";

import { FC, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Github, Mail } from "lucide-react";

interface FloatingCard {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  posterUrl: string;
  speed: number;
  direction: number;
  rotation: number;
}

const moviePosters = [
  "https://image.tmdb.org/t/p/w500/xUkUZ8eOnrOnnJAfusZUqKYZiDu.jpg",
  "https://image.tmdb.org/t/p/w500/iPPTGh2OXuIv6d7cwuoPkw8govp.jpg",
  "https://image.tmdb.org/t/p/w500/t6HJH3gXtUqVinyFKWi7Bjh73TM.jpg",
  "https://image.tmdb.org/t/p/w500/qkTKtOHK9JEEOHgPQZ0dFtzs5ML.jpg",
  "https://image.tmdb.org/t/p/w500/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
  "https://image.tmdb.org/t/p/w500/hVh4hMzkXNLnScudbid6hDvjMPk.jpg",
];

const Page: FC = () => {
  const [floatingCards, setFloatingCards] = useState<FloatingCard[]>([]);

  useEffect(() => {
    // Generate movie cards with aspect ratio similar to movie posters
    const cards: FloatingCard[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      width: 70 + Math.random() * 30, // Movie poster width
      height: 100 + Math.random() * 50, // Movie poster height (taller than width)
      posterUrl: moviePosters[Math.floor(Math.random() * moviePosters.length)],
      speed: 0.08 + Math.random() * 0.15,
      direction: Math.random() > 0.5 ? 1 : -1,
      rotation: Math.random() * 10 - 5, // Slight rotation for visual interest
    }));

    setFloatingCards(cards);

    // Animation loop
    const interval = setInterval(() => {
      setFloatingCards((prevCards) =>
        prevCards.map((card) => ({
          ...card,
          y: (card.y + card.speed) % 100,
          x: (card.x + card.speed * 0.2 * card.direction + 100) % 100,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left panel - only visible on medium screens and above */}
        <div className="hidden md:block md:col-span-1 bg-gradient-to-br from-red-900 to-black text-white p-8 relative overflow-hidden min-h-screen">
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-6">Aflamy</h1>
            <p className="text-xl mb-2">Welcome back!</p>
            <p className="text-gray-300 mb-8">
              Sign in to continue your journey through the world of cinema.
            </p>

            <div className="space-y-8 mt-12">
              <div className="flex items-start space-x-3">
                <div className="bg-red-600/30 p-2 rounded-full">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-medium">Unlimited Movie Access</h3>
                  <p className="text-sm text-gray-300">
                    Stream thousands of movies anytime, anywhere
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-red-600/30 p-2 rounded-full">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-medium">Personalized Recommendations</h3>
                  <p className="text-sm text-gray-300">
                    Discover new favorites based on your preferences
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-red-600/30 p-2 rounded-full">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-medium">Create Your Watchlist</h3>
                  <p className="text-sm text-gray-300">
                    Save movies to watch later with a single click
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Animated movie poster cards */}
          {floatingCards.map((card, index) => (
            <div
              key={card.id}
              className="absolute rounded-md shadow-lg backdrop-blur-sm"
              style={{
                width: `${card.width}px`,
                height: `${card.height}px`,
                left: `${card.x}%`,
                top: `${card.y}%`,
                transform: `rotate(${card.rotation}deg)`,
                transition: "top 0.5s linear, left 0.5s linear",
              }}
            >
              <div className="w-full h-full rounded-md border border-zinc-700 overflow-hidden">
                <img
                  src={card.posterUrl}
                  alt="Movie poster"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right panel - Login form */}
        <div className="w-full min-h-screen col-span-1 md:col-span-2 p-4 flex items-center justify-center">
          <div className="w-full max-w-md p-8 bg-zinc-800 rounded-xl shadow-lg border border-zinc-700">
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-white">Sign in</h2>
                <p className="text-gray-400">
                  Enter your credentials to access your account
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="bg-zinc-700 border-zinc-600 text-white focus:border-red-500 focus:ring-red-500"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password" className="text-gray-300">
                      Password
                    </Label>
                    <a
                      href="#"
                      className="text-sm text-red-400 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    className="bg-zinc-700 border-zinc-600 text-white focus:border-red-500 focus:ring-red-500"
                  />
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Sign in
                </Button>
              </div>

              <div className="relative">
                <Separator className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-zinc-600"></span>
                </Separator>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-zinc-800 px-2 text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="w-full bg-zinc-700 text-white border-zinc-600 hover:bg-zinc-600"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-zinc-700 text-white border-zinc-600 hover:bg-zinc-600"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>

              <div className="text-center text-sm text-gray-400">
                Don&apos;t have an account?{" "}
                <a href="#" className="text-red-400 hover:underline">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
