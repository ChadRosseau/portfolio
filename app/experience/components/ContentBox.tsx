import FlippedImage from "@/components/FlippedImage";
import Typewriter from "@/components/Typewriter";
import { Experience } from "@/data/experience-lib";
import { SkillTag, allSkillList } from "@/data/skill-lib";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

const ContentBox: FC<{ experience: Experience, i: number }> = ({ experience, i }) => {
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

  const dateString = `${formatDate(experience.startDate)} - ${formatDate(experience.endDate)}`;
  const typeString = `${experience.type} | ${experience.location}`;
  const roleStart = 2000 + 3000 * i + 100 * experience.name.length / 2;
  const dateStart = roleStart + 70 * experience.role.length / 2;
  const pointBaseStart = dateStart + 2 * (70 * typeString.length) / 3;
  const imageBaseStart = 2000 + 3000 * i + 100 * experience.name.length + 70 * experience.role.length / 2 + 70 * dateString.length;

  return <div className="h-full p-3">
    <div className="flex justify-between">
      <h5 className="text-2xl"><Typewriter text={experience.role} startDelay={roleStart} keyDelay={70} /></h5>
      <p className="text-2xl">
        <Typewriter text={dateString} startDelay={dateStart} keyDelay={70} />
      </p>
    </div>
    <div className="flex justify-between h-[calc(100%-1.5rem)]">
      <div >
        <Typewriter text={typeString} startDelay={dateStart} keyDelay={70} />
        <ul className="ml-5">
          {experience.points.map((point, j) => {
            return <li key={j}>
              {point.map((section, k) => <span key={k}>
                <Typewriter text={(k == 0 ? "• " : '') + section} startDelay={pointBaseStart + 500 * j + (k > 0 ? 20 * point.slice(0, k).reduce((c, s) => c + s.length, 0) : 0)} keyDelay={20} />
                {k != point.length - 1 && <br />}
              </span>)}
            </li>
          })}
        </ul>
        <ul className="ml-5 invisible">
          {experience.points.map((point, j) => {
            return <li key={j}>
              {point.map((section, k) => <span key={k}>
                {(k == 0 ? "• " : '') + section}
                {k != point.length - 1 && <br />}
              </span>)}
            </li>
          })}
        </ul>
      </div>
      <div className="h-[calc(100%-1rem)] mt-2 ml-5 min-w-12 flex flex-col items-center">
        {experience.skills
          .slice(0, 6)
          .map((skillTag: SkillTag, j) => {
            const skill = allSkillList.filter((skill) => skill.icon_url == skillTag)[0];
            return (
              <FlippedImage url={`/skills_icons/color/${skill.icon_url}.svg`} alt={skill.name + " logo"} startDelay={imageBaseStart + 300 * j} className={clsx(j != experience.skills.length - 1 && "mb-2", "min-w-8 min-h-8 relative")} key={j} />
            );
          })}
      </div>
    </div>
  </div>
}

export default ContentBox;
