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
                    className="object-cover rounded-2xl"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
