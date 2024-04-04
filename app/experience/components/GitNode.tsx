import clsx from "clsx";
import styles from "../experience.module.scss";
import { FC } from "react";

const GitNode: FC<{ className?: string, relative?: boolean }> = ({ className, relative }) => {
  return <div className={clsx(className, styles.node, styles.bgGradient, relative ? "relative" : "absolute")}>
    <div className={styles.innerNode}></div>
  </div>
}

export default GitNode;
