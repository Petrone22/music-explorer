import React from "react";
import img from "../assets/acrossthedark.png";
const SongCard = () => {
  return (
    <div className="flex gap-2 hover:bg-neutral-700 w-full rounded-md cursor-pointer p-2 duration-200 ease-linear">
      <img src={img} className="h-14 rounded-md" alt="background" />
      <div className="flex flex-col">
        <span className="font-circular">Equivalence</span>
        <span className="font-sm">Insomnium</span>
      </div>
    </div>
  );
};

export default SongCard;
