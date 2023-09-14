"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Navbar from "@/components/navbar/navbar";
import StarBackground from "@/components/stars/stars";
import { useEffect, useState } from "react";
import Link from "next/link";

const Home = () => {
    const [title, setTitle] = useState<string>("");
    const [name, setName] = useState<string>("");

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const playNameAnimation = async () => {
        await sleep(1000);
        const intro1 = "Hi, I'm ";
        const intro2 = "Chad.";
        let play1 = "";
        let play2 = "";
        for (let i = 0; i < intro1.length; i++) {
            await sleep(100);
            play1 += intro1[i];
            setTitle(play1);
        }
        for (let i = 0; i < intro2.length; i++) {
            await sleep(100);
            play2 += intro2[i];
            setName(play2);
        }
    };

    useEffect(() => {
        const onPageLoad = () => {
            playNameAnimation();
        };

        // Check if the page has already loaded
        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener("load", onPageLoad);
        }
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.middle}>
                <div className={styles.textContainer}>
                    <h3>
                        {title}
                        <span>{name}</span>
                    </h3>
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
                        Navigate this website to explore my projects, my
                        experience, my expertise, and the ideas I&apos;m excited
                        about.
                    </p>
                </div>
                <img
                    className={styles.profileImage}
                    src="images/headshot.jpg"
                    alt="headshot"
                />
            </div>
            <div className={styles.buttonWrapper}>
                {[
                    //"experience",
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
                                <p>{`${
                                    target[0].toUpperCase() + target.slice(1)
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
