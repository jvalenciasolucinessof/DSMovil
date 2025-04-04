import { movieApi } from "../../api/movie-api";

export const getMovieById = async (id) => {
    try {
        const { data } = await movieApi.get(`/${id}`);
        // console.log(JSON.stringify(data,'0',2) )
        return data;
      } catch (error) {
        console.log('error', JSON.stringify(error, null, 2))
        throw error;
      }
}