import { FaSadTear } from "react-icons/fa";
import styles from "./Empty.module.css";

export function Empty() {
    return (
        <div className={styles.empty}>
            <p>No Results</p>
            <FaSadTear size={90} className={styles.sad} />
        </div>
    );
}
