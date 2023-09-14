import styles from "./projects.module.scss";
import { Project } from "@/data/project-lib";
import { SkillTag } from "@/data/skill-lib";
import { CSSProperties } from "react";

type ProjectPreviewProps = {
    project: Project;
    delay: string;
};

const ProjectPreview = ({ project, delay }: ProjectPreviewProps) => {
    const style: CSSProperties = {
        ["animation-delay" as any]: delay,
        ["background-image" as any]: `url('${project.photo_url}`,
    };

    return (
        <div className={styles.projectPreview} style={style}>
            <div className={styles.bar}>
                <div>
                    <h4>{project.name}</h4>
                    <div className={styles.projectTags}>
                        {project.skills.map((skill: SkillTag, i: number) => {
                            return i < 5 ? (
                                <img
                                    src={`skills_icons/color/${skill}.svg`}
                                    alt={skill + " logo"}
                                    key={i}
                                />
                            ) : (
                                ""
                            );
                        })}
                    </div>
                </div>
                <p>{project.synopsis}</p>
            </div>
        </div>
    );
};

export default ProjectPreview;
