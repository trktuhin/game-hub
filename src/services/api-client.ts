import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7590b84046f74f8781bcbf4344c19263",
  },
});

export interface FetchDataResponse<T> {
  count: number;
  results: T[];
}
