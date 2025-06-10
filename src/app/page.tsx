import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className={styles.heroSection}>
      <NavBar />
      <Header />
    </div>
  );
}
