export const isDev = (): boolean => {
  return process.env.NODE_ENV === "development";
};

export const logDev = (...args: unknown[]): void => {
  if (isDev()) {
    console.log(...args);
  }
};
