import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPages() {
    const query = useQuery();
    const search = query.get("search");
    const searchDebounce = useDebounce(search, 300);

    return (
        <div>
            <header>
                <Search search={search} />
            </header>
            <MoviesGrid key={searchDebounce} search={searchDebounce} />
        </div>
    );
}
