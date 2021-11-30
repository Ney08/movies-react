import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useEffect, useState } from "react";
import { HiOutlineX } from "react-icons/hi";

export function Search() {
    const host = "/movies-react/";
    const navigate = useNavigate();
    const query = useQuery();
    const search = query.get("search");

    const [searchtext, setSearchText] = useState("");
    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const handleSubmit = (e) => e.preventDefault();

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    autoFocus
                    placeholder="Title"
                    aria-label="Search Movies"
                    value={searchtext}
                    onChange={(e) => {
                        const value = e.target.value.trimStart();
                        navigate(`${host}?search=${value}`);
                        setSearchText(value);
                    }}
                />
                <div
                    onClick={() => {
                        setSearchText("");
                        navigate("");
                    }}
                    className={`${styles.deleteButton} ${
                        searchtext ? styles.display : styles.hidden
                    }`}
                >
                    <HiOutlineX />
                </div>
                <FaSearch className={styles.searchButton} size={20} />
            </div>
        </form>
    );
}
