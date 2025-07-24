"use client";

import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Header.module.scss"

export default function Header() {
  const taglineWords: string[] = ["strength", "power", "best"];
  const [taglineIndex, setTaglineIndex] = useState(0);
  
  useEffect(() => { 
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const index = Math.floor(scrollY / 10);
      setTaglineIndex(Math.min(taglineWords.length - 1, index));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  // function onPageScroll() {
  //   const scrollY = window.scrollY;
  //   const index = Math.min(taglineWords.length - 1, Math.floor(scrollY / 1));
  //   setTaglineIndex(index);
  // }

  function onButtonClick() {}

  return (
    <div className={styles.headerContainer}>
      <div>
        <h1>
          Feel your{" "}
          <span className={styles.headerAccent}>
            {taglineWords[taglineIndex]}
          </span>
        </h1>
        <p className={styles.headerSecondaryTxt}>with Train Strong Steele</p>
      </div>
      <div className={styles.headerButtonContainer}>
        <Button text="Start your journey" action={onButtonClick} />
      </div>
    </div>
  );
}