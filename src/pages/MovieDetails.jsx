import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClients";
import styles from "./MovieDetails.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setIsLoading(false);
        });
    }, [movieId]);

    if (isLoading) {
        return <Spinner />;
    }

    const imageUrl = getMovieImg(movie.poster_path, 500);

    return (
        <div className={styles.detailsContainer}>
            <img
                className={`${styles.col} ${styles.movieImage}`}
                src={imageUrl}
                alt={movie.title}
            />

            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Title:</strong> {movie.title}
                </p>
                <p>
                    <strong className={styles.voteAverage}>
                        {movie.vote_average}
                    </strong>{" "}
                    {movie.vote_count} <IoPersonSharp />
                </p>
                <p>
                    <strong>Duration:</strong> {movie.runtime} min.{" "}
                </p>
                <p>
                    <strong>Genre:</strong>{" "}
                    {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p>
                    <strong>Description:</strong> {movie.overview}
                </p>
            </div>
        </div>
    );
}
