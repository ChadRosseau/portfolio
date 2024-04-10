"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import AnimatedName from "@/components/AnimatedName";

const Home = () => {

  return (
    <main className={styles.main}>
      <div className={styles.middle}>
        <div className={styles.textContainer}>
          <AnimatedName />
          <p>
            A second-year Computer Science student at the University
            of Toronto, I spend my free time developing real-world
            applications that serve a purpose.
          </p>
          <p>
            I&apos;ve spent almost a decade honing my programming
            skills, with a focus on fullstack web development,
            automation, and bringing innovative ideas to life.
          </p>
          <p>
            Navigate this website to explore my experience, my
            projects, my expertise, and the ideas I&apos;m excited
            about.
          </p>
        </div>
        <div className={styles.profileImage}>
          <Image
            src="/images/headshot.jpg"
            alt="headshot"
            fill
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        {[
          "experience",
          "projects",
          "skills",
          "resume",
          //"contact"
        ].map((target: string, i: number) => {
          return (
            <Link
              href={`/${target}`}
              className={styles.navButton}
              key={i}
            >
              <div
                style={{
                  animationDelay: `${i * 0.25 + 7}s`,
                }}
              >
                <p>{`${target[0].toUpperCase() + target.slice(1)
                  }`}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
