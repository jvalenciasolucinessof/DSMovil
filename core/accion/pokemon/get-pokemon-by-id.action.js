import { PokemonMapper } from "../../../helpers/pokeApiMappers";
import { pokeApi } from "../../api/poke-api";

export const getPokemonById = async (id) => {
  try {
    const {data} = await pokeApi.get(`/pokemon/${id}`)
    const pokemonDetail = await PokemonMapper.pokeApiPokemonToEntity(data)
    return await pokemonDetail;
  } catch (error) {
    console.error("aca estamos en error", JSON.stringify(error.message, null, 2));
    throw new Error("Error al obtener el pokemon",error.message);
  }
};
