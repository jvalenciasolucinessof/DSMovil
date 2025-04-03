import { movieApi } from "../../api/movie-api";

export const upComingAction = async () => {
  try {
    const { data } = await movieApi.get("/upcoming");
    return data.results;
  } catch (error) {
    console.log('error', JSON.stringify(error, null, 2))
    throw error;
  }
};

