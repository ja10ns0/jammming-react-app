import React from "react";
import "./Track.css";

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  renderAction() {
    return this.isRemoval ? "-" : "+";
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }
  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  handleClick(event) {
    return this.isRemoval ? this.removeTrack() : this.addTrack();
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist | this.props.track.album}</p>
        </div>
        <button
          className="Track-action"
          onClick={this.handleClick}
        >
          {this.renderAction}
        </button>
      </div>
    );
  }
}
