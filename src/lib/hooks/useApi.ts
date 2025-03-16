import { useQuery } from "@tanstack/react-query";
import {
  getCharacters,
  getLocations,
  getEpisodes,
  getEpisodeById,
  getLocationById,
  getCharacterById,
  getMultipleEpisodes,
  getMultipleCharacters,
} from "@services/api.service";
import { Episode } from "@/lib/interfaces";

export const useApi = (page?: number, id?: string, ids?: string[]) => {
  const {
    data: characters,
    isLoading: isLoadingCharacters,
    error: errorCharacters,
  } = useQuery({
    queryKey: ["characters", page],
    queryFn: () => getCharacters(page || 1),
    enabled: !!page,
  });

  const {
    data: locations,
    isLoading: isLoadingLocations,
    error: errorLocations,
  } = useQuery({
    queryKey: ["locations", page],
    queryFn: () => getLocations(page || 1),
    enabled: !!page,
  });

  const getAllEpisodes = async () => {
    try {
      const episodes: Episode[] = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const data = await getEpisodes(page);
        episodes.push(...data.results);
        hasMore = data.info.next !== null;
        page++;
      }

      return episodes;
    } catch (error) {
      console.error("Error fetching all episodes:", error);
      return null;
    }
  };

  const {
    data: multipleEpisodes,
    isLoading: isLoadingMultipleEpisodes,
    error: errorMultipleEpisodes,
  } = useQuery({
    queryKey: ["multipleEpisodes", ids],
    queryFn: () => getMultipleEpisodes(ids || []),
    enabled: !!ids,
  });

  const {
    data: multipleCharacters,
    isLoading: isLoadingMultipleCharacters,
    error: errorMultipleCharacters,
  } = useQuery({
    queryKey: ["multipleCharacters", ids],
    queryFn: () => getMultipleCharacters(ids || []),
    enabled: !!ids,
  });

  const {
    data: episodeById,
    isLoading: isLoadingEpisodeById,
    error: errorEpisodeById,
  } = useQuery({
    queryKey: ["episodeById", id],
    queryFn: () => getEpisodeById(id || ""),
    enabled: !!id,
  });

  const {
    data: locationById,
    isLoading: isLoadingLocationById,
    error: errorLocationById,
  } = useQuery({
    queryKey: ["locationById", id],
    queryFn: () => getLocationById(id || ""),
    enabled: !!id,
  });

  const {
    data: characterById,
    isLoading: isLoadingCharacterById,
    error: errorCharacterById,
  } = useQuery({
    queryKey: ["characterById", id],
    queryFn: () => getCharacterById(id || ""),
    enabled: !!id,
  });

  return {
    characters,
    isLoadingCharacters,
    errorCharacters,
    locations,
    isLoadingLocations,
    errorLocations,
    multipleEpisodes,
    isLoadingMultipleEpisodes,
    errorMultipleEpisodes,
    multipleCharacters,
    isLoadingMultipleCharacters,
    errorMultipleCharacters,
    episodeById,
    isLoadingEpisodeById,
    errorEpisodeById,
    locationById,
    isLoadingLocationById,
    errorLocationById,
    characterById,
    isLoadingCharacterById,
    errorCharacterById,
    getAllEpisodes,
  };
};
