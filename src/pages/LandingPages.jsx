import { useSearchParams } from "react-router-dom";
import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPages() {
    const [query] = useSearchParams();
    const search = query.get("search");
    const searchDebounce = useDebounce(search, 300);

    return (
        <div>
            <Search search={search} />
            <MoviesGrid key={searchDebounce} search={searchDebounce} />
        </div>
    );
}
