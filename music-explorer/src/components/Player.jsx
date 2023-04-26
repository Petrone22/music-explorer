import React, { useState } from "react";
import disc from "../assets/disc.jpg";
import SongList from "./SongList";
import SongDesc from "./SongDesc";
const player = () => {
  const [page, setPage] = useState(0);
  const pageDisplay = () => {
    if (page === 0) {
      return <SongList />;
    } else {
      return <SongDesc />;
    }
  };
  return (
    <>
      <div className="w-full h-fit rounded-md py-10  px-16 bg-gradient-to-b from-neutral-600 to-neutral-900 ">
        <div className=" h-fit w-full flex items -center  flex-col items-center lg:flex-row gap-28">
          <img
            src={disc}
            alt="bakground"
            className="w-300 h-300 rounded-full"
          />
          <div className="w-full flex flex-col ">
            <span className="font-bold text-7xl mb-8 text-center lg:text-start lg:mb-0">
              Music Explorer
            </span>
            <span className="font-bold text-2xl text-center lg:text-start">
              click a song to play it
            </span>
          </div>
        </div>
      </div>
      <div className=" h-fit flex items-center justify-center gap-8 lg:justify-around border-b-4 border-black pb-8">
        <button
          onClick={() => {
            setPage((prevPage) => 0);
          }}
          className="border-2 bg-neutral-950 border-neutral-600 px-10 py-3 rounded-md hover:bg-neutral-800 duration-300 ease-linear  font-circular"
        >
          Song List
        </button>
        <button
          onClick={() => {
            setPage((prevPage) => 1);
          }}
          className="border-2 bg-neutral-950 border-neutral-600 px-6 py-3 rounded-md hover:bg-neutral-800 duration-300 ease-linear  font-circular"
        >
          Song Description
        </button>
      </div>

      {pageDisplay()}
    </>
  );
};

export default player;
