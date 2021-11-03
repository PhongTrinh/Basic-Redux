import { ADD_SONG, DELETE_SONG } from "./types";

export const addSong = (song) => {
  return {
    type: ADD_SONG,
    payload: song,
  };
};

export const removeSong = (index) => {
  return {
    type: DELETE_SONG,
    payload: index,
  };
};
