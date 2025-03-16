"use client";

import { useAtom } from "jotai";
import { episodesAtom } from "@/lib/context/episodes";
import { EpisodeCard } from "@/ui/components/EpisodeCard/EpisodeCard.component";
import { Loading } from "@components/Loader/Loader.component";
import { useEpisodes } from "@/lib/hooks/useEpisodes";

const EpisodesView = () => {
  const [organizedEpisodes] = useAtom(episodesAtom);
  const { isLoadingEpisodes } = useEpisodes();

  if (isLoadingEpisodes) return <Loading />;

  return (
    <div className="with-space-bg flex flex-col items-center mx-auto px-8 py-32">
      {Object.entries(organizedEpisodes).map(([seasonKey, season]) => (
        <div key={seasonKey} className="w-full mb-12">
          <h2 className="text-4xl font-bold mb-8">
            Season {season.seasonNumber}
          </h2>
          <div className="w-full h-[2px] bg-gray-600 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {season.episodes.map((episode) => (
              <EpisodeCard key={episode.id} {...episode} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpisodesView;
