import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { nowPlayingAction } from "../../../core/accion/movies/now-playing.action";
import { popularAction } from "../../../core/accion/movies/popular.action";
import { topAction } from "../../../core/accion/movies/top.action";
import { upComingAction } from "../../../core/accion/movies/upcoming.action";


export const useMovies = () => {
    const NowPlayingQuery = useQuery({
        queryKey: ['movies','nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 //24 horas
    });
    const PopularQuery = useQuery({
        queryKey: ['movies','popular'],
        queryFn: popularAction,
        staleTime: 1000 * 60 * 60 * 24 //24 horas
    });
    const TopQuery = useInfiniteQuery({
        
        initialPageParam:1,
        queryKey: ['movies','top'],
        queryFn: ({pageParam}) => {
            return topAction({page: pageParam})
        },
        getNextPageParam:(lastPage,pages)=>pages.length + 1,
        staleTime: 1000 * 60 * 60 * 24 //24 horas
    });
    const UpComingQuery = useQuery({
        queryKey: ['movies','upcoming'],
        queryFn: upComingAction,
        staleTime: 1000 * 60 * 60 * 24 //24 horas
    });
    return {NowPlayingQuery,PopularQuery,TopQuery,UpComingQuery};
};

