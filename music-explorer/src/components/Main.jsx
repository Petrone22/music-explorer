import React from "react";
import Player from "./Player.jsx";
import List from "./List";
import Controller from "./Controller.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleIntro } from "../state/introVisibleSlice.js";

const Main = () => {
  const introVisible = useSelector((state) => state.introVisible.value);
  const dispatch = useDispatch();

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
            <p className="w-10/12 p-10 bg-neutral-950 rounded-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              fuga aliquam id quos at voluptatibus molestiae cumque. Veritatis,
              placeat autem ipsam debitis, perspiciatis, sequi deleniti sint
              fugit at quae excepturi facilis incidunt porro cum? Dolor, vitae.
              Iure nemo deserunt atque?sadsa sadsaodnas
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
          <Player />
        </div>
      </div>
      <div className="bg-neutral-900 h-24 px-4">
        <Controller />
      </div>
    </div>
  );
};

export default Main;
