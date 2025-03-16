"use client";

import { useMutation } from "@tanstack/react-query";
import { submitReview } from "@services/review.service";
import { toast } from "sonner";

export const useReview = () => {
  const { mutate: submitReviewForm } = useMutation({
    mutationKey: ["review"],
    mutationFn: submitReview,
    onSuccess: () => {
      toast.success("Review submitted successfully!");
    },
    onError: () => {
      toast.error("Failed to submit review");
    },
  });

  return { submitReviewForm };
};
