import React, { useState } from "react";
import img from "../assets/acrossthedark.png";
import play from "../assets/playMain.svg";
import pause from "../assets/pause.svg";
import backbtn from "../assets/back.svg";
import frontbtn from "../assets/front.svg";
const Controller = () => {
  const [isplaying, setIsplaying] = useState(false);
  return (
    <div className="rounded-md flex items-center justify-center lg:justify-between gap-6 ">
      <div className=" rounded-md p-2 hidden lg:flex gap-2">
        <img src={img} className="h-14 rounded-md " alt="background" />
        <div className="flex flex-col justify-end">
          <span className="font-circular">Equivalence</span>
          <span className="text-sm font-semibold">Insomnium</span>
        </div>
      </div>
      <div className="w-10/12 flex flex-col ">
        <div className="flex gap-6 p-2 items-center justify-center">
          <img src={backbtn} alt="back" className="active:scale-95" />
          <img
            src={isplaying ? pause : play}
            alt="play pause"
            className="active:scale-95"
            onClick={() => {
              setIsplaying((prevPlaying) => !prevPlaying);
            }}
          />
          <img src={frontbtn} alt="front" className="active:scale-95" />
        </div>
        <div className="flex gap-6  items-center justify-center">
          <input type="range" className="w-10/12" />
        </div>
      </div>
      <div className="hidden lg:block">volume contrls</div>
    </div>
  );
};

export default Controller;
