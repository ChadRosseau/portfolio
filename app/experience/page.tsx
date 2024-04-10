'use client';
import clsx from "clsx";
import styles from "./experience.module.scss";
import GitNode from "./components/GitNode";
import { experiencesList } from "@/data/experience-lib";
import Branch from "./components/Branch";
import { useEffect, useRef, useState } from 'react';
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

const ExperiencePage = () => {
  const scrollRef = useRef<any>(null);
  const [scrollStarted, setScrollStarted] = useState(false);
  const [animCancelled, setAnimCancelled] = useState(false);

  useHorizontalScroll(scrollRef);

  useEffect(() => {
    let active = true;
    let anim: any;
    const keyDownHandler = (e: any) => {
      if (e.code == "Space" && scrollRef.current) {
        active = false;
        cancelAnimationFrame(anim);
        setAnimCancelled(true);
        setScrollStarted(true);
        document.removeEventListener("keydown", keyDownHandler);
      }
      setTimeout(() => scrollRef.current.scrollLeft = scrollRef.current.scrollWidth, 10);
    };

    const scrollToEnd = () => {
      const element = scrollRef.current;
      const delay = 2000;
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

        if (progress < 1 && active) {
          requestAnimationFrame(scrollAnimation);
        }
      };

      anim = scrollAnimation;

      setTimeout(() => {
        setScrollStarted(true);
        if (active) requestAnimationFrame(anim)
      }, delay);

      document.addEventListener("keydown", keyDownHandler);

    };

    scrollToEnd();

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const topRow = [];
  const bottomRow = [];

  for (let i = 0; i < experiencesList.length; i++) {
    if (i % 2) bottomRow.push(experiencesList[i]);
    else topRow.push(experiencesList[i]);
  }

  return <div className={clsx(styles.experienceScroller, scrollStarted ? "overflow-x-scroll" : "overflow-x-hidden", "ml-[5vw] w-[calc(100%-5vw)] h-screen overflow-y-hidden")} ref={scrollRef} >
    <div className={clsx(styles.experienceWrapper, !scrollStarted && "overflow-x-hidden", "h-screen overflow-y-hidden w-max relative px-20")}>
      {/* Beginning */}
      <div className="flex items-center absolute top-[calc(50%-2rem)] left-20">
        <GitNode relative />
        <div className={clsx(styles.branch, styles.bgGradient, "w-72 relative")}>
        </div>
        <p className={clsx(animCancelled && "hidden", styles.cancelAnimText, "absolute top-12 text-sm text-light left-0 pl-20 transition")}>Press space to skip animation</p>
      </div>
      <div className="ml-80 h-1/2 flex flex-nowrap">
        {topRow.map((experience, i) => {
          return <Branch experience={experience} key={experience.name} top={true} i={2 * i} final={experience == experiencesList[experiencesList.length - 1]} cancelled={animCancelled} />;
        })}
      </div>
      <div className="ml-[80em] h-1/2 flex flex-nowrap">
        {bottomRow.map((experience, i) => {
          return <Branch experience={experience} key={experience.name} top={false} i={2 * i + 1} final={experience == experiencesList[experiencesList.length - 1]} cancelled={animCancelled} />;
        })}
      </div>
    </div>
    <div className={styles.cover}></div>
  </div>
    ;
};

export default ExperiencePage;
