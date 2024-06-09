import { api } from "@/api/connection";

export type animeVideoParams = {
  page: number
}

export function getAnimeVideos(params: animeVideoParams) {
  return api.get(`/v4/anime`, {
    params:           {
      page:      params.page,
    }});
}

export function getAnimeVideoById(id: string) {
  return api.get(`/v4/anime/${id}`);
}

export function getAnimeVideoRecommendationById(id: string) {
  return api.get(`/v4/anime/${id}/recommendations`);
}
