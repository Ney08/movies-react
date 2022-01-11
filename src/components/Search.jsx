import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";

export function Search() {
    //const navigate = useNavigate();
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");

    const handleSubmit = (e) => e.preventDefault();

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Title"
                    aria-label="Search Movies"
                    value={search}
                    onChange={(e) => {
                        const value = e.target.value.trimStart();
                        setQuery({search: value});
                    }}
                />
                <div
                    onClick={() => {
                        setQuery({search: ""});
                    }}
                    className={`${styles.deleteButton} ${
                        search ? styles.display : styles.hidden
                    }`}
                >
                    <HiOutlineX />
                </div>
                <FaSearch className={styles.searchButton} size={20} />
            </div>
        </form>
    );
}
