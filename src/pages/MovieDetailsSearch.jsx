import { Search } from "../components/Search";
import { useQuery } from "../hooks/useQuery";
import { MovieDetails } from "../components/MovieDetails"

export function MovieDetailsSearch() {
    const query = useQuery();
    const search = query.get("search");
    return (
        <div>
            <Search search={search} />
            <MovieDetails />
        </div>
    )
}
