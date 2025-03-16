"use client";

import Image from "next/image";
import {
  Activity,
  TvMinimalPlay,
  User,
  CircleUserRound,
  Mars,
  Venus,
  CircleHelp,
  CircleOff,
  Box,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useApi } from "@/lib/hooks/useApi";
import { Loading } from "@components/Loader/Loader.component";
import { getIdFromUrl } from "@/lib/utils";
import { EpisodesCarousel } from "@/ui/components/EpisodesCarousel/EpisodesCarousel.component";
const CharacterDetailView = () => {
  const { id } = useParams();
  const router = useRouter();
  const { characterById, isLoadingCharacterById } = useApi(
    undefined,
    id as string
  );

  const { gender, location, species, status, image, name, episode } =
    characterById || {};
  const locationId = getIdFromUrl(location?.url || "");
  const episodeIds = episode?.map((episode) => getIdFromUrl(episode));
  const { locationById, isLoadingLocationById } = useApi(
    undefined,
    locationId as string
  );
  const { multipleEpisodes, isLoadingMultipleEpisodes } = useApi(
    undefined,
    undefined,
    episodeIds as string[]
  );

  const getStatus = (status: string) => {
    if (status === "Alive")
      return <Activity size={20} className="text-green-600" />;
    if (status === "Dead")
      return <CircleOff size={20} className="text-red-500" />;
    return <CircleHelp size={20} className="text-gray-400" />;
  };
  const getGender = (gender: string) => {
    if (gender === "Male") return <Mars size={20} className="text-blue-300" />;
    if (gender === "Female")
      return <Venus size={20} className="text-red-300" />;
    return <CircleHelp size={20} className="text-gray-400" />;
  };

  if (
    isLoadingCharacterById ||
    isLoadingLocationById ||
    isLoadingMultipleEpisodes
  )
    return <Loading />;

  return (
    <div className="flex flex-col items-center justify-center w-screen mt-32">
      <div className="flex flex-col md:flex-row px-3 md:px-6 lg:px-50 py-10 items-center w-full justify-between border-b border-green-300">
        <div className="flex flex-col gap-6">
          <CircleUserRound size={80} className="text-green-300" />
          <h1 className="text-3xl lg:text-5xl font-bold">{name}</h1>
          <div className="flex gap-6">
            <div className="flex text-lg items-center gap-2">
              {getStatus(status || "")}
              <p className="text-gray-400">{status}</p>
            </div>
            <div className="flex items-center gap-2">
              <User size={20} />
              <p className="text-gray-400">{species}</p>
            </div>
            <div className="flex items-center gap-2">
              {getGender(gender || "")}
              <p className="text-gray-400">{gender}</p>
            </div>
          </div>
          <div className="flex mb-8 text-md items-center gap-2">
            <TvMinimalPlay size={20} />
            <p className="text-gray-400">
              Appears in{" "}
              <span className="text-green-300">{episode?.length}</span> episodes
            </p>
          </div>
        </div>
        <Image
          src={image || ""}
          alt="Rick and Morty"
          width={400}
          height={400}
          className="h-[300px] w-[300px] object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col w-full gap-6 mb-10">
        <div>
          {multipleEpisodes && (
            <EpisodesCarousel
              multipleEpisodes={multipleEpisodes}
              description="Appearence in episodes"
            />
          )}
        </div>
        <div className="flex w-full justify-between max-w-[90%] mx-auto px-4 gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-gray-400">
              <ArrowRight size={20} />
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                Location
              </h1>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/svg/Planet.svg"
                  alt="location-card"
                  width={26}
                  height={26}
                />
                <h1
                  className="text-2xl font-bold cursor-pointer hover:underline"
                  onClick={() => {
                    router.push(`/locations/${locationId}`);
                  }}
                >
                  {locationById?.name}
                </h1>
              </div>
              <div className="flex text-lg items-center gap-2">
                <MapPin size={20} />
                <p className="text-gray-400">{locationById?.type}</p>
              </div>
              <div className="flex items-center gap-2">
                <Box size={20} />
                <p className="text-gray-400">{locationById?.dimension}</p>
              </div>
            </div>
          </div>
          <Image
            src={`/img/planet-${Math.floor(Math.random() * 10) + 1}.png`}
            alt="Rick and Morty"
            width={250}
            height={250}
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailView;
