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
} from "lucide-react";
import { useParams } from "next/navigation";
import { useApi } from "@/lib/hooks/useApi";
import { Loading } from "@components/Loader/Loader.component";
const CharacterDetailView = () => {
  const { id } = useParams();
  const { characterById, isLoadingCharacterById } = useApi(
    undefined,
    id as string
  );
  if (isLoadingCharacterById) return <Loading />;
  const { gender, location, species, status, image, name, episode } =
    characterById || {};
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
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen ">
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
    </div>
  );
};

export default CharacterDetailView;
