import axios from "axios";

export const dragonBallApi = axios.create({
  baseURL: "https://dragonball-api.com/api/",
});
