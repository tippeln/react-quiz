import styles from "./Display.module.css";

export default function Display({ children }) {
  return (
    <div className={styles.display}>
      問題文その１
      {children}
    </div>
  );
}
