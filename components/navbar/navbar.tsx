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
			<div className="relative h-[3.3rem] w-[3.3rem] md:mb-5">
				<Image src="/images/logo.png" alt="" className={styles.logo} fill />
			</div>
			<Link href="/">
				<div
					className={`${styles.button} ${pathname == "/" ? styles.active : ""}`}
				>
					<Home className={styles.icon} size="3.3rem" strokeWidth={1} />
					<p>Home</p>
				</div>
			</Link>
			{/* <Link href="/experience"> */}
			<Link href="/experience">
				<div
					className={`${styles.button} ${
						pathname == "/experience" ? styles.active : ""
					}`}
				>
					<CalendarClock
						className={styles.icon}
						size="3.3rem"
						strokeWidth={1}
					/>
					<p>Experience</p>
				</div>
			</Link>
			<Link href="/projects">
				<div
					className={`${styles.button} ${
						pathname == "/projects" || pathname.split("/")[1] == "project"
							? styles.active
							: ""
					}`}
				>
					<FolderGit2 className={styles.icon} size="3.3rem" strokeWidth={1} />
					<p>Projects</p>
				</div>
			</Link>
			<Link href="/skills">
				<div
					className={`${styles.button} ${
						pathname == "/skills" ? styles.active : ""
					}`}
				>
					<Command className={styles.icon} size="3.3rem" strokeWidth={1} />
					<p>Skills</p>
				</div>
			</Link>
			{/* <Link href="/about"> */}
			<Link href="/construction">
				<div
					className={`${styles.button} ${
						pathname == "/about" ? styles.active : ""
					}`}
				>
					<UserSquare className={styles.icon} size="3.3rem" strokeWidth={1} />
					<p>About Me</p>
				</div>
			</Link>
			<div className={styles.pageLabelWrapper}>
				<p className="textGradient text-3xl">
					{pathname == "/"
						? "Home"
						: pathname.split("/")[1] == "project"
							? "Project"
							: pathname.charAt(1).toUpperCase() + pathname.slice(2)}
				</p>
			</div>
		</div>
	);
};

export default Navbar;
