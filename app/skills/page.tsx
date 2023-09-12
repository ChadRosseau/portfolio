import Head from "next/head";
import SkillGroup from "./skillGroup";
import styles from "./skills.module.scss";
import { Skills } from "@/data/skill-lib";

const SkillsPage = () => {
    return (
        <div className={styles.skillsWrapper}>
            <div className={styles.columnWrapper}>
                <div className={styles.skillsColumn}>
                    <SkillGroup
                        groupName="Frontend"
                        group={Skills.Frontend}
                        delay={0}
                    />
                    <SkillGroup
                        groupName="Frameworks"
                        group={Skills.Frameworks}
                        delay={2.5}
                    />
                    <SkillGroup
                        groupName="Mobile"
                        group={Skills.Mobile}
                        delay={4}
                    />
                </div>
                <div className={styles.skillsColumn}>
                    <SkillGroup
                        groupName="Backend"
                        group={Skills.Backend}
                        delay={0.5}
                    />
                    <SkillGroup
                        groupName="Database"
                        group={Skills.Database}
                        delay={1.5}
                    />
                    <SkillGroup
                        groupName="Technologies"
                        group={Skills.Technologies}
                        delay={3}
                    />
                </div>
                <div className={styles.skillsColumn}>
                    <SkillGroup
                        groupName="Cloud"
                        group={Skills.Cloud}
                        delay={1}
                    />
                    <SkillGroup
                        groupName="Other Languages"
                        group={Skills.Languages}
                        delay={2}
                    />
                    <SkillGroup
                        groupName="APIs"
                        group={Skills.APIs}
                        delay={3.5}
                    />
                </div>
            </div>
            <h5 className="textGradient">Click to filter</h5>
        </div>
    );
};

export default SkillsPage;
