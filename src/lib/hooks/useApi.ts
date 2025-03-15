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
    episodes,
    isLoadingEpisodes,
    errorEpisodes,
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
  };
};
