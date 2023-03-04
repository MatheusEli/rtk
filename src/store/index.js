import { configureStore } from "@reduxjs/toolkit";
import { addMovie, moviesReducer, removeMovie } from "./slices/moviesSlice";
import { addSong, removeSong, songsReducer } from "./slices/songsSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };
