"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TvMinimalPlay, ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { URLS } from "@consts/enum";
import { Episode } from "@/lib/interfaces";

export const EpisodeCard = ({ id, name, episode }: Episode) => {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const slideAnimation = {
    x: name.length > 13 ? [0, -(name.length * 8)] : 0,
    transition: {
      duration: Math.max(name.length * 0.2, 3),
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "linear",
      repeatDelay: 1,
    },
  };

  return (
    <div className="w-[330px] h-[100px] flex items-center justify-between bg-gray-800 overflow-hidden rounded-xl p-6 pr-10">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <TvMinimalPlay className="w-4 h-4" />
          <div className="w-[150px] overflow-hidden">
            <AnimatePresence>
              {isMounted &&
                (name.length > 13 ? (
                  <motion.div className="flex">
                    <motion.p
                      className="text-lg font-bold whitespace-nowrap"
                      animate={slideAnimation}
                    >
                      {name}
                    </motion.p>
                    <motion.p
                      className="text-lg font-bold whitespace-nowrap ml-8"
                      animate={slideAnimation}
                    >
                      {name}
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.p className="text-lg font-bold truncate">
                    {name}
                  </motion.p>
                ))}
            </AnimatePresence>
          </div>
          <p>|</p>
          <p className="text-lg">{episode}</p>
        </div>
        <div
          className="flex items-center gap-2 hover:cursor-pointer hover:underline"
          onClick={() => router.push(`${URLS.EPISODES}/${id}`)}
        >
          <p className="text-md text-gray-400">more info</p>
          <ArrowRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      <Star
        size={32}
        className="cursor-pointer text-green-300"
        fill={isFavorite ? "currentColor" : "none"}
        onClick={() => setIsFavorite(!isFavorite)}
      />
    </div>
  );
};
