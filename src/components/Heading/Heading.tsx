import styles from './Heading.module.scss';

export default function Heading({ mainHeading, subHeading }: HeadingProps) {
  return (
    <div className={styles.heading}>
      <h2>{mainHeading}</h2>
      <p className={styles.subHeading}>{subHeading}</p>
    </div>
  );
}