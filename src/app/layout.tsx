import PageTransition from "@layouts/PageTransition";
import { type FC } from "react";
import { Providers } from "./Providers";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";

import { Toaster } from "@/ui/components/shadcn/Sonner/Sonner";

import "@styles/global.styles.css";

interface IRootLayout {
  children: React.ReactNode;
}

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "A wiki about Rick and Morty series",
  icons: {
    icon: [
      {
        url: "/img/rick-general.png",
        sizes: "any",
      },
    ],
    apple: {
      url: "/img/rick-general.png",
      sizes: "180x180",
    },
  },
};

const RootLayout: FC<IRootLayout> = ({ children }) => {
  return (
    <html lang="en" className={spaceMono.className}>
      <head />
      <body>
        <Providers>
          <main>{children}</main>
          <Toaster />
          <PageTransition />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
