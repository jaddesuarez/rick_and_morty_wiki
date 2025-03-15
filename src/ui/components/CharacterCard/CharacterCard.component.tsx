"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Activity,
  CircleHelp,
  CircleOff,
  User,
  Globe,
  Star,
} from "lucide-react";
import { Character } from "@/lib/interfaces";
import { useRouter } from "next/navigation";
import { URLS } from "@consts/enum";
import { removeLocationExtraInfo } from "@/lib/utils";
export const CharacterCard = ({
  id,
  name,
  image,
  status,
  species,
  location,
}: Character) => {
  const router = useRouter();

  const [isFavorite, setIsFavorite] = useState(false);

  const manageFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const getStatusIcon = (status: string) => {
    if (status === "Alive") return <Activity className="text-green-600" />;
    if (status === "Dead") return <CircleOff className="text-red-500" />;
    return <CircleHelp className="text-gray-500" />;
  };

  return (
    <div
      className="w-[280px] h-[430px] overflow-hidden rounded-xl shadow-lg cursor-pointer 
      transition-transform duration-300 ease-in-out hover:-translate-y-2"
      key={id}
      onClick={() => router.push(`${URLS.CHARACTERS}/${id}`)}
    >
      <div className="relative h-[250px]">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute bottom-4 right-4">
          <button
            className="bg-gray-900 rounded-full p-3 flex items-center justify-center"
            onClick={manageFavorite}
          >
            <Star
              size={24}
              className="text-green-300 cursor-pointer"
              fill={isFavorite ? "currentColor" : "none"}
            />
          </button>
        </div>
      </div>

      <div className="bg-green-300 p-4 h-[calc(420px-192px)]">
        <h2 className="text-gray-900 text-2xl mb-4 font-bold truncate">
          {name}
        </h2>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            {getStatusIcon(status)}
            <span className="text-gray-900 text-base truncate">{status}</span>
          </div>

          <div className="flex items-center gap-2">
            <User className="text-gray-900 w-5 h-5" />
            <span className="text-gray-900 text-base truncate">{species}</span>
          </div>

          <div className="flex items-center gap-2">
            <Globe className="text-gray-900 w-5 h-5" />
            <span className="text-gray-900 text-base truncate">
              {removeLocationExtraInfo(location.name)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
