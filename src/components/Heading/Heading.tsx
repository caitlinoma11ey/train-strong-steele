import styles from './Heading.module.scss';

export default function Heading({ mainHeading, subHeading, align = "center" }: HeadingProps) {

  function getHeading() { 
    if (mainHeading === "Meet Robina Steele") {
      return (
        <h2>
          Meet <span className={styles.meetRobina}>Robina Steele</span>
        </h2>
      );
    } 
    return <h2>{mainHeading}</h2>;
  }

  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      {getHeading()}
      <p className={styles.subHeading}>{subHeading}</p>
    </div>
  );
}