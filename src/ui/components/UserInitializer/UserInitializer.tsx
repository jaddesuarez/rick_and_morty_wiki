"use client";

import { useAtom } from "jotai";
import { useEffect } from "react";
import { userAtom } from "@/lib/context/user";

export const UserInitializer = () => {
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    const initializeUser = () => {
      if (user) return;

      const favEpisodes = localStorage.getItem("favEpisodes") || "[]";
      const favCharacters = localStorage.getItem("favCharacters") || "[]";

      setUser({
        favEpisodes: JSON.parse(favEpisodes),
        favCharacters: JSON.parse(favCharacters),
      });
    };

    initializeUser();
  }, [setUser, user]);

  return null;
};
