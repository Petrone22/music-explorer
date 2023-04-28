import React from "react";
import img from "../assets/acrossthedark.png";
import play from "../assets/playMain.svg";
import pause from "../assets/pause.svg";
import backbtn from "../assets/back.svg";
import frontbtn from "../assets/front.svg";
import volume from "../assets/volume.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMediaIsPlaying } from "../state/isPlayingSlice";

const Controller = () => {
  const mediaIsPlaying = useSelector((state) => state.mediaIsPlaying.value);
  const dispatch = useDispatch();

  return (
    <div className="rounded-md flex items-center mb-4 lg:justify-center gap-6 ">
      <div className=" rounded-md p-2 hidden lg:flex gap-2 items-center ">
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
            src={mediaIsPlaying ? pause : play}
            alt="play pause"
            className="active:scale-95 m-2"
            onClick={() => {
              dispatch(toggleMediaIsPlaying());
            }}
          />
          <img src={frontbtn} alt="front" className="active:scale-95" />
        </div>
        <div className="flex gap-6  items-center justify-center">
          <input type="range" className="w-10/12" />
        </div>
      </div>
      <div className="hidden lg:block  w-24">
        <div className=" w-full  flex gap-2 items-center">
          <img src={volume} alt="volume" className="cursor-pointer h-4" />
          <input
            type="range"
            className="w-full"
            min={0}
            max={1}
            step={0.1}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Controller;
