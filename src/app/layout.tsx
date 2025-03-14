import PageTransition from "@layouts/PageTransition";
import { type FC } from "react";
import { Providers } from "./Providers";
import type { Metadata } from "next";

import Toaster from "@components/shadcn/Toaster/Toaster";
import "@styles/global.styles.css";

interface IRootLayout {
  children: React.ReactNode;
}

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
    <html lang="en">
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
