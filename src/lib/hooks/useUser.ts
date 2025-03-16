import { useAtom } from "jotai";
import { userAtom } from "@/lib/context/user";

export const useUser = () => {
  const [user, setUser] = useAtom(userAtom);

  const addFavEpisode = (episodeId: number) => {
    if (!user) return;
    const newFavEpisodes = [...user.favEpisodes, episodeId];
    localStorage.setItem("favEpisodes", JSON.stringify(newFavEpisodes));
    setUser({
      ...user,
      favEpisodes: newFavEpisodes,
    });
  };

  const addFavCharacter = (characterId: number) => {
    if (!user) return;
    const favCharacters = localStorage.getItem("favCharacters");
    if (!favCharacters) return;
    const parsedFavCharacters = JSON.parse(favCharacters);
    parsedFavCharacters.push(characterId);
    localStorage.setItem("favCharacters", JSON.stringify(parsedFavCharacters));
    setUser({ ...user, favCharacters: [...user.favCharacters, characterId] });
  };

  const removeFavEpisode = (episodeId: number) => {
    if (!user) return;
    const newFavEpisodes = user.favEpisodes.filter((id) => id !== episodeId);
    localStorage.setItem("favEpisodes", JSON.stringify(newFavEpisodes));
    setUser({
      ...user,
      favEpisodes: newFavEpisodes,
    });
  };

  const removeFavCharacter = (characterId: number) => {
    if (!user) return;
    const favCharacters = localStorage.getItem("favCharacters");
    if (!favCharacters) return;
    let parsedFavCharacters = JSON.parse(favCharacters);
    parsedFavCharacters = parsedFavCharacters.filter(
      (id: number) => id !== characterId
    );
    localStorage.setItem("favCharacters", JSON.stringify(parsedFavCharacters));
    setUser({ ...user, favCharacters: parsedFavCharacters });
  };

  return {
    user,
    addFavEpisode,
    addFavCharacter,
    removeFavEpisode,
    removeFavCharacter,
  };
};
