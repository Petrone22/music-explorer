import React from "react";
import spotify from "../assets/spotify.svg";
import pfp from "../assets/pfp.jpg";
import SongCard from "./SongCard";
const List = () => {
  return (
    <div className="h-full w-full flex justify-center  overflow-hidden">
      <div className="w-full rounded-md flex flex-col overflow-hidden">
        <div className="h-1/5 flex rounded-md flex-col gap-2 overflow-hidden ">
          <div className="h-2/5 rounded-md px-2 flex items-center w-full  hover:bg-neutral-700  duration-200 ease-linear cursor-pointer bg-neutral-900">
            <img src={spotify} alt="Spotify" className="mr-2" />
            <span className="">
              <a
                href="https://open.spotify.com/playlist/42qK7lDngpG60dBt80rxbC?si=b562c55f261e4531"
                target="_blank"
                className="font-sans font-bold"
              >
                Playlist on Spotify
              </a>
            </span>
          </div>
          <div className="h-2/5 rounded-md px-2 flex items-center w-full hover:bg-neutral-700 duration-200 ease-linear cursor-pointer bg-neutral-900">
            <img
              src={pfp}
              alt="Spotify"
              className="mr-2 rounded-full"
              style={{
                height: "27px",
                wdith: "27px",
              }}
            />
            <span className="">
              <a
                target="_blank"
                href="https://open.spotify.com/user/txqwieghckaljeyb6uomvmq7j?si=8ce0323dd8ad4253"
                className="font-sans font-bold"
              >
                My spotify account
              </a>
            </span>
          </div>
        </div>
        <div className="flex-1 bg-neutral-900 w-full rounded-md flex flex-col px-2 items-center py-2 gap-2 overflow-y-scroll">
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
        </div>
      </div>
    </div>
  );
};

export default List;
