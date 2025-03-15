"use client";

import { useState, useEffect, useRef } from "react";
import { LocationCard } from "@components/LocationCard/LocationCard.component";
import { Location } from "@/lib/interfaces";
import { useApi } from "@/lib/hooks/useApi";
import { Loading } from "@components/Loader/Loader.component";
import { Skeleton } from "@components/shadcn/Skeleton/Skeleton";

const LocationsView = () => {
  const [page, setPage] = useState(1);
  const [locationList, setLocationList] = useState<Location[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);

  const { locations, isLoadingLocations } = useApi(page);

  useEffect(() => {
    if (locations) {
      setLocationList((prev) => [...prev, ...locations.results]);
      setHasMore(!!locations.info.next);
    }
  }, [locations]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingLocations) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoadingLocations]);

  if (isLoadingLocations && page === 1) return <Loading />;

  return (
    <div className="with-space-bg flex flex-col items-center mx-auto px-12 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
        {locationList.map((location, index) => (
          <LocationCard key={index} {...location} />
        ))}
        {isLoadingLocations && <LocationCardSkeleton />}
      </div>
      <div ref={observerTarget} className="h-10" />
    </div>
  );
};

export default LocationsView;

const LocationCardSkeleton = () => {
  return [...Array(6)].map((_, index) => (
    <div
      key={index}
      className="flex flex-col items-end relative w-[300px] h-[200px]"
    >
      <Skeleton className="absolute w-24 h-24 left-1/2 transform -translate-x-1/2 -top-3 z-10 rounded-full" />
      <Skeleton className="w-full h-[150px] rounded-3xl" />
    </div>
  ));
};
