import React from "react";
import BigSongCard from "./BigSongCard";
import data from "../assets/data";
const songList = () => {
  const dataArray = Object.entries(data);
  return (
    <div className="h-fit px-4 pt-2 flex flex-col ">
      <div className="h-14  rounded-md flex  justify-between  lg:items-center p-8 mb-2">
        <div className="lg:w-2/3 flex gap-2 ">
          <div className="text-center w-1/3 font-circular">Title</div>
        </div>
        <div className="w-2/5 lg:w-full lg:grid lg:grid-flow-col  lg:place-items-end gap-4 lg:grid-cols-4">
          <div className="font-medium  hidden lg:block ">Album</div>
          <div className="font-medium  hidden lg:block ">Song type</div>
          <span className="font-mono">duration</span>
        </div>
      </div>
      {dataArray.map((song, i) => {
        return (
          <BigSongCard
            key={i}
            title={song[1].title}
            artist={song[1].artist}
            image={song[1].smallImg}
            bigImage={song[1].bigImg}
            type={song[1].type}
            album={song[1].album}
            runtime={song[1].runtime}
          />
        );
      })}
    </div>
  );
};

export default songList;
