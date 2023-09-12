import ProjectPreview from "./projectPreview";
import styles from "./projects.module.scss";
import { Project, projects } from "@/data/project-lib";

const ProjectsPage = () => {
    const makeDelay = (i: number) => {
        if ((i + 1) % 4 == 0) return i * 0.25 - 0.25;
        if ((i + 1) % 4 == 3) return i * 0.25 + 0.25;
        return i * 0.25;
    };

    return (
        <div className={styles.projectsWrapper}>
            {projects.map((project: Project, i: number) => {
                return (
                    <ProjectPreview
                        project={project}
                        delay={`${makeDelay(i)}s`}
                    />
                );
            })}
        </div>
    );
};

export default ProjectsPage;
