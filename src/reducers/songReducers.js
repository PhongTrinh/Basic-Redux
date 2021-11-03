//In our songReducers.js file
// We set our initial state and pass it in our reducer function.
// In the switch statement we are going to listen for an action.
// If none is provided or called we are going to set it to return the state by default
import { ADD_SONG, DELETE_SONG } from "../actions/types";

const initialState = {
  songs: [
    { title: "I love redux" },
    { title: "The redux song" },
    { title: "Run to the redux hill" },
  ],
};

export default function songReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_SONG:
      return {
        // the action.payload is the song parameter we passed in addSong function
        songs: [action.payload, ...state.songs],
      };
    case DELETE_SONG:
      return {
        songs: state.songs.filter((s, i) => i !== action.payload),
      };
    default:
      return state;
  }
}
