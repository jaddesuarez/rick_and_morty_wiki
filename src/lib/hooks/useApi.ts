import { useQuery } from "@tanstack/react-query";
import {
  getCharacters,
  getLocations,
  getEpisodes,
  getEpisodeById,
  getLocationById,
  getCharacterById,
} from "@services/api.service";

export const useApi = (page?: number, id?: number) => {
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

  const {
    data: episodes,
    isLoading: isLoadingEpisodes,
    error: errorEpisodes,
  } = useQuery({
    queryKey: ["episodes", page],
    queryFn: () => getEpisodes(page || 1),
    enabled: !!page,
  });

  const {
    data: episodeById,
    isLoading: isLoadingEpisodeById,
    error: errorEpisodeById,
  } = useQuery({
    queryKey: ["episodeById", id],
    queryFn: () => getEpisodeById(id || 1),
    enabled: !!id,
  });

  const {
    data: locationById,
    isLoading: isLoadingLocationById,
    error: errorLocationById,
  } = useQuery({
    queryKey: ["locationById", id],
    queryFn: () => getLocationById(id || 1),
    enabled: !!id,
  });

  const {
    data: characterById,
    isLoading: isLoadingCharacterById,
    error: errorCharacterById,
  } = useQuery({
    queryKey: ["characterById", id],
    queryFn: () => getCharacterById(id || 1),
    enabled: !!id,
  });

  return {
    characters,
    isLoadingCharacters,
    errorCharacters,
    locations,
    isLoadingLocations,
    errorLocations,
    episodes,
    isLoadingEpisodes,
    errorEpisodes,
    episodeById,
    isLoadingEpisodeById,
    errorEpisodeById,
    locationById,
    isLoadingLocationById,
    errorLocationById,
    characterById,
    isLoadingCharacterById,
    errorCharacterById,
  };
};
