import { CgSpinnerAlt } from "react-icons/cg";
import styles from "./Spinner.module.css";

export function Spinner() {
    return (
        <div className={styles.spinner}>
            <CgSpinnerAlt className={styles.spinning} size={60} />
        </div>
    );
}
