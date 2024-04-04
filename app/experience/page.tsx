import clsx from "clsx";
import styles from "./experience.module.scss";
import GitNode from "./components/GitNode";

const ExperiencePage = () => {
  return <div className={clsx(styles.wrapper, "ml-[5vw] h-screen overflow-scroll relative pl-20")}>
    <div className="flex items-center absolute top-[calc(50%-2rem)] left-20">
      <GitNode relative />
      <div className={clsx(styles.branch, styles.bgGradient, "w-[1000px]")}></div>
      <GitNode relative />
      <div className={styles.cover}></div>
    </div>
    <div className={clsx(styles.box, "h-1/2 border border-light w-80 relative ml-80 box-border")}>
      <GitNode className="absolute -bottom-8 -left-8" />
      <div className={clsx(styles.lClip, styles.bgGradient, "absolute bottom-2 left-0")}>
      </div>
      <GitNode className={clsx(styles.node, styles.lNode, "absolute -top-8")} />
    </div>
  </div>;
};

export default ExperiencePage;
