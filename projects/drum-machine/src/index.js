import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const tracks = [
  {
    keyCode: 81,
    keyIndex: "Q",
    Desc: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyIndex: "W",
    Desc: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyIndex: "E",
    Desc: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyIndex: "A",
    Desc: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyIndex: "S",
    Desc: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyIndex: "D",
    Desc: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyIndex: "Z",
    Desc: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyIndex: "X",
    Desc: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyIndex: "C",
    Desc: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

class DrumPad extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.props.onKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.props.onKeyPress);
  }
  render() {
    const soundKey = this.props.index + "key";
    return (
      <button className="drum-pad" id={soundKey} onClick={this.props.onClick}>
        <audio
          className="clip"
          id={this.props.index}
          src={this.props.track}
        ></audio>
        {this.props.index}
      </button>
    );
  }
}

class Display extends React.Component {
  render() {
    return (
      <div id="display">
        <div id="track-desc">Now playing: {this.props.description}</div>
      </div>
    );
  }
}

class Drum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: null,
      desc: "press a key to play",
      tracklist: tracks
    };
    this.playTrack = this.playTrack.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  playTrack(index) {
    const curTrack = document.getElementById(index);
    this.setState({
      activeKey: index,
      desc: this.state.tracklist.find(x => x.keyIndex == index).Desc
    });
    curTrack.play();
  }
  handleKeyPress(e, keyCode) {
    if (e.keyCode == keyCode) {
      this.playTrack(
        this.state.tracklist.find(x => x.keyCode == e.keyCode).keyIndex
      );
    }
  }
  render() {
    return (
      <div id="drum-machine">
        <div id="pad-group">
          {this.state.tracklist.map(x => (
            <DrumPad
              index={x.keyIndex}
              onClick={() => this.playTrack(x.keyIndex)}
              onKeyPress={e => this.handleKeyPress(e, x.keyCode)}
              track={x.url}
            />
          ))}
        </div>
        <Display description={this.state.desc} />
      </div>
    );
  }
}

ReactDOM.render(<Drum />, document.getElementById("root"));
