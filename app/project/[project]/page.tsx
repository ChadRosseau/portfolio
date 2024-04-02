import {
  Github, UserCog, Users
} from "lucide-react";
import { projects } from '@/data/project-lib';
import Image from 'next/image';
import Link from 'next/link';
import { Skill, SkillTag, Skills } from "@/data/skill-lib";
import clsx from 'clsx';

const ProjectPage = ({ params }: { params: { project: string } }) => {
  const project = projects[params.project];

  const allSkillList: Skill[] = [];
  Object.values(Skills).forEach(skillList => {
    skillList.forEach(skill => allSkillList.push(skill))
  })

  const generateOffsetLink = (offset: number) => {
    const projectIds = Object.keys(projects);
    const currentProjectIdx = projectIds.indexOf(params.project);
    let newIdx = currentProjectIdx + offset;

    if (newIdx == -1) newIdx = projectIds.length - 1;
    else if (newIdx == projectIds.length) newIdx = 0;

    return `/project/${projectIds[newIdx]}`;
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

  return (
    <div className="ml-[5vw] px-48 py-10 w-[calc(100%-5vw)] h-screen">
      <div className="flex justify-between h-[calc(0.7*(95vw-18rem))] w-full">
        <div className="h-full flex flex-col w-[88%] justify-between">
          <div className="rounded-2xl overflow-hidden relative aspect-video w-full h-auto border-[#fff] border">
            <Image src={'/' + project.photo_url} fill alt="hi" />
          </div>
          <div className="rounded-2xl w-full h-[22%] border border-[#fff] overflow-scroll p-4 text-lg">
            {project.description.map((val, i) => <p>{val}{i != project.description.length - 1 ? <span><br /><br /></span> : ''}</p>)}
          </div>
          <div className='w-full h-[8%] flex justify-between'>
            <div className="rounded-2xl mr-5 h-full border border-[#fff] flex px-5 justify-start items-center">
              <Link href={project.link}>
                <p className="textGradient text-2xl">
                  {project.name} - {project.link}
                </p>
              </Link>
            </div>
            <div className="rounded-2xl h-full border border-[#fff] px-20 flex-grow flex justify-center items-center">
              <p className="text-nowrap text-2xl">
                {formatDate(project.startDate)} - {formatDate(project.endDate)}
              </p>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col w-[10%] justify-between items-center">
          <div className="rounded-2xl w-full aspect-square border border-[#fff] flex justify-center items-center">
            <Github
              size="5em"
              strokeWidth={1}
              stroke="#FFF"
            />
          </div>
          <div className="rounded-2xl w-2/3 h-[65%] border border-[#fff] flex flex-col items-center p-5 justify-start overflow-scroll">
            {project.skills
              .map((skillTag: SkillTag, i) => {
                const skill = allSkillList.filter((skill) => skill.icon_url == skillTag)[0];
                return (
                  <div className={clsx(i != project.skills.length - 1 && "mb-4", "w-10 h-10 relative")}>
                    <Image
                      key={skill.icon_url}
                      src={`/skills_icons/color/${skill.icon_url}.svg`}
                      alt={skill.name + " logo"}
                      fill
                    />
                  </div>
                );
              })}
          </div>
          <div className="rounded-2xl w-full h-[8%] border border-[#fff] flex justify-center items-center">
            <p className="text-4xl">
              {project.contributors}
            </p>
            <UserCog
              className="ml-2"
              size="2.2em"
              strokeWidth={2}
              stroke="#FFF"
            />
          </div>
          <div className="rounded-2xl w-full h-[8%] border border-[#fff] flex justify-center items-center">
            <p className="text-2xl">
              {project.users}
            </p>
            <Users
              className="ml-1"
              size="2.2em"
              strokeWidth={2}
              stroke="#FFF"
            />
          </div>
        </div>
      </div>
      {/*
         
      <div className="flex w-full justify-between">
        <Link href={generateOffsetLink(-1)}>

          <div>Prev</div>
        </Link>
        <Link href={generateOffsetLink(1)}>

          <div>Next</div>
        </Link>

      </div>
         * */}
    </div>
  );
};

export default ProjectPage;