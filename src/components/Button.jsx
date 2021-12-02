import styles from "./Button.module.css";
import { MdOutlineModeNight, MdOutlineLightMode } from "react-icons/md";

export function Button({ darkMode, setDarkMode }) {
    return (
        <div className={styles.Button}>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    id="dmcheck"
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
                <span className={`${styles.slider} ${styles.round}`}>
                    <MdOutlineModeNight className={styles.dark} size={30} />
                    <MdOutlineLightMode className={styles.light} size={30} />
                </span>
            </label>
        </div>
    );
}
