"use client";

import Image from "next/image";
import {
  TvMinimalPlay,
  Calendar1,
  ListVideo,
  SquareUserRound,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useApi } from "@/lib/hooks/useApi";
import { Loading } from "@components/Loader/Loader.component";
import { getIdFromUrl } from "@/lib/utils";
import { ReviewForm } from "@components/ReviewForm/ReviewForm.component";
import { CharactersCarousel } from "@/ui/components/CharactersCarousel/CharactersCarousel.component";
import { useAtom } from "jotai";
import { episodesAtom } from "@/lib/context/episodes";
import { EpisodeCard } from "@/ui/components/EpisodeCard/EpisodeCard.component";
const EpisodeDetailView = () => {
  const { id } = useParams();
  const { episodeById, isLoadingEpisodeById } = useApi(undefined, id as string);
  const { name, air_date, episode, characters } = episodeById || {};
  const seasonNum = episode?.substring(1, 3) || "";
  const seasonKey = `s${seasonNum}`;
  const [episodes] = useAtom(episodesAtom);
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
          type="episode"
          multipleCharacters={multipleCharacters}
        />
      )}
      <div className="flex flex-col lg:flex-row items-center justify-between py-10 w-full max-w-[80%] mx-auto px-4 gap-10 lg:gap-1">
        <div className="order-2 lg:order-1">
          <h1 className="text-md md:text-xl lg:text-2xl text-gray-400 font-bold mb-6 w-full text-center md:text-start">
            Other episodes in this season
          </h1>
          <div className="flex flex-wrap gap-2 w-full">
            {episodes[seasonKey]?.episodes.map((episode) => (
              <EpisodeCard key={episode.id} {...episode} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full order-1 lg:order-2">
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetailView;
