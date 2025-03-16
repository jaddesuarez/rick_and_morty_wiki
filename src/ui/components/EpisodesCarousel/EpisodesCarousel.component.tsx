"use client";

import { cn } from "@/lib/utils";
import { Episode } from "@/lib/interfaces";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/ui/components/shadcn/Carousel/Carousel";
import { ArrowRight } from "lucide-react";
import { EpisodeCard } from "../EpisodeCard/EpisodeCard.component";

export const EpisodesCarousel = ({
  multipleEpisodes,
  description,
}: {
  multipleEpisodes: Episode[];
  description: string;
}) => {
  return (
    <div className="flex flex-col max-w-[90%] mx-auto px-4 gap-6 mt-10">
      <div className="flex items-center gap-2 text-gray-400">
        <ArrowRight size={20} />
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
          {description}
        </h1>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {multipleEpisodes?.map((episode, idx) => (
            <CarouselItem
              key={idx}
              className="pl-2 md:pl-4 basis-1/1 md:basis-1/2 lg:basis-1/3"
            >
              <div
                className={cn(
                  "",
                  multipleEpisodes?.length > 2
                    ? "max-w-0 md:max-w-1 lg:max-w-4"
                    : "w-sm md:w-lg"
                )}
              >
                <EpisodeCard {...episode} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {multipleEpisodes?.length > 2 && (
          <>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </>
        )}
      </Carousel>
    </div>
  );
};
