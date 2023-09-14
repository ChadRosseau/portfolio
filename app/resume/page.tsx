import Head from "next/head";
import styles from "./resume.module.scss";

const ResumePage = () => {
    return (
        <div className={styles.resumeWrapper}>
            <iframe src="/pdfs/resume_1.pdf" />
        </div>
    );
};

export default ResumePage;
