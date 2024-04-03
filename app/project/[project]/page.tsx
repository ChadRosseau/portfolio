'use client';
import {
  ChevronLeftSquare,
  ChevronRightSquare,
  Github, HelpCircle, UserCog, Users
} from "lucide-react";
import { projects } from '@/data/project-lib';
import Image from 'next/image';
import Link from 'next/link';
import { Skill, SkillTag, Skills } from "@/data/skill-lib";
import clsx from 'clsx';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import HelpOverlay from "@/components/HelpOverlay";
import styles from "./project.module.scss";

const ProjectPage = ({ params }: { params: { project: string } }) => {
  const router = useRouter();
  const project = projects[params.project];
  let [visible, setVisible] = useState(false);
  let [help, setHelp] = useState(false);

  const allSkillList: Skill[] = [];
  Object.values(Skills).forEach(skillList => {
    skillList.forEach(skill => allSkillList.push(skill))
  })

  const navigateToProject = (offset: number) => {
    setVisible(false);
    const projectIds = Object.keys(projects);
    const currentProjectIdx = projectIds.indexOf(params.project);
    let newIdx = currentProjectIdx + offset;
    if (newIdx == -1) newIdx = projectIds.length - 1;
    else if (newIdx == projectIds.length) newIdx = 0;
    setTimeout(() => router.push(`/project/${projectIds[newIdx]}`), 600);
  };

  const formatDate = (date: Date | null): string => {
    if (!date) return "Present";
    const months: string[] = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${year}`;
  }

  useEffect(() => {
    setTimeout(() => setVisible(true), 300)
  }, [])

  return (
    <div className="ml-[5vw] px-48 py-10 w-[calc(100%-5vw)] h-screen relative 2xl:px-60">
      <ChevronLeftSquare
        className="absolute bottom-1/2 left-8 text-dark-400 hover:text-light transition-all transition-300 cursor-pointer"
        size="8em"
        strokeWidth={0.75}
        onClick={() => navigateToProject(-1)}
      />
      <ChevronRightSquare
        className="absolute bottom-1/2 right-8 text-dark-400 hover:text-light transition-all transition-300 cursor-pointer"
        size="8em"
        strokeWidth={0.75}
        onClick={() => navigateToProject(1)}
      />
      <div className="flex justify-between h-[calc(0.7*(95vw-18rem))] w-full 2xl:h-[calc(0.7*(95vw-26rem))]">
        <div className="h-full flex flex-col w-[88%] justify-between">
          <div className={clsx(styles.previewOuter, !visible && "-translate-x-6 -translate-y-6 opacity-0", "rounded-2xl overflow-hidden relative aspect-video w-full h-auto transition-all duration-300 bg-gradient-to-tr from-gb-5 to-gb-1")}>
            <div className="absolute bg-dark-200 top-[2px] left-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-2xl overflow-hidden">
              <Image src={'/' + project.photo_url} fill alt="hi" />
            </div>
            <HelpOverlay active={help} text="Project Preview" />
          </div>
          <div className={clsx(styles.projectDescription, !visible && "-translate-x-6 opacity-0", help && "overflow-hidden", "bg-dark-200 border-opacity-10 rounded-2xl w-full h-[22%] border border-[#fff] p-4 text-lg transition-all duration-300 relative")}>
            {project.description.map((val, i) => <p key={i}>{val}{i != project.description.length - 1 ? <span><br /><br /></span> : ''}</p>)}
            <HelpOverlay active={help} text="Description" />
          </div>
          <div className="w-full h-[8%] flex justify-between">
            <div className={clsx(!visible && "-translate-x-6 translate-y-6 opacity-0", "bg-dark-200 border-opacity-10 rounded-2xl mr-5 h-full border border-[#fff] flex px-5 justify-start items-center transition-all duration-300 delay-150 relative overflow-hidden")}>
              <Link href={project.link ? project.link : ''} target="_blank" className={clsx(!project.link && "pointer-events-none")}>
                <p className="textGradient text-2xl">
                  {project.name} {project.link && '- ' + project.link}
                </p>
              </Link>
              <HelpOverlay active={help} text={project.link ? "Name + Link" : "Name"} />
            </div>
            <div className={clsx(!visible && "translate-y-6 opacity-0", "bg-dark-200 border-opacity-10 rounded-2xl h-full border border-[#fff] px-5 flex-grow flex justify-center items-center transition-all duration-300 delay-75 relative overflow-hidden")}>
              <p className="text-nowrap text-2xl">
                {formatDate(project.startDate)} - {formatDate(project.endDate)}
              </p>
              <HelpOverlay active={help} text="Duration" />
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col w-[10%] justify-between items-center">
          <div className={clsx(!visible && "translate-x-6 -translate-y-6 opacity-0", "bg-dark-200 border-opacity-10 rounded-2xl w-full aspect-square border border-[#fff] flex justify-center items-center transition-all duration-300 delay-150 relative overflow-hidden")}>
            <Link href={project.github ? project.github : ''} target="_blank" className={clsx(!project.github && "pointer-events-none opacity-50")}>
              <Github
                size="5em"
                strokeWidth={1}
                stroke="#FFF"
              />
            </Link>
            <HelpOverlay active={help} text="GitHub Link" wrap />
          </div>
          <div className={clsx(!visible && "translate-x-6 opacity-0", help ? "overflow-hidden" : "overflow-scroll", "bg-dark-200 border-opacity-10 rounded-2xl w-2/3 h-[65%] border border-[#fff] flex flex-col items-center p-5 justify-start transition-all duration-300 delay-75 relative overflow-hidden")}>
            {project.skills
              .map((skillTag: SkillTag, i) => {
                const skill = allSkillList.filter((skill) => skill.icon_url == skillTag)[0];
                return (
                  <div className={clsx(i != project.skills.length - 1 && "mb-4", "w-10 h-10 relative")} key={skillTag}>
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
          <div className={clsx(!visible && "translate-x-6 opacity-0", "bg-dark-200 border-opacity-10 rounded-2xl w-full h-[8%] border border-[#fff] flex justify-center items-center transition-all duration-300 delay-[225ms] relative overflow-hidden")}>
            <p className="text-4xl">
              {project.contributors}
            </p>
            <UserCog
              className="ml-2"
              size="2.2em"
              strokeWidth={2}
              stroke="#FFF"
            />
            <HelpOverlay active={help} text="Devs" />
          </div>
          <div className={clsx(!visible && "translate-x-6 translate-y-6 opacity-0", "bg-dark-200 border-opacity-10 rounded-2xl w-full h-[8%] border border-[#fff] flex justify-center items-center transition-all duration-300 delay-300 relative overflow-hidden")}>
            <p className="text-2xl">
              {project.users}
            </p>
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
        className={clsx(help && "stroke-gb-3", "absolute bottom-8 right-8 text-dark-400 hover:text-light transition-all transition-300 cursor-pointer")}
        size="4em"
        strokeWidth={1.5}
        onClick={() => setHelp(!help)}
      />
    </div>
  );
};

export default ProjectPage;
