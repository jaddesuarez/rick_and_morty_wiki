"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={"system" as ToasterProps["theme"]}
      className="toaster group"
      duration={3000}
      richColors
      toastOptions={{
        classNames: {
          toast:
            " group toast group-[.toaster]:bg-black group-[.toaster]:text-white group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-white",
          actionButton: "group-[.toast]:bg-white group-[.toast]:text-black",
          cancelButton: "group-[.toast]:bg-black group-[.toast]:text-white",
        },
      }}
      {...props}
    />
  );
};

export default Toaster;
