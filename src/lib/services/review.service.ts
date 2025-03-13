import { Review } from "@interfaces/index";
import { logDev } from "@utils/index";

export const submitComment = async (formData: Review): Promise<boolean> => {
  // This is a fake endpoint, so we'll just simulate a successful response
  logDev("Submitting comment:", formData);
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 1000);
  });
};
