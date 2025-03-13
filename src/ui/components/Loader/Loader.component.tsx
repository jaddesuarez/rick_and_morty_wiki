"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";

export const Loading = () => {
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      <div className="relative h-full flex flex-col items-center justify-center">
        <MotionConfig reducedMotion="user">
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 360, 360, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Image
                src="/img/rick-loading.png"
                alt="loading"
                width={100}
                height={100}
              />
            </motion.div>
          </div>
        </MotionConfig>
      </div>
    </div>
  );
};
