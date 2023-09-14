import Link from "next/link";
import styles from "./construction.module.scss";

const ExperiencePage = () => {
    return (
        <div className={styles.experienceWrapper}>
            <h3>Page under construction</h3>
            <p>
                In the meantime, check out{" "}
                <Link
                    href="/resume"
                    className={`textGradient ${styles.underline}`}
                >
                    my resumé
                </Link>{" "}
                to learn more!
            </p>
        </div>
    );
};

export default ExperiencePage;
