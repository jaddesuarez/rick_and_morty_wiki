import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const isDev = (): boolean => {
  return process.env.NODE_ENV === "development";
};

export const logDev = (...args: unknown[]): void => {
  if (isDev()) {
    console.log(...args);
  }
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const removeLocationExtraInfo = (location: string) => {
  return location.split("(")[0];
};

export const getIdFromUrl = (url: string) => {
  return url.split("/").pop();
};
