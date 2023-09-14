import { Skill } from "@/data/skill-lib";
import styles from "./skills.module.scss";
import { Dot } from "lucide-react";
import variables from "../variables.module.scss";
import Link from "next/link";

type SkillProps = {
    skill: Skill;
    delay: string;
};

const SkillItem = ({ skill, delay }: SkillProps) => {
    return (
        <Link
            href={{
                pathname: "/projects",
                query: {
                    skill: skill.icon_url,
                },
            }}
        >
            <div
                className={styles.skill}
                style={{ ["animation-delay" as any]: delay }}
            >
                <div className={styles.skillInner}>
                    <img
                        src={`skills_icons/color/${skill.icon_url}.svg`}
                        alt={skill.name + " logo"}
                    />
                    <p>{skill.name}</p>
                    <div className={styles.proficiency}>
                        {/* <Dot stroke="#00ff88" strokeWidth={6} />
                    <Dot
                        stroke={skill.proficiency >= 2 ? "#00ffaa" : "none"}
                        strokeWidth={6}
                    />
                    <Dot
                        stroke={skill.proficiency >= 3 ? "#00ffcc" : "none"}
                        strokeWidth={6}
                    />
                    <Dot
                        stroke={skill.proficiency >= 4 ? "#00ffee" : "none"}
                        strokeWidth={6}
                    /> */}

                        <div
                            className={styles.dot}
                            style={{
                                backgroundColor: "#00ff88",
                            }}
                        ></div>
                        <div
                            className={styles.dot}
                            style={{
                                backgroundColor:
                                    skill.proficiency >= 2 ? "#00ffaa" : "none",
                            }}
                        ></div>
                        <div
                            className={styles.dot}
                            style={{
                                backgroundColor:
                                    skill.proficiency >= 3 ? "#00ffcc" : "none",
                            }}
                        ></div>
                        <div
                            className={styles.dot}
                            style={{
                                backgroundColor:
                                    skill.proficiency >= 4 ? "#00ffee" : "none",
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SkillItem;
