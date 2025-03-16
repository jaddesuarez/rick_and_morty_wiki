"use client";

import { Character } from "@/lib/interfaces";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/ui/components/shadcn/Carousel/Carousel";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/ui/components/shadcn/Avatar/Avatar";

export const CharactersCarousel = ({
  multipleCharacters,
  type,
}: {
  multipleCharacters: Character[];
  type: string;
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center mt-10 w-full max-w-[80%] mx-auto px-4">
      <h1 className="text-md md:text-xl lg:text-2xl text-gray-400 font-bold mb-6 w-full text-center md:text-start">
        Characters in this {type}
      </h1>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1 md:-ml-2">
          {multipleCharacters?.map((character, idx) => (
            <CarouselItem
              key={idx}
              className="pl-3 basis-1/3 md:basis-1/5 lg:basis-1/7"
            >
              <Avatar
                className="w-16 h-16 md:w-20 md:h-20 cursor-pointer hover:scale-90 transition-all duration-300"
                onClick={() => {
                  router.push(`/characters/${character.id}`);
                }}
              >
                <AvatarImage
                  src={character.image}
                  alt={character.name}
                  className={cn("", character.status === "Dead" && "grayscale")}
                />
                <AvatarFallback>{character.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </CarouselItem>
          ))}
        </CarouselContent>
        {multipleCharacters?.length > 3 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
};
