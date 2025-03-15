import Image from "next/image";
import {
  TvMinimalPlay,
  Calendar1,
  ListVideo,
  SquareUserRound,
} from "lucide-react";

const EpisodeDetailView = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen ">
      <div className="flex px-3 md:px-6 lg:px-50 pt-10 w-full justify-between border-b border-green-300">
        <div className="flex flex-col gap-6">
          <TvMinimalPlay size={80} className="text-green-300" />
          <h1 className="text-3xl lg:text-5xl font-bold">Episode Name</h1>
          <div className="flex gap-6">
            <div className="flex text-lg items-center gap-2">
              <Calendar1 size={20} />
              <p className="text-gray-400">January 13, 2014</p>
            </div>
            <div className="flex items-center gap-2">
              <ListVideo size={20} />
              <p className="text-gray-400">S01E01</p>
            </div>
          </div>
          <div className="flex mb-8 text-md items-center gap-2">
            <SquareUserRound size={20} />
            <p className="text-gray-400">
              <span className="text-green-300">3</span> characters in this
              episode
            </p>
          </div>
        </div>
        <Image
          src="/img/episode-img.png"
          alt="Rick and Morty"
          width={400}
          height={400}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default EpisodeDetailView;
