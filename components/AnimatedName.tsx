"use client";
import { useEffect, useState } from "react";

const AnimatedName = () => {
	const [title, setTitle] = useState<string>("");
	const [name, setName] = useState<string>("");

	const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

	useEffect(() => {
		const playNameAnimation = async () => {
			await sleep(1000);
			const intro1 = "Hi, I'm ";
			const intro2 = "Chad.";
			let play1 = "";
			let play2 = "";
			for (let i = 0; i < intro1.length; i++) {
				await sleep(75);
				play1 += intro1[i];
				setTitle(play1);
			}
			for (let i = 0; i < intro2.length; i++) {
				await sleep(75);
				play2 += intro2[i];
				setName(play2);
			}
		};
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
		<h3>
			{title} <span>{name}</span>{" "}
		</h3>
	);
};

export default AnimatedName;
