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

export const getEpisodeById = async (id: number): Promise<Episode> => {
  const response = await fetch.get(`/episode/${id}`);
  return response.data;
};

export const getLocationById = async (id: number): Promise<Location> => {
  const response = await fetch.get(`/location/${id}`);
  return response.data;
};

export const getCharacterById = async (id: number): Promise<Character> => {
  const response = await fetch.get(`/character/${id}`);
  return response.data;
};
