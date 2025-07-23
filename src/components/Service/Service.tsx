import Image from "next/image";
import styles from "./Service.module.scss";

export default function Service({
  imgIndex,
  title,
  description,
  dotpoints,
  location,
  price,
}: ServiceProps) {
  return (
    <div className={styles.container}>
      <Image
        id={styles.image}
        src={`/images/services-${imgIndex}.jpg`}
        alt={`image of ${title}`}
        layout="responsive"
        width={300}
        height={200}
      />
      <div className={styles.content}>
        <div className={styles.nameAndPrice}>
          <p id={styles.name}>{title}</p>
          <p id={styles.pricePill}>${price}</p>
        </div>
        <p>{description}</p>
        <ul className={styles.dotpoints}>
          {dotpoints?.map((point, index) => {
            return <li key={index}>{point}</li>;
          })}
        </ul>
        <div className={styles.location}>
          <p><b>Location:</b> {location}</p>
        </div>
      </div>
    </div>
  );
}
