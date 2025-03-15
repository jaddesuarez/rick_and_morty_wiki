"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { URLS } from "@/app/consts/enum";
import { Location } from "@/lib/interfaces";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const LocationCard = ({ id, name, dimension }: Location) => {
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const slideAnimation = {
    x: name.length > 20 ? [0, -(name.length * 12 + 20)] : 0,
    transition: {
      duration: Math.max(name.length * 0.3, 3),
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "linear",
    },
  };

  return (
    <div className="relative w-[300px]">
      <Image
        src="/svg/Planet.svg"
        alt="location-card"
        width={104}
        height={104}
        className="absolute w-24 h-24 flex items-center justify-center left-1/2 transform -translate-x-1/2 -top-3 z-10"
      />
      <div className="w-full bg-gray-800 rounded-3xl p-6 pt-12 mt-12 flex flex-col items-center gap-2">
        <div className="w-[250px] text-center overflow-hidden">
          <AnimatePresence>
            {isMounted &&
              (name.length > 20 ? (
                <motion.div className="flex">
                  <motion.p
                    className="text-xl font-bold whitespace-nowrap"
                    animate={slideAnimation}
                  >
                    {name}
                  </motion.p>
                  <motion.p
                    className="text-xl font-bold whitespace-nowrap ml-8"
                    animate={slideAnimation}
                  >
                    {name}
                  </motion.p>
                </motion.div>
              ) : (
                <motion.p className="text-xl font-bold truncate">
                  {name}
                </motion.p>
              ))}
          </AnimatePresence>
        </div>
        <p className="text-green-300 text-md font-medium max-w-50 truncate">
          {dimension}
        </p>
        <div
          className="flex items-center text-gray-400 gap-2 hover:cursor-pointer hover:underline"
          onClick={() => router.push(`${URLS.LOCATIONS}/${id}`)}
        >
          <p className="text-md">more info</p>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
