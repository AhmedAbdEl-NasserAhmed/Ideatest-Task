import styles from "./MiniSpinner.module.scss";

export default function MiniSpinner() {
  return <span className={`${styles["loader"]} `}></span>;
}
