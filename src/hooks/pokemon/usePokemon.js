import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPokemons } from "../../../core/accion/pokemon/get-pokemon.action";


export const usePokemons = () => {
    const getPokemonTQ = useInfiniteQuery({
        queryKey: ['pokemon','getPokemons','infinite'],
        initialPageParam: 0,
        queryFn: (params) => getPokemons(params.pageParam),
        getNextPageParam: (lastPage, pages) => pages.length,
        staleTime: 1000 * 60 * 60 * 24 //24 horas
    });
    return {getPokemonTQ};
};

