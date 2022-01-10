import { Search } from "../components/Search";
import { MovieDetails } from "../components/MovieDetails"
import { useSearchParams } from "react-router-dom";

export function MovieDetailsSearch() {
    const [query] = useSearchParams();
    const search = query.get("search");
    return (
        <div>
            <Search search={search} />
            <MovieDetails />
        </div>
    )
}
