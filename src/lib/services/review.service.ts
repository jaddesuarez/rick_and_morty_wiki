import { Review } from "@interfaces/index";
import { logDev } from "@utils/index";

export const submitReview = async (formData: Review): Promise<boolean> => {
  // This is a fake endpoint, so we'll just simulate a successful response
  logDev("Submitting review:", formData);
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 1000);
  });
};
