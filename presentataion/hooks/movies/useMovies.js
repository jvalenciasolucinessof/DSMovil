import { useQuery } from "@tanstack/react-query";
import { nowPlayingAction } from "../../../core/accion/movies/now-playing.action";


export const useMovies = () => {
    const NowPlayingQuery = useQuery({
        queryKey: ['movies','nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 //24 horas
    });
    return {NowPlayingQuery};
};

