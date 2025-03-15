import Image from "next/image";
import {
  Activity,
  TvMinimalPlay,
  User,
  ListVideo,
  UserRound,
  Mars,
  Venus,
} from "lucide-react";

const CharacterDetailView = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen ">
      <div className="flex flex-col md:flex-row px-3 md:px-6 lg:px-50 py-10 items-center w-full justify-between border-b border-green-300">
        <div className="flex flex-col gap-6">
          <UserRound size={80} className="text-green-300" />
          <h1 className="text-3xl lg:text-5xl font-bold">Character Name</h1>
          <div className="flex gap-6">
            <div className="flex text-lg items-center gap-2">
              <Activity size={20} />
              <p className="text-gray-400">Alive</p>
            </div>
            <div className="flex items-center gap-2">
              <User size={20} />
              <p className="text-gray-400">Human</p>
            </div>
            <div className="flex items-center gap-2">
              <Mars size={20} />
              <p className="text-gray-400">Male</p>
            </div>
          </div>
          <div className="flex mb-8 text-md items-center gap-2">
            <TvMinimalPlay size={20} />
            <p className="text-gray-400">
              Appears in <span className="text-green-300">3</span> episodes
            </p>
          </div>
        </div>
        <Image
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick and Morty"
          width={400}
          height={400}
          className="h-[300px] w-[300px] object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default CharacterDetailView;
