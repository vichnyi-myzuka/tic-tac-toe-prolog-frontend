import styles from "./styles.module.sass";
import classNames from "classnames";
import { Button } from "@mui/material";

function BoardIntro({ action, active, animation }) {
  const classes = classNames(styles.wrapper, {
    [styles.active]: active,
    [styles.disappearing]: animation,
  });

  function handleStartButtonClick() {
    action("dual");
  }

  function handleAIButtonClick() {
    action("ai");
  }

  return (
    <div className={classes}>
      <h2 className={styles.greetings}>Hi! Push "Start"!</h2>
      <button className={styles.button} onClick={handleStartButtonClick}>
        START
      </button>
      <Button className={styles.aiButton} onClick={handleAIButtonClick}>
        I am strong enough to play with AI
      </Button>
    </div>
  );
}
export default BoardIntro;
