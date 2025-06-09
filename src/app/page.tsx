import styles from "./page.module.css";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className={styles.heroSection}>
      <NavBar />
      <Header />
    </div>
  );
}
