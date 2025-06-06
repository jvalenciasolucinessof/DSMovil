import { PokemonMapper } from "../../../helpers/pokeApiMappers";
import { dragonBallApi } from "../../api/drabonball-api";


export const getDragonBall = async ({page =1, limit = 20}) => {
  try {
      const res = await dragonBallApi.get(`/characters?page=${page}`);
      // console.log('data', JSON.stringify(data.items, null, 2))
      if (!res.data || !res.data.items) {
        throw new Error('Invalid API response structure');
      }
      return res.data;
    } catch (error) {
      console.log('error', JSON.stringify(error.message, null, 2))
      throw error;
    }

  // try {
  //   const url = `characters?offset=${page * 10}&limit=${limit}`;
  //   const { data } = await dragonBallApi.get(url);
  //   return data;
  // } catch (error) {
  //   console.error("aca estamos en error", JSON.stringify(error.message, null, 2));
  //   throw new Error("Error al obtener los pokemones",error.message);
  // }
};
