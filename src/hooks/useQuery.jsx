import { useLocation } from "react-router";

export function useQuery() {
    const { search } = useLocation();
    return new URLSearchParams(search);
}
