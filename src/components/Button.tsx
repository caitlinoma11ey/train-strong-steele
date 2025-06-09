import styles from "./Button.module.scss";

export default function Button({ text, action }: ButtonProps) {
  return (
    <button className={styles.button} onClick={action}>
      {text}
    </button>
  );
}

type ButtonProps = {
  text: string;
  action: () => void;
};