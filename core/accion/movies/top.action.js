import { movieApi } from "../../api/movie-api";

export const topAction = async ({page = 1, limit= 10}) => {
  try {
    const { data } = await movieApi.get("/top_rated",{params:{page:page}});
    return data.results;
  } catch (error) {
    console.log('error', JSON.stringify(error, null, 2))
    throw error;
  }
};

