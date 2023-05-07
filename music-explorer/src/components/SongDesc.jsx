import React from "react";
import BigSongCard from "./BigSongCard";
import { useSelector } from "react-redux";
const SongDesc = () => {
  const description = useSelector((state) => state.description.value);
  return (
    <div className=" w-full h-full bg-neutral-900 ">
      <p className=" p-10 rounded-lg text-center ">{description}</p>
    </div>
  );
};

export default SongDesc;
