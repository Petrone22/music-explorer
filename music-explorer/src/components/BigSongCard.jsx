import React, { useState } from "react";
import img from "../assets/acrossthedark.png";
import spotify from "../assets/spotify.svg";
import playBtn from "../assets/play.svg";
const BigSongCard = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="h-14 hover:bg-neutral-800 duration-100 ease-linear rounded-md flex items-center p-8 cursor-pointer"
      onMouseEnter={() => {
        setHovered((prevHover) => true);
      }}
      onMouseLeave={() => {
        setHovered((prevHover) => false);
      }}
    >
      <img
        src={playBtn}
        alt="play"
        className="mr-4 hidden lg:block"
        style={{
          opacity: hovered ? "1" : "0",
        }}
      />
      <div className="w-2/3 flex gap-2 ">
        <img src={img} className="h-12" alt="Background" />
        <div className="flex flex-col h-full">
          <span className="font-circular">Equivalence</span>
          <span className="font-semibold">Insomnium</span>
        </div>
      </div>
      <div className="w-full flex gap-4 justify-end lg:justify-between">
        <span className="font-medium hidden lg:block">Across The Dark</span>
        <span className="font-medium hidden lg:block">Melancholic</span>
        <span className="font-mono">3:28</span>
        <a target="_blank" href="https://www.spotify.com">
          <img src={spotify} alt="Song Link" />
        </a>
      </div>
    </div>
  );
};

export default BigSongCard;
