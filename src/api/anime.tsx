import { api } from "@/api/connection";

export type animeVideoParams = {
  page: number
}

export function getAnimeVideos(params: animeVideoParams) {
  return api.get(`/v4/anime/`, {
    params:           {
      page:      params.page,
    }});
}
