import React from "react";
import BigSongCard from "./BigSongCard";
import data from "../assets/data";
const songList = ({ audioRef }) => {
  const dataArray = Object.entries(data);
  return (
    <div className="h-fit px-4 pt-2 flex flex-col ">
      <div className="h-14  rounded-md flex  justify-around   lg:items-center py-8 px-2 lg:p-8 mb-2">
        <div className="lg:w-2/3 flex gap-2 ">
          <div className="text-center w-1/3 font-circular">Title</div>
        </div>
        <div className="w-full lg:flex flex justify-around  ">
          <div className="font-medium  hidden lg:block text-start  ">Album</div>
          <div className="font-medium  hidden lg:block text-start w-36  ">
            Song type
          </div>
        </div>
        <span className="font-mono block w-28 text-end whitespace-nowrap ">
          Spotify link
        </span>
      </div>
      {dataArray.map((song, i) => {
        return (
          <BigSongCard
            audioRef={audioRef}
            key={i}
            title={song[1].title}
            artist={song[1].artist}
            image={song[1].smallImg}
            bigImage={song[1].bigImg}
            type={song[1].type}
            album={song[1].album}
            runtime={song[1].runtime}
            piece={song[1].piece}
            link={song[1].link}
          />
        );
      })}
    </div>
  );
};

export default songList;
