import React, { useRef } from "react";
import Player from "./Player.jsx";
import List from "./List";
import Controller from "./Controller.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleIntro } from "../state/introVisibleSlice.js";
import { changeRuntime } from "../state/runtimeSlice.js";
import { changeCurrentTime } from "../state/currentTimeSlice.js";
import Intro from "./Intro.jsx";
const Main = () => {
  const audioRef = useRef(null);
  const introVisible = useSelector((state) => state.introVisible.value);
  const current = useSelector((state) => state.currentTime.value);
  const dispatch = useDispatch();
  // let ready = audioRef.current.readyState;
  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <div className="bg-black h-full w-full flex flex-col gap-3 ">
      <div className="w-full flex gap-2 h-full pt-3 overflow-hidden">
        <div className="bg-black h-full w-1/5 rounded-md hidden lg:block overflow-hidden ">
          <List audioRef={audioRef} />
        </div>
        <Intro />
        <div className="bg-neutral-900 w-full rounded-md overflow-y-scroll">
          <Player audioRef={audioRef} />
        </div>
      </div>
      <div className="bg-neutral-900 h-fit  px-4">
        <audio
          src=""
          ref={audioRef}
          onTimeUpdate={(e) => {
            if (e.target.currentTime) {
              dispatch(changeCurrentTime(e.target.currentTime));
            } else {
              return;
            }
          }}
          crossOrigin="anonymous"
          preload="auto"
          onLoadedMetadata={(e) => {
            dispatch(changeRuntime(formatTime(e.target.duration)));
          }}
        ></audio>
        <Controller audioRef={audioRef} currentTime={current} />
      </div>
    </div>
  );
};

export default Main;
