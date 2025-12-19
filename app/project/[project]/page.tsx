"use client";
import {
	ChevronLeftSquare,
	ChevronRightSquare,
	Github,
	HelpCircle,
	UserCog,
	Users,
} from "lucide-react";
import { projects } from "@/data/project-lib";
import Image from "next/image";
import Link from "next/link";
import { Skill, SkillTag, Skills, allSkillList } from "@/data/skill-lib";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import HelpOverlay from "@/components/HelpOverlay";
import styles from "./project.module.scss";

const ProjectPage = ({ params }: { params: Promise<{ project: string }> }) => {
	const router = useRouter();
	const { project: projectId } = React.use(params);
	const project = projects[projectId];
	let [visible, setVisible] = useState(false);
	let [help, setHelp] = useState(false);

	const navigateToProject = (offset: number) => {
		setVisible(false);
		const projectIds = Object.keys(projects);
		const currentProjectIdx = projectIds.indexOf(projectId);
		let newIdx = currentProjectIdx + offset;
		if (newIdx == -1) newIdx = projectIds.length - 1;
		else if (newIdx == projectIds.length) newIdx = 0;
		setTimeout(() => router.push(`/project/${projectIds[newIdx]}`), 600);
	};

	const formatDate = (date: Date | null): string => {
		if (!date) return "Present";
		const months: string[] = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];

		const month = months[date.getMonth()];
		const year = date.getFullYear();

		return `${month} ${year}`;
	};

	useEffect(() => {
		setTimeout(() => setVisible(true), 300);
	}, []);

	return (
		<div className="relative ml-[5vw] h-screen w-[calc(100%-5vw)] px-48 py-10 2xl:px-60">
			<ChevronLeftSquare
				className="transition-300 absolute bottom-1/2 left-8 cursor-pointer text-dark-400 transition-all hover:text-light"
				size="8em"
				strokeWidth={0.75}
				onClick={() => navigateToProject(-1)}
			/>
			<ChevronRightSquare
				className="transition-300 absolute bottom-1/2 right-8 cursor-pointer text-dark-400 transition-all hover:text-light"
				size="8em"
				strokeWidth={0.75}
				onClick={() => navigateToProject(1)}
			/>
			<div className="flex h-[calc(0.7*(95vw-18rem))] w-full justify-between 2xl:h-[calc(0.7*(95vw-26rem))]">
				<div className="flex h-full w-[88%] flex-col justify-between">
					<div
						className={clsx(
							!visible && "-translate-x-6 -translate-y-6 opacity-0",
							"relative aspect-video h-auto w-full overflow-hidden rounded-2xl bg-gradient-to-tr from-gb-5 to-gb-1 transition-all duration-300",
						)}
					>
						<div className="absolute left-[2px] top-[2px] h-[calc(100%-4px)] w-[calc(100%-4px)] overflow-hidden rounded-2xl bg-dark-200">
							<Image src={project.photo_url} fill alt="hi" />
						</div>
						<HelpOverlay active={help} text="Project Preview" />
					</div>
					<div
						className={clsx(
							styles.projectDescription,
							!visible && "-translate-x-6 opacity-0",
							help ? "overflow-y-hidden" : "overflow-y-scroll",
							"relative h-[22%] w-full rounded-2xl border border-[#fff] border-opacity-10 bg-dark-200 p-4 text-lg transition-all duration-300",
						)}
					>
						{project.description.map((val, i) => (
							<p key={i}>
								{val}
								{i != project.description.length - 1 ? (
									<span>
										<br />
										<br />
									</span>
								) : (
									""
								)}
							</p>
						))}
						<HelpOverlay active={help} text="Description" />
					</div>
					<div className="flex h-[8%] w-full justify-between">
						<div
							className={clsx(
								!visible && "-translate-x-6 translate-y-6 opacity-0",
								"relative mr-5 flex h-full items-center justify-start overflow-hidden rounded-2xl border border-[#fff] border-opacity-10 bg-dark-200 px-5 transition-all delay-150 duration-300",
							)}
						>
							<p className="textGradient text-2xl">{project.name}</p>
							<HelpOverlay active={help} text={"Name"} />
						</div>
						{project.link && (
							<div
								className={clsx(
									!visible && "translate-y-6 opacity-0",
									"relative mr-5 flex h-full items-center justify-start overflow-hidden rounded-2xl bg-dark-200 bg-gradient-to-tr from-gb-5 to-gb-1 px-[3px] py-[3px] transition-all delay-150 duration-300 ",
								)}
							>
								<div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-dark-200 px-5">
									<Link href={project.link} target="_blank">
										<p className="textGradient text-2xl">{project.link}</p>
									</Link>
									<HelpOverlay active={help} text={"Link"} />
								</div>
							</div>
						)}
						<div
							className={clsx(
								!visible && "translate-y-6 opacity-0",
								"relative flex h-full flex-grow items-center justify-center overflow-hidden rounded-2xl border border-[#fff] border-opacity-10 bg-dark-200 px-5 transition-all delay-75 duration-300",
							)}
						>
							<p className="text-nowrap text-2xl">
								{formatDate(project.startDate)} - {formatDate(project.endDate)}
							</p>
							<HelpOverlay active={help} text="Duration" />
						</div>
					</div>
				</div>
				<div className="flex h-full w-[10%] flex-col items-center justify-between">
					<div
						className={clsx(
							!visible && "-translate-y-6 translate-x-6 opacity-0",
							"relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-[#fff] border-opacity-10 bg-dark-200 transition-all delay-150 duration-300",
						)}
					>
						<Link
							href={project.github ? project.github : ""}
							target="_blank"
							className={clsx(
								!project.github && "pointer-events-none opacity-50",
							)}
						>
							<Github size="5em" strokeWidth={1} stroke="#FFF" />
						</Link>
						<HelpOverlay active={help} text="GitHub Link" wrap />
					</div>
					<div
						className={clsx(
							!visible && "translate-x-6 opacity-0",
							help ? "overflow-hidden" : "overflow-scroll",
							"relative flex h-[65%] w-2/3 overflow-x-hidden flex-col items-center justify-start overflow-hidden rounded-2xl border border-[#fff] border-opacity-10 bg-dark-200 p-5 transition-all delay-75 duration-300",
						)}
					>
						{project.skills.map((skillTag: SkillTag, i) => {
							const skill = allSkillList.filter(
								(skill) => skill.icon_url == skillTag,
							)[0];
							return (
								<div
									className={clsx(
										i != project.skills.length - 1 && "mb-4",
										"relative h-10 w-10",
									)}
									key={skillTag}
								>
									<Image
										key={skill.icon_url}
										src={`/skills_icons/color/${skill.icon_url}.svg`}
										alt={skill.name + " logo"}
										fill
									/>
								</div>
							);
						})}
						<HelpOverlay active={help} text="Skills Used" rotate />
					</div>
					<div
						className={clsx(
							!visible && "translate-x-6 opacity-0",
							"relative flex h-[8%] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#fff] border-opacity-10 bg-dark-200 transition-all delay-[225ms] duration-300",
						)}
					>
						<p className="text-4xl">{project.contributors}</p>
						<UserCog
							className="ml-2"
							size="2.2em"
							strokeWidth={2}
							stroke="#FFF"
						/>
						<HelpOverlay active={help} text="Devs" />
					</div>
					<div
						className={clsx(
							!visible && "translate-x-6 translate-y-6 opacity-0",
							"relative flex h-[8%] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#fff] border-opacity-10 bg-dark-200 transition-all delay-300 duration-300",
						)}
					>
						<p className="text-2xl">{project.users}</p>
						<Users
							className="ml-1"
							size="2.2em"
							strokeWidth={2}
							stroke="#FFF"
						/>
						<HelpOverlay active={help} text="Users" />
					</div>
				</div>
			</div>
			<HelpCircle
				className={clsx(
					help && "stroke-gb-3",
					"transition-300 absolute bottom-8 right-8 cursor-pointer text-dark-400 transition-all hover:text-light",
				)}
				size="4em"
				strokeWidth={1.5}
				onClick={() => setHelp(!help)}
			/>
		</div>
	);
};

export default ProjectPage;
