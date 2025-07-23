import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import Heading from "@/components/Heading/Heading";
import NavBar from "@/components/NavBar/NavBar";
import Service from "@/components/Service/Service";
import { services } from "../constants/constants"

export default function Home() {
  
  return (
    <>
      <div className={styles.heroSection}>
        <NavBar />
        <Header />
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.gridColumnLg}>
          <Heading
            mainHeading="Services"
            subHeading="Tailored coaching solutions to help you achieve your gooals"
          />
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div className={styles.servicesGridItem} key={index}>
              <Service
                key={index}
                imgIndex={index + 1}
                title={service.title}
                description={service.description}
                dotpoints={service.dotpoints}
                location={service.location}
                price={service.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
