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

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.nav}>
      <Link href="/">
        <div
          className={`${styles.button} ${pathname == "/" ? styles.active : ""}`}
        >
          <Home
            className={styles.icon}
            size={50}
            strokeWidth={1}
            stroke={pathname == "/" ? "#00ff88" : "#FFF"}
          />
          <p>Home</p>
        </div>
      </Link>
      <Link href="/experience">
        <div
          className={`${styles.button} ${
            pathname == "/experience" ? styles.active : ""
          }`}
        >
          <CalendarClock
            className={styles.icon}
            size={50}
            strokeWidth={1}
            stroke={pathname == "/experience" ? "#00ff88" : "#FFF"}
          />
          <p>Experience</p>
        </div>
      </Link>
      <Link href="/projects">
        <div
          className={`${styles.button} ${
            pathname == "/projects" ? styles.active : ""
          }`}
        >
          <FolderGit2
            className={styles.icon}
            size={50}
            strokeWidth={1}
            stroke={pathname == "/projects" ? "#00ff88" : "#FFF"}
          />
          <p>Projects</p>
        </div>
      </Link>
      <Link href="/skills">
        <div
          className={`${styles.button} ${
            pathname == "/skills" ? styles.active : ""
          }`}
        >
          <Command
            className={styles.icon}
            size={50}
            strokeWidth={1}
            stroke={pathname == "/skills" ? "#00ff88" : "#FFF"}
          />
          <p>Skills</p>
        </div>
      </Link>
      <Link href="/about">
        <div
          className={`${styles.button} ${
            pathname == "/about" ? styles.active : ""
          }`}
        >
          <UserSquare
            className={styles.icon}
            size={50}
            strokeWidth={1}
            stroke={pathname == "/about" ? "#00ff88" : "#FFF"}
          />
          <p>About Me</p>
        </div>
      </Link>
      {/* {pathname} */}
    </div>
  );
};

export default Navbar;
