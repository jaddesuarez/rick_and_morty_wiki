"use client";

import Image from "next/image";
import { MapPin, Box, SquareUserRound } from "lucide-react";
import { useParams } from "next/navigation";
import { useApi } from "@/lib/hooks/useApi";
import { Loading } from "@components/Loader/Loader.component";

const LocationDetailView = () => {
  const { id } = useParams();
  const { locationById, isLoadingLocationById } = useApi(
    undefined,
    id as string
  );
  if (isLoadingLocationById) return <Loading />;
  const { name, type, dimension, residents } = locationById || {};
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen ">
      <div className="flex px-3 md:px-6 lg:px-50 py-10 w-full justify-between border-b border-green-300">
        <div className="flex flex-col gap-6">
          <Image
            src="/svg/Planet.svg"
            alt="location-card"
            width={100}
            height={100}
          />
          <h1 className="text-3xl lg:text-5xl font-bold">{name}</h1>
          <div className="flex gap-6">
            <div className="flex text-lg items-center gap-2">
              <MapPin size={20} />
              <p className="text-gray-400">{type}</p>
            </div>
            <div className="flex items-center gap-2">
              <Box size={20} />
              <p className="text-gray-400">{dimension}</p>
            </div>
          </div>
          <div className="flex mb-8 text-md items-center gap-2">
            <SquareUserRound size={20} />
            <p className="text-gray-400">
              <span className="text-green-300">{residents?.length}</span>{" "}
              characters in this location
            </p>
          </div>
        </div>
        <Image
          src={`/img/planet-${Math.floor(Math.random() * 10) + 1}.png`}
          alt="Rick and Morty"
          width={300}
          height={300}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default LocationDetailView;
