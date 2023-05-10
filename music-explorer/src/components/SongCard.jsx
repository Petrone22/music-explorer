import React from "react";
import { useDispatch } from "react-redux";
import { changeTitle } from "../state/titleSlice";
import { changeSubTitle } from "../state/subTitleSlice";
import { changeSmallBG } from "../state/smallBGSlice";
import { changeBG } from "../state/playerBGSlice";
import { changeDescription } from "../state/descriptionSlice";
import { toggleMediaIsPlaying } from "../state/isPlayingSlice";
const SongCard = ({ audioRef, title, image, artist, bigImage, piece }) => {
  const dispatch = useDispatch();
  const startPlayingSong = () => {
    dispatch(changeTitle(title));
    dispatch(changeSubTitle(artist));
    dispatch(changeSmallBG(image));
    dispatch(changeBG(bigImage));
    dispatch(changeDescription(piece));
    dispatch(toggleMediaIsPlaying(true));
    let trackSRC = `./${title}.mp3`;
    audioRef.current.load();
    audioRef.current.src = trackSRC;
    audioRef.current.play();
  };
  return (
    <div
      className="flex gap-2 hover:bg-neutral-700 w-full rounded-md cursor-pointer p-2 duration-200 ease-linear"
      onClick={() => {
        startPlayingSong();
      }}
    >
      <img src={image} className="h-14 rounded-md" alt="background" />
      <div className="flex flex-col">
        <span className="font-semibold text-base">{title}</span>
        <span className="text-sm">{artist}</span>
      </div>
    </div>
  );
};

export default SongCard;
