"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Activity,
  CircleHelp,
  CircleOff,
  User,
  Earth,
  Heart,
} from "lucide-react";
import { Character } from "@/lib/interfaces";
import { useRouter } from "next/navigation";
import { URLS } from "@/app/consts/enum";
import { removeLocationExtraInfo } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const manageFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const getStatusIcon = (status: string) => {
    if (status === "Alive") return <Activity className="text-green-600" />;
    if (status === "Dead") return <CircleOff className="text-red-500" />;
    return <CircleHelp className="text-gray-500" />;
  };

  const slideAnimation = {
    x: name.length > 20 ? ["0%", "-50%"] : 0,
    transition: {
      duration: 300,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "linear",
    },
  };

  return (
    <div
      className="w-[280px] h-[410px] overflow-hidden rounded-xl shadow-lg cursor-pointer 
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
            <Heart
              size={24}
              className="text-green-300 cursor-pointer"
              fill={isFavorite ? "currentColor" : "none"}
            />
          </button>
        </div>
      </div>

      <div className="bg-gray-800 p-4 h-[calc(420px-192px)]">
        <div className="overflow-hidden">
          <AnimatePresence>
            {isMounted &&
              (name.length > 20 ? (
                <motion.div className="flex">
                  <motion.h2
                    className="text-xl mb-4 font-bold whitespace-nowrap"
                    animate={slideAnimation}
                  >
                    {Array.from({ length: 100 }).map((_, index) => (
                      <span key={index}>
                        {name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    ))}
                  </motion.h2>
                </motion.div>
              ) : (
                <motion.h2 className="text-xl mb-4 font-bold truncate">
                  {name}
                </motion.h2>
              ))}
          </AnimatePresence>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            {getStatusIcon(status)}
            <span className="text-sm truncate">{status}</span>
          </div>

          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="text-sm truncate">{species}</span>
          </div>

          <div className="flex items-center gap-2">
            <Earth className="w-5 h-5" />
            <span className="text-sm truncate">
              {removeLocationExtraInfo(location.name)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
