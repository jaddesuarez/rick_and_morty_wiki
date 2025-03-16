"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/shadcn/Form/Form";

import { Input } from "@components/shadcn/Input/Input";
import { Textarea } from "@components/shadcn/TextArea/TextArea";
import { Button } from "@components/shadcn/Button/Button";
import { useReview } from "@/lib/hooks/useReview";
const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Invalid email address.",
    }),
  comment: z
    .string()
    .min(10, {
      message: "Review must be at least 10 characters.",
    })
    .max(500, {
      message: "Review must be at most 500 characters.",
    }),
  rating: z.number().max(5, {
    message: "Rating must be at most 5.",
  }),
});

export const ReviewForm = () => {
  const { submitReviewForm } = useReview();
  const [hoveredRating, setHoveredRating] = useState(0);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
      rating: 0,
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    submitReviewForm(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl font-bold">Review Episode</h1>
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "w-6 h-6 cursor-pointer transition-colors",
                          star <= (hoveredRating || field.value)
                            ? "text-green-300 fill-green-300"
                            : "text-gray-400"
                        )}
                        onClick={() => {
                          field.onChange(star);
                        }}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                      />
                    ))}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="make your review here... (max 500 characters)"
                  {...field}
                  maxLength={500}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit Review</Button>
      </form>
    </Form>
  );
};
