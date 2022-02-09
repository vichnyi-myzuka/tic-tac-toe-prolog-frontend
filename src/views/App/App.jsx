import Board from "../../components/Board";
import BoardIntro from "../../components/BoardIntro";
import { useEffect, useState } from "preact/compat";
import GamePanel from "../../components/GamePanel";
import CloseButton from "../../components/CloseButton";
import styles from "./styles.module.sass";
import { initGame, makeMove } from "../../api";
function App() {
  const defaultBoard = {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
  };

  const [activeIntro, setActiveIntro] = useState(true);
  const [players, setPlayers] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState({});
  const [positions, setPositions] = useState(defaultBoard);
  const [mode, setMode] = useState();
  const [introDisappearing, setIntroDisappearing] = useState(false);

  const first = {
    id: 1,
    name: "Yaroslav",
    symbol: "X",
  };
  const second = {
    id: 2,
    name: "Anatoliy",
    symbol: "O",
  };

  async function init() {
    const { players, currentPlayer, positions } = await initGame(mode);
    setPlayers(players);
    setCurrentPlayer(currentPlayer);
    setPositions(positions);
  }

  function updateBoard(nextPlayer, positions) {
    setCurrentPlayer(nextPlayer);
    setPositions(positions);
  }

  function goBack() {
    setActiveIntro(true);
  }

  function startGame(mode) {
    setIntroDisappearing(true);
    setTimeout(() => {
      init();
      setIntroDisappearing(false);
      setActiveIntro(false);
      setMode(mode);
    }, 300);
  }

  async function handleChoice(currentPlayer, id) {
    const { nextPlayer, positions } = await makeMove(currentPlayer, id);
    updateBoard(nextPlayer, positions);
  }

  return (
    <div className={"wrapper"}>
      <BoardIntro
        active={activeIntro}
        action={startGame}
        animation={introDisappearing}
      />
      <GamePanel players={players} currentPlayer={currentPlayer} />
      <div className={styles.closeButtonContainer}>
        <CloseButton action={goBack} />
      </div>
      <Board
        callback={handleChoice}
        currentPlayer={currentPlayer}
        positions={positions}
      />
    </div>
  );
}

export default App;
