"use client";

import Image from "next/image";
import {
  TvMinimalPlay,
  Calendar1,
  ListVideo,
  SquareUserRound,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useApi } from "@/lib/hooks/useApi";
import { Loading } from "@components/Loader/Loader.component";
import { getIdFromUrl } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@components/shadcn/Carousel/Carousel";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@components/shadcn/Avatar/Avatar";
import { Character } from "@interfaces/index";
import { ReviewForm } from "@components/ReviewForm/ReviewForm.component";
const EpisodeDetailView = () => {
  const router = useRouter();
  const { id } = useParams();
  const { episodeById, isLoadingEpisodeById } = useApi(undefined, id as string);
  const { name, air_date, episode, characters } = episodeById || {};
  const characterIds = characters
    ?.map((character) => getIdFromUrl(character))
    .filter((id): id is string => id !== undefined);
  const { multipleCharacters, isLoadingMultipleCharacters } = useApi(
    undefined,
    undefined,
    characterIds || []
  );
  if (isLoadingEpisodeById || isLoadingMultipleCharacters) return <Loading />;

  return (
    <div className="flex flex-col items-center justify-center mt-32 w-screen ">
      <div className="flex px-3 md:px-6 lg:px-50 pt-10 w-full justify-between border-b border-green-300">
        <div className="flex flex-col gap-6">
          <TvMinimalPlay size={80} className="text-green-300" />
          <h1 className="text-3xl lg:text-5xl font-bold">{name}</h1>
          <div className="flex gap-6">
            <div className="flex text-lg items-center gap-2">
              <Calendar1 size={20} />
              <p className="text-gray-400">{air_date}</p>
            </div>
            <div className="flex items-center gap-2">
              <ListVideo size={20} />
              <p className="text-gray-400">{episode}</p>
            </div>
          </div>
          <div className="flex mb-8 text-md items-center gap-2">
            <SquareUserRound size={20} />
            <p className="text-gray-400">
              <span className="text-green-300">{characters?.length}</span>{" "}
              characters in this episode
            </p>
          </div>
        </div>
        <Image
          src="/img/episode-img.png"
          alt="Rick and Morty"
          width={400}
          height={400}
          className="hidden md:block"
        />
      </div>
      {multipleCharacters && (
        <CharactersCarousel
          multipleCharacters={multipleCharacters}
          router={router}
        />
      )}
      <div className="flex flex-col md:flex-row items-center justify-between py-10 w-full max-w-[80%] mx-auto px-4 gap-10 md:gap-0">
        <h1 className="text-2xl font-bold order-2 md:order-1">Episodes</h1>
        <div className="flex flex-col items-center justify-center w-full md:w-2/3 lg:w-1/2 order-1 md:order-2">
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetailView;

const CharactersCarousel = ({
  multipleCharacters,
  router,
}: {
  multipleCharacters: Character[];
  router: ReturnType<typeof useRouter>;
}) => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 w-full max-w-[80%] mx-auto px-4">
      <h1 className="text-md md:text-xl lg:text-2xl text-gray-400 font-bold mb-6 w-full text-center md:text-start">
        Characters in this episode
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
                <AvatarImage src={character.image} />
                <AvatarFallback>{character.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
