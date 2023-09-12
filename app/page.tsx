import Image from "next/image";
import styles from "./page.module.scss";
import Navbar from "@/components/navbar/navbar";
import StarBackground from "@/components/stars/stars";

const Home = () => {
    return (
        <main className={styles.main}>
            <div className={styles.middle}>
                <div className={styles.textContainer}>
                    <h3>Hi, I'm Chad.</h3>
                    <p>
                        A second-year Computer Science student at the University
                        of Toronto, I spend my free time developing real-world
                        applications that serve a purpose.
                    </p>
                    <p>
                        I've spent almost a decade honing my programming skills,
                        with a focus on fullstack web development, automation,
                        and bringing innovative ideas to life.
                    </p>
                    <p>
                        Navigate this website to explore my projects, my
                        experience, my expertise, and the ideas I'm excited
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
                <button>Experience</button>
                <button>Projects</button>
                <button>Skills</button>
                <button>Resumé</button>
            </div>
        </main>
    );
};

export default Home;
