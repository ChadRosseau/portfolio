import { Skill } from "@/data/skill-lib";
import styles from "./skills.module.scss";
import SkillItem from "./skill";

type SkillGroupProps = {
  groupName: string;
  group: Skill[];
  delay: number;
};

const SkillGroup = ({ groupName, group, delay }: SkillGroupProps) => {
  return (
    <div className={styles.skillGroup}>
      <h4>{groupName}</h4>
      {group.map((skill, i) => {
        return (
          <SkillItem
            skill={skill}
            delay={`${i * 0.1 + delay + 2}s`}
          ></SkillItem>
        );
      })}
    </div>
  );
};

export default SkillGroup;
