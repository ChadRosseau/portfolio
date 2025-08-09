"use client";
import clsx from "clsx";
import styles from "./experience.module.scss";
import GitNode from "./components/GitNode";
import { experiencesList } from "@/data/experience-lib";
import Branch from "./components/Branch";
import { useEffect, useRef, useState } from "react";
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
			setTimeout(
				() => (scrollRef.current.scrollLeft = scrollRef.current.scrollWidth),
				10,
			);
		};

		const scrollToEnd = () => {
			const element = scrollRef.current;
			const delay = 1000;
			const duration = 30000; // Duration of scrolling animation in milliseconds
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
				if (active) requestAnimationFrame(anim);
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
		if (experiencesList.length % 2) {
			if (i % 2) bottomRow.push(experiencesList[i]);
			else topRow.push(experiencesList[i]);
		} else {
			if (i % 2) topRow.push(experiencesList[i]);
			else bottomRow.push(experiencesList[i]);
		}
	}

	return (
		<div
			className={clsx(
				styles.experienceScroller,
				scrollStarted ? "overflow-x-scroll" : "overflow-x-hidden",
				"ml-[5vw] h-screen w-[calc(100%-5vw)] overflow-y-hidden",
			)}
			ref={scrollRef}
		>
			<div
				className={clsx(
					styles.experienceWrapper,
					!scrollStarted && "overflow-x-hidden",
					"relative h-screen w-max overflow-y-hidden px-20",
				)}
			>
				{/* Beginning */}
				<div className="absolute left-20 top-[calc(50%-2rem)] flex items-center">
					<GitNode relative />
					<div
						className={clsx(styles.branch, styles.bgGradient, "relative w-72")}
					></div>
					<p
						className={clsx(
							animCancelled && "hidden",
							styles.cancelAnimText,
							"absolute left-0 top-12 pl-20 text-sm text-light transition",
						)}
					>
						Press space to skip animation
					</p>
				</div>
				<div
					className={`${experiencesList.length % 2 ? "ml-80" : "ml-[80em]"} flex h-1/2 flex-nowrap`}
				>
					{topRow.map((experience, i) => {
						return (
							<Branch
								experience={experience}
								key={experience.name}
								top={true}
								i={2 * i}
								final={
									experience == experiencesList[experiencesList.length - 1]
								}
								cancelled={animCancelled}
							/>
						);
					})}
				</div>
				<div
					className={`${experiencesList.length % 2 ? "ml-[80em]" : "ml-80"} flex h-1/2 flex-nowrap`}
				>
					{bottomRow.map((experience, i) => {
						return (
							<Branch
								experience={experience}
								key={experience.name}
								top={false}
								i={2 * i + 1}
								final={
									experience == experiencesList[experiencesList.length - 1]
								}
								cancelled={animCancelled}
							/>
						);
					})}
				</div>
			</div>
			<div className={styles.cover}></div>
		</div>
	);
};

export default ExperiencePage;
