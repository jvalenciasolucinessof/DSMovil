import { movieApi } from "../../api/movie-api";

export const popularAction = async () => {
  try {
    const { data } = await movieApi.get("/popular");
    return data.results;
  } catch (error) {
    console.log('error', JSON.stringify(error, null, 2))
    throw error;
  }
};

