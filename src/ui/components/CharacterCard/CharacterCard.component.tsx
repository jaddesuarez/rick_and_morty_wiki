"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, User, Globe, Star } from "lucide-react";
import { Character } from "@/lib/interfaces";
import { useRouter } from "next/navigation";
import { URLS } from "@consts/enum";

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

  return (
    <div
      className="max-w-sm mx-auto overflow-hidden rounded-xl shadow-lg cursor-pointer 
      transition-transform duration-300 ease-in-out hover:-translate-y-2"
      key={id}
      onClick={() => router.push(`${URLS.CHARACTERS}/${id}`)}
    >
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={600}
          height={400}
          className="w-full object-cover"
        />
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

      <div className="bg-green-300 p-6 pt-4">
        <h2 className="text-gray-900 text-4xl mb-4 font-bold">{name}</h2>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Heart className="text-gray-900 w-6 h-6" />
            <span className="text-gray-900 text-lg">{status}</span>
          </div>

          <div className="flex items-center gap-3">
            <User className="text-gray-900 w-6 h-6" />
            <span className="text-gray-900 text-lg">{species}</span>
          </div>

          <div className="flex items-center gap-3">
            <Globe className="text-gray-900 w-6 h-6" />
            <span className="text-gray-900 text-lg">{location.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
