"use client";

import { useEffect, useRef, useState } from "react";
import { useApi } from "@/lib/hooks/useApi";
import { CharacterCard } from "@/ui/components/CharacterCard/CharacterCard.component";
import { Character } from "@/lib/interfaces";
import { Loading } from "@components/Loader/Loader.component";
import { Skeleton } from "@components/shadcn/Skeleton/Skeleton";

const CharactersView = () => {
  const [page, setPage] = useState(1);
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);

  const { characters, isLoadingCharacters } = useApi(page);

  useEffect(() => {
    if (characters) {
      setCharacterList((prev) => [...prev, ...characters.results]);
      setHasMore(!!characters.info.next);
    }
  }, [characters]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingCharacters) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoadingCharacters]);

  if (isLoadingCharacters && page === 1) return <Loading />;

  return (
    <div className="with-space-bg flex flex-col items-center mx-auto px-12 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
        {characterList.map((character, index) => (
          <CharacterCard key={index} {...character} />
        ))}
        {isLoadingCharacters && <CharacterCardSkeleton />}
      </div>
      <div ref={observerTarget} className="h-10" />
    </div>
  );
};

export default CharactersView;

const CharacterCardSkeleton = () => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="w-[280px] h-[430px] rounded-xl overflow-hidden"
        >
          <div className="relative h-[250px]">
            <Skeleton className="h-full w-full" />
            <div className="absolute bottom-4 right-4">
              <Skeleton className="h-12 w-12 rounded-full" />
            </div>
          </div>
          <div className="bg-green-300 p-4 h-[calc(420px-192px)]">
            <Skeleton className="h-8 w-3/4 mb-4" />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-5 w-24" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-5 w-32" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-5 w-28" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
