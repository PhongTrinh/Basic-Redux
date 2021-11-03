// we import the connect function that will wrap our SongList.js component.
// With connect we will actually be able to access our state as props.
import React from "react";
import { connect } from "react-redux";
import { addSong, removeSong } from "../../actions/songActions";

class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newSong: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.remove = this.remove.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const addedSong = {
      title: this.state.newSong,
    };

    // We dispatch an action with our newSong as a parameter
    this.props.addSong(addedSong);
  }

  onChange(e) {
    console.log("onChangeValue" + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  remove(i) {
    this.props.removeSong(i);
  }

  render() {
    const { songs } = this.props.songs;
    return (
      <ul>
        {songs.map((song, i) => {
          return (
            <li key={"song_" + i}>
              {song.title}
              <button onClick={() => this.remove(i)}>Delete</button>
            </li>
          );
        })}
        <form onSubmit={this.onSubmit}>
          <input type="text" name="newSong" onChange={this.onChange} />
          <input type="submit" value="Add Song" />
        </form>
      </ul>
    );
  }
}

// mapStateToProps provide us with the store. Every time the state changes this function will be called
const mapStateToProps = (state) => ({
  songs: state.songs,
});

// mapDispatchToProps will provide us with the actions we need to use in our component
// so we can dispatch them and change our state.
const mapDispatchToProps = {
  addSong,
  removeSong,
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
