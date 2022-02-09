import styles from "./styles.module.sass";
import classNames from "classnames";

function Square({ checked, action, id }) {
  function getMark() {
    if (!checked) {
      return <></>;
    }
    switch (checked) {
      case "X":
        return "X";
        break;
      case "O":
        return "O";
        break;
      default:
        return "?";
    }
  }

  function handleClick() {
    if (!checked) {
      action(id);
    }
  }
  const classes = classNames(styles.square, { [styles.checked]: checked });
  return (
    <div className={classes} onClick={handleClick}>
      {getMark()}
    </div>
  );
}
export default Square;
