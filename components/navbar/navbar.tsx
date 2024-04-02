"use client";

import {
  Home,
  Command,
  FolderGit2,
  CalendarClock,
  UserSquare,
} from "lucide-react";
import styles from "./navbar.module.scss";
import variables from "../../app/variables.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.nav}>
      <div className="w-[3.3rem] h-[3.3rem] relative mb-5">
        <Image
          src="/images/logo.png"
          alt=""
          className={styles.logo}
          fill
        />
      </div>
      <Link href="/">
        <div
          className={`${styles.button} ${pathname == "/" ? styles.active : ""}`}
        >
          <Home
            className={styles.icon}
            size="3.3rem"
            strokeWidth={1}
            stroke={pathname == "/" ? "#00ffbb" : "#FFF"}
          />
          <p>Home</p>
        </div>
      </Link>
      {/* <Link href="/experience"> */}
      <Link href="/construction">
        <div
          className={`${styles.button} ${pathname == "/experience" ? styles.active : ""
            }`}
        >
          <CalendarClock
            className={styles.icon}
            size="3.3rem"
            strokeWidth={1}
            stroke={pathname == "/experience" ? "#00ffbb" : "#FFF"}
          />
          <p>Experience</p>
        </div>
      </Link>
      <Link href="/projects">
        <div
          className={`${styles.button} ${pathname == "/projects" ? styles.active : ""
            }`}
        >
          <FolderGit2
            className={styles.icon}
            size="3.3rem"
            strokeWidth={1}
            stroke={pathname == "/projects" ? "#00ffbb" : "#FFF"}
          />
          <p>Projects</p>
        </div>
      </Link>
      <Link href="/skills">
        <div
          className={`${styles.button} ${pathname == "/skills" ? styles.active : ""
            }`}
        >
          <Command
            className={styles.icon}
            size="3.3rem"
            strokeWidth={1}
            stroke={pathname == "/skills" ? "#00ffbb" : "#FFF"}
          />
          <p>Skills</p>
        </div>
      </Link>
      {/* <Link href="/about"> */}
      <Link href="/construction">
        <div
          className={`${styles.button} ${pathname == "/about" ? styles.active : ""
            }`}
        >
          <UserSquare
            className={styles.icon}
            size="3.3rem"
            strokeWidth={1}
            stroke={pathname == "/about" ? "#00ffbb" : "#FFF"}
          />
          <p>About Me</p>
        </div>
      </Link>
      <div className={styles.pageLabelWrapper}>
        <p className="textGradient">
          {pathname == "/"
            ? "Home"
            : pathname.split('/')[1] == "project" ? "Project" : pathname.charAt(1).toUpperCase() + pathname.slice(2)}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
