import { Search } from "../components/Search";
import { MovieDetails } from "../components/MovieDetails"
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";

export function MovieDetailsSearch() {
    const [query] = useSearchParams();
    const search = query.get("search");
    const searchDebounce = useDebounce(search, 300);
    return (
        <div>
            <Search search={search} />
            <MovieDetails key={searchDebounce} search={search}/>
        </div>
    )
}
