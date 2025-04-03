import { movieApi } from "../../api/movie-api";

export const topAction = async () => {
  try {
    const { data } = await movieApi.get("/top_rated");
    return data.results;
  } catch (error) {
    console.log('error', JSON.stringify(error, null, 2))
    throw error;
  }
};

