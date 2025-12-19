"use client";

import SkillGroup from "./skillGroup";
import styles from "./skills.module.scss";
import { Skills } from "@/data/skill-lib";
import useCheckMobileScreen from "@/hooks/screenWidth";

const SkillsPage = () => {
	const isMobile = useCheckMobileScreen();

	return (
		<div className={styles.skillsWrapper}>
			<div className={styles.columnWrapper}>
				<div className={styles.skillsColumn}>
					<SkillGroup groupName="Frontend" group={Skills.Frontend} delay={0} />
					<SkillGroup
						groupName="Frameworks"
						group={Skills.Frameworks}
						delay={isMobile ? 0.5 : 2.25}
					/>
					<SkillGroup
						groupName="Mobile"
						group={Skills.Mobile}
						delay={isMobile ? 0.75 : 3.75}
					/>
				</div>
				<div className={styles.skillsColumn}>
					<SkillGroup
						groupName="Backend"
						group={Skills.Backend}
						delay={isMobile ? 1 : 0.5}
					/>
					<SkillGroup
						groupName="Database"
						group={Skills.Database}
						delay={isMobile ? 1.25 : 1.25}
					/>
					<SkillGroup
						groupName="Technologies"
						group={Skills.Technologies}
						delay={isMobile ? 1.75 : 2.75}
					/>
				</div>
				<div className={styles.skillsColumn}>
					<SkillGroup
						groupName="Cloud"
						group={Skills.Cloud}
						delay={isMobile ? 2 : 0.75}
					/>
					<SkillGroup
						groupName="Other Languages"
						group={Skills.Languages}
						delay={isMobile ? 2.25 : 1.75}
					/>
					<SkillGroup
						groupName="Integrations"
						group={Skills.APIs}
						delay={isMobile ? 2.5 : 3.25}
					/>
				</div>
			</div>
			<h5 className="textGradient">Click to filter</h5>
		</div>
	);
};

export default SkillsPage;
