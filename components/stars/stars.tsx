import styles from "./stars.module.sass";

const StarBackground = () => {
  return (
    <div id={styles.background}>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>
    </div>
  );
};

export default StarBackground;
