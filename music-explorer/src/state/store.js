import { configureStore } from "@reduxjs/toolkit";

//IMPORT media playing slice
import isPlayingSliceReducer from "./isPlayingSlice";

//IMPORT media intro visible slice
import introVisibleSliceReducer from "./introVisibleSlice";

//IMPORT player bg
import playerBGSliceReducer from "./playerBGSlice";

//IMPORT small bg
import smallBGSliceReducer from "./smallBGSlice";

//IMPORT title slice
import titleSliceReducer from "./titleSlice";

//IMPORT subtitle Slice
import subTitleSliceReducer from "./subTitleSlice";

//IMPORT description paragraph
import descriptionSliceReducer from "./descriptionSlice";

//IMPORT runtime displare
import runtimeSliceReducer from "./runtimeSlice";
export default configureStore({
  reducer: {
    mediaIsPlaying: isPlayingSliceReducer,
    introVisible: introVisibleSliceReducer,
    playerBG: playerBGSliceReducer,
    smallBG: smallBGSliceReducer,
    title: titleSliceReducer,
    subTitle: subTitleSliceReducer,
    description: descriptionSliceReducer,
    runtime: runtimeSliceReducer,
  },
});
