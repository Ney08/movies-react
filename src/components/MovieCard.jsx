import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({ movie }) {
    const imageUrl = getMovieImg(movie.poster_path, 300);
    const host = "/movies-react/";
    return (
        <Link to={`${host}movies/${movie.id}`}>
            <li className={styles.movieCard}>
                <img
                    width={300}
                    height={450}
                    className={styles.movieImage}
                    src={imageUrl}
                    alt={movie.title}
                />
                {movie.title}
            </li>
        </Link>
    );
}
