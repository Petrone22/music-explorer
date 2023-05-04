// big bg, small bg, description, play song, page title, page subtitle

import React, { useRef, useCallback } from "react";
import play from "../assets/playMain.svg";
import pause from "../assets/pause.svg";
import backbtn from "../assets/back.svg";
import frontbtn from "../assets/front.svg";
import volume from "../assets/volume.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMediaIsPlaying } from "../state/isPlayingSlice";

const Controller = ({ audioRef, currentTime }) => {
  const title = useSelector((state) => state.title.value);
  const subTitle = useSelector((state) => state.subTitle.value);
  const mediaIsPlaying = useSelector((state) => state.mediaIsPlaying.value);
  const smallBG = useSelector((state) => state.smallBG.value);
  const runtime = useSelector((state) => state.runtime.value);
  const dispatch = useDispatch();
  const playAnimationRef = useRef();
  const progressBarRef = useRef();
  console.log(currentTime);
  return (
    <div
      className="rounded-md flex items-center justify- mb-4 lg:justify-center gap-6"
      style={{
        pointerEvents: title === "Music Explorer" ? "none" : "auto",
        opacity: title === "Music Explorer" ? "0.4" : "1",
      }}
    >
      <div className=" rounded-md p-2 top-4 lg:flex gap-2 items-center ">
        <img src={smallBG} className="w-14 rounded-md " alt="background" />
        <div className="flex flex-col justify-end">
          <span className="hidden lg:block font-circular">{title}</span>
          <span className="hidden lg:block whitespace-nowrap font-semibold">
            {subTitle}
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col ">
        <div className="flex gap-6 p-2 items-center justify-center">
          <img src={backbtn} alt="back" className="active:scale-95" />

          <img
            src={mediaIsPlaying ? pause : play}
            alt="play pause"
            className="active:scale-95 m-2"
            onClick={() => {
              {
                mediaIsPlaying
                  ? audioRef.current.pause()
                  : audioRef.current.play();
              }
              mediaIsPlaying
                ? dispatch(toggleMediaIsPlaying(false))
                : dispatch(toggleMediaIsPlaying(true));
            }}
          />
          <img
            src={frontbtn}
            alt="front"
            className="active:scale-95"
            onClick={() => {}}
          />
        </div>
        <div className="flex gap-6  items-center justify-center relative">
          <input
            type="range"
            className="w-10/12"
            max={audioRef.current ? audioRef.current.duration : "0"}
            step={1}
            value={audioRef.current ? audioRef.current.currentTime : "0"}
            onChange={(e) => {
              audioRef.current.currentTime = e.target.value;
            }}
          />
          <span className="absolute font-thin text-md -right-3 lg:font-normal lg:text-base lg:right-8 ">
            {runtime}
          </span>
          <span className="absolute font-thin text-md left-0 lg:font-normal lg:text-base lg:left-14 ">
            0
          </span>
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
              audioRef.current.volume = e.target.value;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Controller;
