import { PokemonMapper } from "../../../helpers/pokeApiMappers";
import { pokeApi } from "../../api/poke-api";
export const getPokemons = async (page, limit = 20) => {
  try {
    const url = `/pokemon?offset=${page * 10}&limit=${limit}`;
    const { data } = await pokeApi.get(url);

    const pokemonPromises = data.results.map((info) => {
      return pokeApi.get(info.url);
    });

    const pokeApiPokemons = await Promise.all(pokemonPromises);
    const pokemonsPromises = pokeApiPokemons.map((item) =>
      PokemonMapper.pokeApiPokemonToEntity(item.data)
    );
    // console.log(pokemonsPromises[0])
    return await Promise.all(pokemonsPromises);
  } catch (error) {
    console.error("aca estamos en error", JSON.stringify(error.message, null, 2));
    throw new Error("Error al obtener los pokemones",error.message);
  }
};
