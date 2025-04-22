import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPokemonById } from "../../../core/accion/pokemon/get-pokemon-by-id.action";


export const usePokemonsDetail = (idPokemon) => {

    const getPokemonByIdTQ = useQuery({
        queryKey:['pokemon',idPokemon],
        queryFn: () => getPokemonById(idPokemon),
        staleTime: 1000*60*60
    })
    return {getPokemonByIdTQ};
};

