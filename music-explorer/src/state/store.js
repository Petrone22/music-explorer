import { configureStore } from "@reduxjs/toolkit";

//IMPORT media playing slice
import isPlayingSliceReducer from "./isPlayingSlice";

//IMPORT media intro visible slice
import introVisibleSliceReducer from "./introVisibleSlice";

export default configureStore({
  reducer: {
    mediaIsPlaying: isPlayingSliceReducer,
    introVisible: introVisibleSliceReducer,
  },
});
