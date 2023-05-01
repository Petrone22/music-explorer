import React, { useState } from "react";
import spotify from "../assets/spotify.svg";
import playBtn from "../assets/play.svg";
import { useDispatch } from "react-redux";
import { changeBG } from "../state/playerBGSlice";
import { changeSmallBG } from "../state/smallBGSlice";
import { changeSubTitle } from "../state/subTitleSlice";
import { changeTitle } from "../state/titleSlice";
import { changeRuntime } from "../state/runtimeSlice";
import { changeDescription } from "../state/descriptionSlice";
const BigSongCard = ({
  title,
  image,
  artist,
  type,
  album,
  runtime,
  bigImage,
}) => {
  const dispatch = useDispatch();

  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="h-14 hover:bg-neutral-700 duration-100 ease-linear rounded-md flex items-around lg:items-center p-8 cursor-pointer"
      onMouseEnter={() => {
        setHovered((prevHover) => true);
      }}
      onMouseLeave={() => {
        setHovered((prevHover) => false);
      }}
      onClick={() => {
        dispatch(changeTitle(title));
        dispatch(changeSubTitle(artist));
        dispatch(changeSmallBG(image));
        dispatch(changeBG(bigImage));
        dispatch(changeRuntime(runtime));
        dispatch(changeDescription(artist));
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
        <img src={image} className="h-12" alt="Background" />
        <div className="flex flex-col h-full">
          <span className="font-circular">{title}</span>
          <span className="font-semibold">{artist}</span>
        </div>
      </div>
      <div className="w-full grid grid-flow-col  place-items-end lg:gap-4 lg:grid-cols-4">
        <div className="font-medium  hidden lg:block ">{album}</div>
        <div className="font-medium  hidden lg:block ">{type}</div>
        <span className="font-mono">{runtime}</span>
        <a target="_blank" href="https://www.spotify.com">
          <img src={spotify} alt="Song Link" />
        </a>
      </div>
    </div>
  );
};

export default BigSongCard;
