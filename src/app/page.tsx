"use client";

import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import Heading from "@/components/Heading/Heading";
import NavBar from "@/components/NavBar/NavBar";
import Service from "@/components/Service/Service";
import { services } from "../constants/constants";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.heroSection}>
        <NavBar />
        <Header />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.clearContent}>
          <Heading
            mainHeading="Services"
            subHeading="Tailored coaching solutions to help you achieve your goals"
          />
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
        <div className={styles.darkContent}>
          <div className={styles.darkContentBody}>
            <div className={styles.aboutContainer}>
              <div className={styles.aboutContent}>
                <Heading
                  mainHeading="Meet Robina Steele"
                  subHeading="Your coach, nutritionist, and hype woman"
                  align="left"
                />
                <div className={styles.aboutInfo}>
                  <p>
                    Hi, I&#39;m Robina Steele — a personal trainer and
                    nutritionist established in 2001. My passion is to bring out
                    the best in every individual. I maintain a small client base
                    to ensure I deliver a high quality service and personal
                    relationship with every client.
                  </p>
                  <p>
                    My approach prioritises scientifically backed training,
                    injury prevention, and optimal health, ensuring you train
                    smarter and more effectively.
                  </p>
                  <div className={styles.aboutQualifications}>
                    <p>Qualifications:</p>
                    <ul>
                      <li>
                        Diploma of Health Science - University of Western Sydney
                        (registered nurse)
                      </li>
                      <li>
                        Master Trainer PT - Australian Institute of Finance
                      </li>
                      <li>Accredited nutritionist - Random Institution</li>
                      <li>Body building champion etc</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Image
                src="/images/headshot.jpg"
                alt="Robina Steele"
                width={390}
                height={480}
                className={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
