import styles from "./projects.module.scss";
import { Project } from "@/data/project-lib";
import { SkillTag } from "@/data/skill-lib";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

type ProjectPreviewProps = {
  id: string;
  project: Project;
  delay: string;
  isMobile: boolean;
};

const ProjectPreview = ({ id, project, delay, isMobile }: ProjectPreviewProps) => {
  const style: CSSProperties = {
    ["animation-delay" as any]: delay,
    ["background-image" as any]: `url('${project.photo_url}`,
  };

  return (
    <Link href={`project/${id}`}>
      <div className={styles.projectPreview} style={style}>
        <div className={styles.bar}>
          <div>
            <h4>{project.name}</h4>
            <div className={styles.projectTags}>
              {project.skills.map((skill: SkillTag, i: number) => {
                return (isMobile ? i < 3 : i < 5) ? (
                  <Image
                    src={`skills_icons/color/${skill}.svg`}
                    alt={skill + " logo"}
                    key={i}
                    width={30}
                    height={30}
                  />
                ) : (
                  ""
                );
              })}
            </div>
          </div>
          <p>{project.synopsis}</p>
        </div>
      </div> </Link>

  );
};

export default ProjectPreview;
