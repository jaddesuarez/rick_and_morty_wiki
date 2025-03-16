import { atom } from "jotai";
import { User } from "@interfaces/index";

export const userAtom = atom<User>({
  favEpisodes: [],
  favCharacters: [],
});
