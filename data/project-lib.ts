import { SkillTag } from "./skill-lib";

const makeDate = (dateString: string) => {
	const [year, month] = dateString.split("-");
	const date = new Date(+year, Number(month) - 1, 1);
	return date;
};

export interface Project {
	name: string;
	photo_url: string;
	skills: SkillTag[];
	synopsis: string;
	description: string[];
	startDate: Date;
	endDate: Date | null;
	link: string | null;
	github: string | null;
	contributors: number;
	users: number | "?";
}

export interface ProjectDB {
	[id: string]: Project;
}

export const projects: ProjectDB = {
	sylhk: {
		name: "Sylhk",
		photo_url: "/project_thumbnails/sylhk.png",
		skills: [
			SkillTag.Angular,
			SkillTag.Tailwind,
			SkillTag.Typescript,
			SkillTag.HTML,
			SkillTag.PostgreSQL,
			SkillTag.ExpressJS,
			SkillTag.Cloudflare,
		],
		synopsis:
			"My startup, a centralized platform for connecting lawyers of the southeast asian Greater Bay Area,",
		description: [
			'"Sylhk" is a triple entendre with three distinct meanings.',
			'First and foremost, it is an acronym for: "Search for your Lawyer in Hong Kong", ' +
				"reflecting the platform's primary purpose of connecting Lawyers across the GBA with the legal practitioners of Hong Kong.",
			'Secondly, "Sylhk" draws inspiration from the historical Silk Road, the renowned trade route that spanned multiple regions and facilitated commerce for over two millennia. In a similar vein, Sylhk aims to serve as a conduit for legal services, fostering connections and enabling commerce within the legal sector.',
			'Lastly, the term "Sylhk" is a nod to the esteemed legal practitioners in Hong Kong, who upon receiving the prestigious title of Senior Counsel, are adorned in silk gowns. This tradition has led to these respected individuals being commonly referred to as "Silks" within the legal community.',
			"Ultimately, Sylhk aims to be an enabler for law firms by providing practical and convenient access to lawyers of other regions to enable collaboration and opportunities previously impossible.",
		],
		startDate: makeDate("2024-8"),
		endDate: null,
		link: "https://sylhkltd.com",
		github: null,
		contributors: 2,
		users: "?",
	},
	promptbook: {
		name: "PromptBook",
		photo_url: "/project_thumbnails/promptbook.png",
		skills: [
			SkillTag.ReactJS,
			SkillTag.Tailwind,
			SkillTag.Typescript,
			SkillTag.ExpressJS,
			SkillTag.Cloudflare,
		],
		synopsis:
			"An interactive AI-powered notebook that lets users create cell-based workflows for structured AI use.",
		description: [
			"PromptBook is a versatile notebook system designed to integrate AI capabilities directly into a structured workflow. Users can create, organize, and manipulate different types of cells—text for notes, input for user data, and prompt cells for generating or refining AI outputs. The platform supports drag-and-drop reordering, hierarchical navigation, and a preset library of prompts, allowing users to experiment with AI-driven tasks in a flexible, iterative manner.",
			'A built-in live AI assistant, "AI Amigo," provides real-time guidance and augmentation, while file upload and semantic search features enable contextual exploration and retrieval of relevant information. With JSON import/export and sharing capabilities, PromptBook serves as both a personal and collaborative tool for managing AI-enhanced workflows, research, and documentation.',
		],
		startDate: makeDate("2025-5"),
		endDate: null,
		link: "https://sylhkltd.com",
		github: null,
		contributors: 3,
		users: "?",
	},
	migoverse: {
		name: "Migoverse",
		photo_url: "/project_thumbnails/migoverse.png",
		skills: [
			SkillTag.Angular,
			SkillTag.Typescript,
			SkillTag.OpenAI,
			SkillTag.ExpressJS,
			SkillTag.HTML,
			SkillTag.CSS,
			SkillTag.Firebase,
			SkillTag.Azure,
			SkillTag.Python,
			SkillTag.Pinecone,
		],
		synopsis:
			"A company that offers a suite of tools which reimagine the university learning experience.",
		description: [
			"Migoverse's primary product, MindMigo, is a tool designed to vastly enhance the experience of students as they review online lectures. The tool allows students to instantly search every lecture from a given course to find exactly where and when a concept was explained, negating the need to scour through the content to answer a minor question.",
			"Using anonymized search data, Migoverse works with university faculty to identify common gaps in knowledge for each class and lecture section. This allows professors to identify which content needs to be revisited in more depth or with greater attention, resulting in a dynamic learning experience that evolves throughout the semester.",
			"We have a variety of planned upcoming features to help facilitate your study efforts. Visit our website to sign up for our newsletter!",
		],
		startDate: makeDate("2022-9"),
		endDate: makeDate("2024-4"),
		link: "https://mind.migoverse.ca",
		github: null,
		contributors: 1,
		users: 400,
	},
	portfolio: {
		name: "Portfolio",
		photo_url: "/project_thumbnails/portfolio.png",
		skills: [
			SkillTag.ReactJS,
			SkillTag.Sass,
			SkillTag.Typescript,
			SkillTag.PostgreSQL,
			SkillTag.HTML,
		],
		synopsis: "This website, my online resume.",
		description: [
			"My portfolio website, a curated showcase of my projects, skills, and experiences. This portfolio highlights my journey, featuring innovative solutions, creative designs, and technical achievements.",
			"Gain insights into my creative process, and the impactful results achieved as part of it.",
			"Whether you're here to collaborate, learn more about my expertise, or just explore, you’ll find everything from personal projects to professional milestones.",
		],
		startDate: makeDate("2023-8"),
		endDate: null,
		link: "https://www.chad-rossouw.com",
		github: null,
		contributors: 1,
		users: "?",
	},
	convocord: {
		name: "Convocord",
		photo_url: "/project_thumbnails/convocord.png",
		skills: [
			SkillTag.ReactJS,
			SkillTag.Tailwind,
			SkillTag.Typescript,
			SkillTag.HTML,
			SkillTag.NextJS,
			SkillTag.OpenAI,
		],
		synopsis:
			"A speech-to-text translation app that breaks down conversational language barriers.",
		description: [
			"Convocord is designed as a lightweight translation tool to enable back-and-forth verbal conversations between individuals fluent in separate languages.",
			"To facilitate this, it uses a chat-like interface that displays the conversation history. Users can speak into their microphone to have their audio transcribed and then translated into the other language. Users can preview the full conversation history from both sides without needing to re-translate.",
			"I built this tool as a way to communicate with the grandparents of a friend of mine, whom I stayed with. They were not fluent in English, so we used this tool to have extended conversations.",
		],
		startDate: makeDate("2023-7"),
		endDate: makeDate("2023-8"),
		link: "https://convocord.chad-rossouw.com",
		github: null,
		contributors: 1,
		users: "?",
	},
	utscguessr: {
		name: "UTSCGuessr",
		photo_url: "/project_thumbnails/utscguessr.png",
		skills: [
			SkillTag.HTML,
			SkillTag.CSS,
			SkillTag.Javascript,
			SkillTag.Python,
			SkillTag.Flask,
			SkillTag.Maps,
		],
		synopsis:
			"A recreation of the popular game Geoguessr, designed specifically for my university campus.",
		description: [
			"A recreation of the popular game Geoguessr, designed specifically for my university campus.",
			"This project was done as part of our final project for an intro to web development course. The idea behind the project was for it to be a fun way for students new to the campus to learn about the different areas, to help them orient themselves around the university.",
			"The game has close to 50 images taken from around campus, including notable areas such as landmarks, restaurants, and common areas. It was designed with my experience in my first-year in mind.",
		],
		startDate: makeDate("2023-3"),
		endDate: makeDate("2023-4"),
		link: null,
		github: null,
		contributors: 3,
		users: "?",
	},
	okayreads: {
		name: "OkayReads",
		photo_url: "/project_thumbnails/okayreads.png",
		skills: [SkillTag.HTML, SkillTag.CSS, SkillTag.Javascript],
		synopsis:
			"A Goodreads clone with basic features, built in raw HTML, CSS and JS as part of a university course project.",
		description: [
			"A Goodreads clone with basic features, built in raw HTML, CSS and JS as part of a university course project.",
		],
		startDate: makeDate("2023-2"),
		endDate: makeDate("2023-3"),
		link: null,
		github: null,
		contributors: 2,
		users: "?",
	},
	catastrophising: {
		name: "I'm Catastrophising",
		photo_url: "project_thumbnails/catastrophising.png",
		skills: [
			SkillTag.HTML,
			SkillTag.CSS,
			SkillTag.Typescript,
			SkillTag.Angular,
			SkillTag.Firebase,
		],
		synopsis:
			"A mental health support app designed to bolster confidence and reduce anxiety.",
		description: [
			"A mental health support app designed to bolster confidence and reduce anxiety.",
			"This website pushed my web animation skills, including custom wave and sky animations.",
		],
		startDate: makeDate("2023-10"),
		endDate: makeDate("2023-11"),
		link: null,
		github: null,
		contributors: 1,
		users: 1,
	},
	dcyis: {
		name: "DCYIS",
		photo_url: "/project_thumbnails/dcyis.png",
		skills: [
			SkillTag.HTML,
			SkillTag.CSS,
			SkillTag.Typescript,
			SkillTag.Angular,
			SkillTag.Firebase,
		],
		synopsis:
			"A stock trading simulator website built for students to practice investment skills.",
		description: [
			"A stock trading simulator website built for students to practice investment skills.",
			"I built this website as part of an effort to promote financial literacy at my highschool. I started a club with my peers to teach investment strategy and personal finance, in collaboration with the global Young Investors Society (YIS).",
			"However, I realised that despite teaching the strategy, students had no way to practice investment and evaluate performance without using their real money.",
			"To solve this, I built an investment simulator that mirrors the real-time US stock market. Students can create portfolios with fake currency, perform trades, and track performance of that portfolio over time. This allowed them to practice and refine investment strategies, solving the original problem.",
		],
		startDate: makeDate("2020-8"),
		endDate: makeDate("2021-1"),
		link: "https://dcyis-production.web.app",
		github: null,
		contributors: 1,
		users: "?",
	},
	dcsn: {
		name: "DCSN",
		photo_url: "/project_thumbnails/dcsn.png",
		skills: [
			SkillTag.HTML,
			SkillTag.CSS,
			SkillTag.Typescript,
			SkillTag.Angular,
			SkillTag.Firebase,
		],
		synopsis:
			"A news website built for the highschool student news organization I co-founded, complete with a custom content-management system.",
		description: [
			"A news website built for the highschool student news organization I co-founded, complete with a custom content-management system.",
			"This website supported a community of over 1500 students, enabling students to view news provided by our student news team.",
			"In addition, the website included a content-management system custom-made for our student news team. It enabled creation, editing, revision and deletion of articles, including an extensive article review pipeline as articles were approved by increasingly senior editors. This resulted in a highly effective editing system used by a team of over 40 students.",
		],
		startDate: makeDate("2020-11"),
		endDate: makeDate("2022-5"),
		link: "https://dcsn.discovery.edu.hk",
		github: null,
		contributors: 2,
		users: 1200,
	},
};
