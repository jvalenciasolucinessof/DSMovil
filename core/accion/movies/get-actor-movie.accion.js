import { movieApi } from "../../api/movie-api";

export const getActorMovie = async (id) => {
    try {
        const { data } = await movieApi.get(`/${id}/credits`);
        return data;
      } catch (error) {
        console.log('error', JSON.stringify(error, null, 2))
        throw error;
      }
}