"use client";

import { useEffect, useState } from "react";
import ProjectPreview from "./projectPreview";
import styles from "./projects.module.scss";
import { Project, projects } from "@/data/project-lib";
import { Skill, SkillTag, Skills } from "@/data/skill-lib";
import { useSearchParams } from "next/navigation";
import useCheckMobileScreen from "@/hooks/screenWidth";

const ProjectsPage = () => {
  const isMobile = useCheckMobileScreen();
  const [filters, setFilters] = useState<string[]>([]);
  const searchParams = useSearchParams();

  const makeDelay = (i: number) => {
    if ((i + 1) % 4 == 0) return i * 0.25 - 0.25;
    if ((i + 1) % 4 == 3) return i * 0.25 + 0.25;
    return i * 0.25;
  };

  const toggleFilter = (filter: string) => {
    const idx = filters.indexOf(filter);
    if (idx == -1) {
      return setFilters([...filters, filter]);
    }
    const newFilters = [...filters];
    newFilters.splice(idx, 1);
    return setFilters(newFilters);
  };

  useEffect(() => {
    const initialFilter = searchParams.get("skill");
    if (initialFilter) toggleFilter(initialFilter);
  }, [searchParams]);

  return (
    <div className={styles.projectsWrapper}>
      <h3 className={`${styles.filtersLabel} textGradient`}>
        {isMobile ? "Swipe" : "Scroll"} and {isMobile ? "Tap" : "Click"}{" "}
        to apply filters
      </h3>
      <div className={styles.filtersWrapper}>
        {Object.values(Skills)
          .flat(1)
          .map((skill: Skill) => {
            return (
              <img
                key={skill.icon_url}
                src={`skills_icons/color/${skill.icon_url}.svg`}
                alt={skill.name + " logo"}
                className={
                  filters.includes(skill.icon_url)
                    ? styles.active
                    : ""
                }
                onClick={() => toggleFilter(skill.icon_url)}
              />
            );
          })}
      </div>

      {Object.values(projects)
        .filter((project: Project) => {
          return (
            //@ts-ignore
            filters.every((val) => project.skills.includes(val)) ||
            filters.length == 0
          );
        }).length != 0 ?
        <div className={styles.projectPreviews}>
          {Object.entries(projects)
            .filter((data) => {
              let project = data[1];
              return (
                //@ts-ignore
                filters.every((val) => project.skills.includes(val)) ||
                filters.length == 0
              );
            })
            .map((data, i: number) => {
              const [id, project] = data;
              return (
                <ProjectPreview
                  id={id}
                  project={project}
                  delay={`${makeDelay(i)}s`}
                  isMobile={isMobile}
                  key={i}
                />
              );
            })}</div> :
        <p className="textGradient text-center w-full mt-[10vh]">No public projects using this combination of skills</p>
      }
    </div>
  );
};

export default ProjectsPage;
