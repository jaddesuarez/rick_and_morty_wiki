import { fetch } from "@configs/axios.config";
import { ApiResponse, Episode, Character, Location } from "@interfaces/index";

export const getEpisodes = async (
  page: number
): Promise<ApiResponse<Episode>> => {
  return fetch.get(`/episode?page=${page}`);
};

export const getLocations = async (
  page: number
): Promise<ApiResponse<Location>> => {
  return fetch.get(`/location?page=${page}`);
};

export const getCharacters = async (
  page: number
): Promise<ApiResponse<Character>> => {
  return fetch.get(`/character?page=${page}`);
};

export const getEpisodeById = async (id: number): Promise<Episode> => {
  return fetch.get(`/episode/${id}`);
};

export const getLocationById = async (id: number): Promise<Location> => {
  return fetch.get(`/location/${id}`);
};

export const getCharacterById = async (id: number): Promise<Character> => {
  return fetch.get(`/character/${id}`);
};
