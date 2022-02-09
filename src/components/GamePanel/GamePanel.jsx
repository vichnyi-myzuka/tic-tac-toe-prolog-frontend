import styles from "./styles.module.sass";
import classNames from "classnames";

function GamePanel({ players, currentPlayer }) {
  const classes = classNames(styles.gamePanel, {
    [styles.first]: currentPlayer.id === 1,
    [styles.second]: currentPlayer.id === 2,
  });

  return (
    <div className={classes}>
      <label className={styles.label}>
        {players.first?.name + " " + players.first?.symbol || ""}
      </label>
      <label className={styles.label}>
        {players.second?.name + " " + players.second?.symbol || ""}
      </label>
    </div>
  );
}
export default GamePanel;
