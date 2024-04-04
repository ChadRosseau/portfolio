
import clsx from "clsx";
import styles from "../experience.module.scss";
import { FC } from "react";
import GitNode from "./GitNode";
import { Experience } from "@/data/experience-lib";
import Image from "next/image";
import ContentBox from "./ContentBox";

const BottomBranch: FC<{ experience: Experience, final?: boolean }> = ({ experience, final }) => {

  return <div className={clsx(styles.box, !final && "mr-[25rem]", "h-full relative py-5 box-border")}>
    {/* Nodes */}
    <GitNode className="absolute -top-8 -left-8" />
    <GitNode className={clsx(styles.node, styles.lNode, "absolute -bottom-8")} />
    <GitNode className={clsx(styles.node, styles.rNode, "absolute -bottom-8")} />
    <GitNode className={clsx((!final && !experience.endDate) && "hidden", "absolute -top-8 -right-8")} />

    {/* Branches */}
    <div className={clsx(styles.clip, styles.rClip, styles.bgGradient, "absolute top-2 left-1")}>
    </div>
    <div className={clsx(styles.branch, styles.top, styles.bgGradient, "-mt-[calc(0.625rem)] -bottom-2")}></div>
    <div className={clsx(styles.clip, styles.lClip, styles.bgGradient, !experience.endDate && "hidden", "absolute top-2 right-1")}>
    </div>
    <div className={clsx(styles.branch, styles.bottom, styles.bgGradient, "left-0 w-[100%] -top-[0.625rem]")}></div>

    {/* Content */}
    <ContentBox experience={experience} />
    <div className="-mb-24 mt-11 w-full flex px-3">
      <div className={clsx(experience.customLogoWidth ? experience.customLogoWidth : "w-12", "h-12 relative mr-4")}>
        <Image src={experience.logo_url} fill alt="hi" />
      </div>
      <h3 className="m-0 text-5xl font-medium">{experience.name}</h3>
    </div>
  </div>
}

export default BottomBranch;
