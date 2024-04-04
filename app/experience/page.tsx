'use client';
import clsx from "clsx";
import styles from "./experience.module.scss";
import GitNode from "./components/GitNode";
import { experiencesList } from "@/data/experience-lib";
import Branch from "./components/Branch";
import { useEffect, useRef } from 'react';

const ExperiencePage = () => {
  const scrollRef = useRef<any>(null);

  const scrollToEnd = () => {
    const element = scrollRef.current;
    const delay = 3000;
    const duration = 15000; // Duration of scrolling animation in milliseconds
    const start = element.scrollLeft;
    const target = element.scrollWidth - element.clientWidth;
    const distance = target - start;
    const startTime = performance.now() + delay;
    const easeInOutQuad = (t: any) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const scrollAnimation = (currentTime: any) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      element.scrollLeft = start + distance * easeInOutQuad(progress);

      if (progress < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    };

    setTimeout(() => requestAnimationFrame(scrollAnimation), delay);
  };

  useEffect(() => scrollToEnd(), []);

  const topRow = [];
  const bottomRow = [];

  for (let i = 0; i < experiencesList.length; i++) {
    if (i % 2) bottomRow.push(experiencesList[i]);
    else topRow.push(experiencesList[i]);
  }

  return <div className={clsx(styles.experienceScroller, "overflow-x-scroll ml-[5vw] w-[calc(100%-5vw)] h-screen overflow-y-hidden")} ref={scrollRef} >
    <div className={clsx(styles.experienceWrapper, "h-screen w-max relative px-20")}>
      {/* Beginning */}
      <div className="flex items-center absolute top-[calc(50%-2rem)] left-20">
        <GitNode relative />
        <div className={clsx(styles.branch, styles.bgGradient, "w-72")}></div>
      </div>
      <div className="ml-80 h-1/2 flex flex-nowrap">
        {topRow.map((experience, i) => {
          return <Branch experience={experience} key={experience.name} top={true} i={2 * i} final={experience == experiencesList[experiencesList.length - 1]} />;
        })}
      </div>
      <div className="ml-[80em] h-1/2 flex flex-nowrap">
        {bottomRow.map((experience, i) => {
          return <Branch experience={experience} key={experience.name} top={false} i={2 * i + 1} final={experience == experiencesList[experiencesList.length - 1]} />;
        })}
      </div>
    </div>
    <div className={styles.cover}></div>
  </div>
    ;
};

export default ExperiencePage;
