import { movieApi } from "../../api/movie-api";

export const nowPlayingAction = async () => {
  try {
    
    const { data } = await movieApi.get("/now_playing");
    return data.results;
  } catch (error) {
    console.log('error', JSON.stringify(error, null, 2))
    throw error;
  }
};

