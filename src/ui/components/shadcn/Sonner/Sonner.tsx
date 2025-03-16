"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      theme="dark"
      richColors
      expand={true}
      closeButton={true}
      duration={3000}
    />
  );
}
