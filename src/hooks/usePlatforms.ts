import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms, next: "" },
  });

export default usePlatform;
