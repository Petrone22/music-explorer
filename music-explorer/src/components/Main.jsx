import React, { useRef } from "react";
import Player from "./Player.jsx";
import List from "./List";
import Controller from "./Controller.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleIntro } from "../state/introVisibleSlice.js";
import { changeRuntime } from "../state/runtimeSlice.js";
import { changeCurrentTime } from "../state/currentTimeSlice.js";
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
          <List />
        </div>
        <div className="bg-neutral-900 w-full rounded-md overflow-y-scroll">
          <div
            className="h-full w-full flex flex-col gap-16 items-center justify-center "
            style={{ display: introVisible ? "flex" : "none" }}
          >
            <p className="w-10/12 p-10 bg-neutral-950 rounded-lg text-center font-semibold">
              In this Application, you'll get a glimpse of my music taste, this
              means that this application may be divisive and that you may or
              may not find whatever type of music that suits you. but I assure
              you that for me, these 40-some hand picked songs are pretty much
              the best that the music world has to offer. each song has had its
              own story and imact on my life, one way or another, I also made
              sure to write a small piece on each of these songs so you can
              appreciate every element of the genius behind these pieces of art.{" "}
              <br /> So, sit back, relax and let me take you on a journey
              through emotion and artistic beauty.
            </p>
            <button
              onClick={() => {
                dispatch(toggleIntro());
              }}
              className=" border-2 bg-neutral-950 border-neutral-600 px-10 py-5 rounded-md hover:bg-neutral-800 duration-300 ease-linear "
            >
              Explore
            </button>
          </div>
          <Player audioRef={audioRef} />
        </div>
      </div>
      <div className="bg-neutral-900 h-24 px-4">
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
