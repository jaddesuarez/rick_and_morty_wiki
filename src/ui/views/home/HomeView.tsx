"use client";

import { Button } from "@components/shadcn/Button/Button";
import { useRouter } from "next/navigation";
import { URLS } from "@consts/enum";
import Image from "next/image";

const HomeView = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:h-screen gap-8 lg:gap-26">
      <div className="flex flex-col items-center md:items-start gap-4 px-10">
        <Image
          src="/img/Rick-And-Morty-Logo.png"
          alt="Home"
          width={600}
          height={50}
        />
        <div className="flex flex-col gap-8 lg:gap-0">
          <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left uppercase">
            Everything you <span className="text-green-300">need</span>
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left uppercase">
            In just one <span className="text-green-300">place</span>
          </h1>
        </div>
        <Button
          size="xl"
          onClick={() => router.push(URLS.EPISODES)}
          className="bg-green-300 text-black font-bold mt-8"
        >
          Explore Now
        </Button>
      </div>
      <Image
        src="/img/rick-home.png"
        alt="Home"
        width={400}
        height={100}
        className="w-[250px] md:w-[400px]"
      />
    </div>
  );
};

export default HomeView;
