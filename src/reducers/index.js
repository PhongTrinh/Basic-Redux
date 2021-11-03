// We import all our applications reducers
// and pass them to a function named combineReducers.
// And it does what the name implies.
// Combines all of our reducers in one and that is what is passed in the createStore function in App.js

import { combineReducers } from "redux";
import songReducers from "./songReducers";

const allReducers = combineReducers({
  songs: songReducers,
});

export default allReducers;
