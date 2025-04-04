import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../../../core/accion/movies/get-movie-by-id.accion";
import { getActorMovie } from "../../../core/accion/movies/get-actor-movie.accition";

export const useDetailMovie = (id) => {
    const detailMovie = useQuery({
        queryKey: ['detailmovie',id],
        queryFn: () => getMovieById(id),
        staleTime: 1000 * 60 * 60 * 24
    });
    const actorsMovie = useQuery({
        queryKey: ['actors',id],
        queryFn: () => getActorMovie(id),
        staleTime: 1000 * 60 * 60 * 24
    })
    return {detailMovie,actorsMovie };
};

