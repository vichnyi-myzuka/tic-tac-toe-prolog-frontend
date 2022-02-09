import styles from "./styles.module.sass";
function CloseButton({ action }) {
  return (
    <img
      className={styles.button}
      src="/src/public/cross.svg"
      onClick={action}
    />
  );
}
export default CloseButton;
