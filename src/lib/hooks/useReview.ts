import { useMutation } from "@tanstack/react-query";
import { submitReview } from "@services/review.service";
import { Review } from "@interfaces/index";
import { toast } from "sonner";

export const useReview = () => {
  const { mutate: submitReviewForm, isPending: isSubmittingReview } =
    useMutation({
      mutationKey: ["review"],
      mutationFn: (data: Review) => submitReview(data),
      onSuccess: () => {
        toast.success("Success");
      },
      onError: () => {
        toast.error("Error");
      },
    });

  return {
    submitReviewForm,
    isSubmittingReview,
  };
};
