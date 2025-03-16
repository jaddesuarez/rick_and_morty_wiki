"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TvMinimalPlay, ArrowRight, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { URLS } from "@/app/consts/enum";
import { Episode } from "@/lib/interfaces";
import { useUser } from "@/lib/hooks/useUser";

export const EpisodeCard = ({ id, name, episode }: Episode) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const { user, addFavEpisode, removeFavEpisode } = useUser();

  const isFavorite = user?.favEpisodes.includes(id) || false;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavEpisode(id);
    } else {
      addFavEpisode(id);
    }
  };

  const slideAnimation = {
    x: name.length > 8 ? ["0%", "-50%"] : 0,
    transition: {
      duration: 300,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "linear",
    },
  };

  return (
    <div className="w-[330px] h-[100px] flex items-center justify-between bg-gray-800 rounded-xl p-6 pr-10">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <TvMinimalPlay className="w-4 h-4" />
          <div className="w-[100px] overflow-hidden">
            <AnimatePresence>
              {isMounted &&
                (name.length > 8 ? (
                  <motion.div className="flex">
                    <motion.p
                      className="text-md font-bold whitespace-nowrap"
                      animate={slideAnimation}
                    >
                      {Array.from({ length: 100 }).map((_, index) => (
                        <span key={index}>
                          {name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                      ))}
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.p className="text-md font-bold truncate">
                    {name}
                  </motion.p>
                ))}
            </AnimatePresence>
          </div>
          <p>|</p>
          <p className="text-md">{episode}</p>
        </div>
        <div
          className="flex items-center gap-2 hover:cursor-pointer hover:underline"
          onClick={() => router.push(`${URLS.EPISODES}/${id}`)}
        >
          <p className="text-md text-gray-400">more info</p>
          <ArrowRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      <Heart
        size={32}
        className="cursor-pointer text-green-300 flex-shrink-0"
        fill={isFavorite ? "currentColor" : "none"}
        onClick={handleFavorite}
      />
    </div>
  );
};
