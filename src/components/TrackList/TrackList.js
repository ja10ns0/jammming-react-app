import React from "react";
import "./TrackList.css";

import { Track } from "../Track/Track";

export class TrackList extends React.Component {
  render() {
    let trackList = this.props.tracks.map((track) => (
      <Track
        isRemoval={this.props.isRemoval}
        onRemove={this.props.onRemove}
        onAdd={this.props.onAdd}
        key={track.id}
        track={track}
      />
    ));
    return <div className="TrackList">{trackList}</div>;
  }
}
