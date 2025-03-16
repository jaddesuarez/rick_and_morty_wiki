"use client";

import { useEpisodes } from "@/lib/hooks/useEpisodes";

export const EpisodesInitializer = () => {
  useEpisodes();
  return null;
};
