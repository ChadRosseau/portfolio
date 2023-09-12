import Image from "next/image";
import styles from "./page.module.scss";
import Navbar from "@/components/navbar/navbar";
import StarBackground from "@/components/stars/stars";

const Home = () => {
  return (
    <main className={styles.main}>
      {/* <a href='https://pngtree.com/so/code'>code png from pngtree.com/</a> */}
      <img src="images/home_graphic.png" alt="" />
    </main>
  );
};

export default Home;
