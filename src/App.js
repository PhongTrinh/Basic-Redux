import React from "react";
import "./App.scss";

// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";

// Components
import SongList from "./components/songList/SongList";

// Set my store
let store = createStore(allReducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Songs(Hello world with the help of Redux)</h1>
        <SongList />
      </div>
    </Provider>
  );
}

export default App;
