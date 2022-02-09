import styles from "./styles.module.sass";
import Square from "../Square";
function Board({ currentPlayer, callback, positions }) {
  function checkSquare(id) {
    if (callback) {
      callback(currentPlayer, id);
    }
  }

  function generateSquares() {
    const squares = [];
    for (let i = 1; i <= 9; i++) {
      const position = positions[i];
      if (!position) {
        squares.push(<Square id={i} action={checkSquare} />);
      } else {
        squares.push(
          <Square id={i} action={checkSquare} checked={position.symbol} />
        );
      }
    }
    return squares;
  }

  return <div className={styles.board}>{generateSquares()}</div>;
}

export default Board;
