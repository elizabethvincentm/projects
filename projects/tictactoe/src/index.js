import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Square = props => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNo: 0,
      XIsNext: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNo + 1);
    const latest = history[history.length - 1];

    const squares = [...latest.squares];
    if (findWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.XIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares }]),
      stepNo: history.length,
      XIsNext: !this.state.XIsNext
    });
  }
  jumpTo(step) {
    this.setState({
      stepNo: step,
      XIsNext: step % 2 === 0
    });
  }
  render() {
    const history = this.state.history;
    const latest = history[this.state.stepNo];
    let winner = findWinner(latest.squares);
    let status;
    if (winner) status = "Winner: " + winner;
    else if (latest.squares.reduce((full, sq) => sq && full, true)) {
      status = "Draw!!";
    } else status = "Next player: " + (this.state.XIsNext ? "X" : "O");
    const pastMoves = history.map((step, move) => {
      if (move > this.state.stepNo) {
        return;
      }
      let text = move ? "Jump to move #" + move : "Jump to Game Start";
      return (
        <li key={move}>
          {" "}
          <button class="button" onClick={() => this.jumpTo(move)}>
            {text}
          </button>
        </li>
      );
    });
    return (
      <div className="game">
        <div className="gameboard">
          <Board squares={latest.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div class="status">{status}</div>
          <ol>{pastMoves}</ol>
        </div>
      </div>
    );
  }
}
const findWinner = squares => {
  const strokes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < strokes.length; ++i) {
    const [a, b, c] = strokes[i];
    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c])
      return squares[a];
  }

  return null;
};
ReactDOM.render(<Game />, document.getElementById("root"));
