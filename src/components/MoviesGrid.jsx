import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { get } from "../utils/httpClients";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import { Empty } from "./Empty";

export function MoviesGrid({ search }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasmore] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search
            ? `/search/movie?query=${search}&page=${page}`
            : "/discover/movie?page=" + page;
        get(searchUrl).then((data) => {
            setMovies((prevMovies) => prevMovies.concat(data.results));
            setHasmore(data.page < data.total_pages);
            setIsLoading(false);
        });
    }, [search, page]);

    if (!isLoading && movies.length === 0) return <Empty />;

    return (
        <InfiniteScroll
            dataLength={movies.length}
            next={() => setPage((prevPage) => prevPage + 1)}
            hasMore={hasMore}
            loader={<Spinner />}
        >
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </InfiniteScroll>
    );
}
