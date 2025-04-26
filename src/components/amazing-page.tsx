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
  size: number;
  color: string;
  speed: number;
  direction: number;
}

const Page: FC = () => {
  const [floatingCards, setFloatingCards] = useState<FloatingCard[]>([]);

  useEffect(() => {
    // Generate random cards
    const colors = [
      "bg-blue-500/20",
      "bg-purple-500/20",
      "bg-pink-500/20",
      "bg-indigo-500/20",
      "bg-cyan-500/20",
      "bg-teal-500/20",
    ];

    const cards: FloatingCard[] = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 80,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: 0.1 + Math.random() * 0.2,
      direction: Math.random() > 0.5 ? 1 : -1,
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
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-3 bg-gray-50">
      {/* Left panel - only visible on medium screens and above */}
      <div className="hidden md:block md:col-span-1 bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-8 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-6">MovieFlix</h1>
          <p className="text-xl mb-2">Welcome back!</p>
          <p className="text-gray-200 mb-8">
            Sign in to continue your journey through the world of cinema.
          </p>

          <div className="space-y-8 mt-12">
            <div className="flex items-start space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <ArrowRight className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-medium">Unlimited Movie Access</h3>
                <p className="text-sm text-gray-200">
                  Stream thousands of movies anytime, anywhere
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <ArrowRight className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-medium">Personalized Recommendations</h3>
                <p className="text-sm text-gray-200">
                  Discover new favorites based on your preferences
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <ArrowRight className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-medium">Create Your Watchlist</h3>
                <p className="text-sm text-gray-200">
                  Save movies to watch later with a single click
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated background cards */}
        {floatingCards.map((card) => (
          <div
            key={card.id}
            className={`absolute rounded-lg backdrop-blur-sm border border-white/10 ${card.color}`}
            style={{
              width: `${card.size}px`,
              height: `${card.size}px`,
              left: `${card.x}%`,
              top: `${card.y}%`,
              transition: "top 0.5s linear, left 0.5s linear",
            }}
          />
        ))}
      </div>

      {/* Right panel - Login form */}
      <div className="w-full h-full col-span-1 md:col-span-2 p-4 flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">Sign in</h2>
              <p className="text-gray-500">
                Enter your credentials to access your account
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input id="password" type="password" />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Sign in
              </Button>
            </div>

            <div className="relative">
              <Separator className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300"></span>
              </Separator>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="w-full">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </div>

            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
