import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      searchResults: [
        {
          name: "Track name 01",
          artist: "Track 01 artist",
          album: "Track 01 album",
          id: "Track_01_ID",
        },
        {
          name: "Track name 02",
          artist: "Track 02 artist",
          album: "Track 02 album",
          id: "Track_02_ID",
        },
        {
          name: "Track name 03",
          artist: "Track 03 artist",
          album: "Track 03 album",
          id: "Track_03_ID",
        },
      ],
      playlistName: "Chillout music",
      playlistTracks: [
        {
          name: "Track name 01",
          artist: "Track 01 artist",
          album: "Track 01 album",
          id: "Track_01_ID",
        },
        {
          name: "Track name 03",
          artist: "Track 03 artist",
          album: "Track 03 album",
          id: "Track_03_ID",
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatedPlaylistName = this.updatedPlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    }
    let updatedPlaylistTracks = this.state.playlistTracks.push(track);
    this.setState({ playlistTracks: updatedPlaylistTracks });
  }

  removeTrack(track) {
    let updatedPlaylistTracks = this.state.playlistTracks.filter(function (
      element
    ) {
      return element.id !== track.id;
    });
    this.setState({ playlistTracks: updatedPlaylistTracks });
  }

  updatedPlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks;
  }

  search(term) {
    Spotify.search(term).then((searchResults) => {
      this.setState({ searchResults: searchResults });
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              searchResults={this.state.searchResults}
            />
            <Playlist
              onNameChange={this.updatedPlaylistName}
              onRemove={this.removeTrack}
              onSave={this.savePlaylist}
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}
