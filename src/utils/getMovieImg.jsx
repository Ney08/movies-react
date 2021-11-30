import placeholder from "../placeholder.jpg";

export function getMovieImg(path, w) {
    return path ? `https://image.tmdb.org/t/p/w${w}${path}` : placeholder;
}
