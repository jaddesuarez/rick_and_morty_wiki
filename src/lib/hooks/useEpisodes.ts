import { useEffect } from "react";
import { useAtom } from "jotai";
import { episodesAtom } from "@/lib/context/episodes";
import { Episode, Episodes } from "@/lib/interfaces";
import { useApi } from "./useApi";

export const useEpisodes = () => {
  const [episodes, setEpisodes] = useAtom(episodesAtom);
  const { getAllEpisodes } = useApi();

  useEffect(() => {
    const initializeEpisodes = async () => {
      if (!episodes || Object.keys(episodes).length === 0) {
        const allEpisodes = await getAllEpisodes();
        if (allEpisodes) {
          const organizedEpisodes = organizeEpisodesBySeason(allEpisodes);
          setEpisodes(organizedEpisodes);
        }
      }
    };

    initializeEpisodes();
  }, [episodes, getAllEpisodes, setEpisodes]);

  return {
    episodes,
  };
};

const organizeEpisodesBySeason = (episodes: Episode[]): Episodes => {
  const organized: Episodes = {};

  episodes.forEach((episode) => {
    const seasonNum = episode.episode.substring(1, 3);
    const seasonKey = `s${seasonNum}`;

    if (!organized[seasonKey]) {
      organized[seasonKey] = {
        episodes: [],
        seasonNumber: parseInt(seasonNum),
        totalEpisodes: 0,
      };
    }

    organized[seasonKey].episodes.push(episode);
    organized[seasonKey].totalEpisodes++;
  });

  return organized;
};
