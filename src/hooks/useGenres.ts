import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchDataResponse } from "../services/api-client";
import genres from "../data/genres";
import Genre from "../models/Genre";

const apiClient = new APIClient<Genre>("genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
