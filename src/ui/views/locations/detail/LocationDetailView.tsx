import Image from "next/image";
import { MapPin, Box, SquareUserRound } from "lucide-react";

const LocationDetailView = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen ">
      <div className="flex px-3 md:px-6 lg:px-50 py-10 w-full justify-between border-b border-green-300">
        <div className="flex flex-col gap-6">
          <Image
            src="/svg/Planet.svg"
            alt="location-card"
            width={100}
            height={100}
          />
          <h1 className="text-3xl lg:text-5xl font-bold">Location Name</h1>
          <div className="flex gap-6">
            <div className="flex text-lg items-center gap-2">
              <MapPin size={20} />
              <p className="text-gray-400">Planet</p>
            </div>
            <div className="flex items-center gap-2">
              <Box size={20} />
              <p className="text-gray-400">Dimension C-137</p>
            </div>
          </div>
          <div className="flex mb-8 text-md items-center gap-2">
            <SquareUserRound size={20} />
            <p className="text-gray-400">
              <span className="text-green-300">3</span> characters in this
              location
            </p>
          </div>
        </div>
        <Image
          src={`/img/planet-${Math.floor(Math.random() * 10) + 1}.png`}
          alt="Rick and Morty"
          width={300}
          height={300}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default LocationDetailView;
