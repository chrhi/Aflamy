"use client";

import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import { Movie } from "@/types";

export default function Banner({ moviesData }: { moviesData: Movie[] }) {
  //https://image.tmdb.org/t/p/w500/
  //https://image.tmdb.org/t/p/original/

  return (
    <div className="w-full overflow-hidden relative h-fit my-8">
      <Carousel className="w-full ">
        <CarouselContent>
          {moviesData.slice(0, 5).map((item) => {
            return (
              <CarouselItem key={item?.id}>
                <div className="w-full h-[400px] 2xl:h-[500px] relative p-10 ">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    alt="this is the image"
                    fill
                    loading="eager"
                    className="object-cover rounded-2xl"
                  />

                  <div className="w-full h-full bg-black/50 absolute inset-0 z-[10] flex flex-col justify-end gap-y-4 p-4">
                    <h2 className="text-white font-bold text-start text-4xl ">
                      {item.title}
                    </h2>
                    <p className="text-white text-start text-lg">
                      {item.overview}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
