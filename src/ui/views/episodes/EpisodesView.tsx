"use client";

import { useEffect, useRef, useState } from "react";
import { useApi } from "@/lib/hooks/useApi";
import { EpisodeCard } from "@/ui/components/EpisodeCard/EpisodeCard.component";
import { Episode } from "@/lib/interfaces";
import { Loading } from "@components/Loader/Loader.component";
import { Skeleton } from "@components/shadcn/Skeleton/Skeleton";

const EpisodesView = () => {
  const [page, setPage] = useState(1);
  const [episodesBySeason, setEpisodesBySeason] = useState<{
    [key: string]: Episode[];
  }>({});
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);

  const { episodes, isLoadingEpisodes } = useApi(page);

  useEffect(() => {
    if (episodes?.results) {
      const newEpisodes = episodes.results.reduce(
        (acc: { [key: string]: Episode[] }, episode) => {
          const season = `Season ${episode.episode.slice(1, 3)}`;
          if (!acc[season]) {
            acc[season] = [];
          }
          acc[season].push(episode);
          return acc;
        },
        {}
      );

      setEpisodesBySeason((prev) => {
        const updated = { ...prev };
        Object.entries(newEpisodes).forEach(([season, episodes]) => {
          if (!updated[season]) {
            updated[season] = [];
          }
          updated[season] = [...updated[season], ...episodes];
        });
        return updated;
      });

      setHasMore(!!episodes.info.next);
    }
  }, [episodes]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingEpisodes) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoadingEpisodes]);

  if (isLoadingEpisodes && page === 1) return <Loading />;

  return (
    <div className="with-space-bg flex flex-col items-center mx-auto px-12 py-32">
      {Object.entries(episodesBySeason).map(([season, episodes]) => (
        <div key={season} className="w-full mb-12">
          <h2 className="text-4xl font-bold mb-8">{season}</h2>
          <div className="w-full h-[2px] bg-gray-600 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {episodes.map((episode) => (
              <EpisodeCard key={episode.id} {...episode} />
            ))}
          </div>
        </div>
      ))}
      {isLoadingEpisodes && <EpisodeCardSkeleton />}
      <div ref={observerTarget} className="h-10" />
    </div>
  );
};

export default EpisodesView;

const EpisodeCardSkeleton = () => {
  return (
    <div className="w-full mb-12">
      <Skeleton className="h-12 w-48 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="w-[400px] h-[100px] flex items-center justify-between bg-gray-800 overflow-hidden rounded-xl p-6 pr-10"
          >
            <div className="flex flex-col gap-2">
              <Skeleton className="w-50 h-5" />
              <Skeleton className="w-20 h-3" />
            </div>
            <Skeleton className="w-10 h-10 rounded-full bg-green-300" />
          </div>
        ))}
      </div>
    </div>
  );
};
