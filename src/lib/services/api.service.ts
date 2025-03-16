import { fetch } from "@configs/axios.config";
import { ApiResponse, Episode, Character, Location } from "@interfaces/index";

export const getEpisodes = async (
  page: number
): Promise<ApiResponse<Episode>> => {
  const response = await fetch.get(`/episode?page=${page}`);
  return response.data;
};

export const getLocations = async (
  page: number
): Promise<ApiResponse<Location>> => {
  const response = await fetch.get(`/location?page=${page}`);
  return response.data;
};

export const getCharacters = async (
  page: number
): Promise<ApiResponse<Character>> => {
  const response = await fetch.get(`/character?page=${page}`);
  return response.data;
};

export const getMultipleCharacters = async (
  ids: string[]
): Promise<Character[]> => {
  const response = await fetch.get(`/character/${ids}`);
  return response.data.length > 1 ? response.data : [response.data];
};

export const getMultipleEpisodes = async (
  ids: string[]
): Promise<Episode[]> => {
  const response = await fetch.get(`/episode/${ids}`);
  return response.data;
};

export const getEpisodeById = async (id: string): Promise<Episode> => {
  const response = await fetch.get(`/episode/${id}`);
  return response.data;
};

export const getLocationById = async (id: string): Promise<Location> => {
  const response = await fetch.get(`/location/${id}`);
  return response.data;
};

export const getCharacterById = async (id: string): Promise<Character> => {
  const response = await fetch.get(`/character/${id}`);
  return response.data;
};
