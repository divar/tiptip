import {create} from 'zustand';
import {getAnimeVideos} from '@/api';
import {animeVideoParams, getAnimeVideoById, getAnimeVideoRecommendationById} from "@/api/anime";

export type TypeAnime = {

  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string
    }
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string
  };
  approved: true;
  titles: [
    {
      type: string;
      title: string
    }
  ];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: [
    string
  ];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: true;
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number
      };
      to: {
        day: number;
        month: number;
        year: number
      };
      string: string
    }
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string
  };
  producers: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string
    }
  ];
  licensors: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string
    }
  ];
  studios: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string
    }
  ];
  genres: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string
    }
  ];
  explicit_genres: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string
    }
  ];
  themes: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string
    }
  ];
  demographics: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string
    }
  ];
  relations: [
    {
      relation: string;
      entry: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string
        }
      ]
    }
  ];
  theme: {
    openings: [
      string
    ];
    endings: [
      string
    ]
  };
  external: [
    {
      name: string;
      url: string
    }
  ];
  streaming: [
    {
      name: string;
      url: string
    }
  ]
};
export type TypeRecommendation = {
  entry: {
    mal_id: number,
    url: string,
    images: {
      jpg: {
        image_url: string,
        small_image_url: string,
        large_image_url: string
      },
      webp: {
        image_url: string,
        small_image_url: string,
        large_image_url: string
      }
    },
    title: string
  }
};

export type TypePagination = {
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number
  };
  last_visible_page: number;
  has_next_page: boolean;
}

export type AnimeState = {
  animes: TypeAnime[];
  favouriteAnime: TypeAnime[];
  selectedAnime: TypeAnime | null;
  recommendedAnimes: TypeRecommendation[];
  pagination: TypePagination;
  getAnime: (page: number) => void;
  getAnimeById: (id: string) => void;
  setSelectedAnime: (anime: TypeAnime) => void;
  setAnimes: (animes: TypeAnime[]) => void
  addFavouriteAnime: (anime: TypeAnime) => void
  removeFavouriteAnime: (id: TypeAnime) => void
  getRecommendedAnimes: (id: string) => void;
}

export const animeStore = create<AnimeState>((set) => ({
  animes:               [],
  selectedAnime:        null,
  favouriteAnime:       [],
  recommendedAnimes:    [],
  setAnimes:            (animes: TypeAnime[]) => set({animes}),
  addFavouriteAnime:    (anime: TypeAnime) => set(state => ({favouriteAnime: [...state.favouriteAnime, anime]})),
  removeFavouriteAnime: (anime: TypeAnime) => set(state => {
    const index    = state.favouriteAnime.findIndex(item => item.mal_id === anime.mal_id);
    let copyArrays = [...state.favouriteAnime]
    if (index !== -1) {
      copyArrays.splice(index, 1);
    }

    return ({favouriteAnime: copyArrays});
  }),
  setSelectedAnime:     (selectedAnime: TypeAnime) => set({selectedAnime}),
  pagination:           {
    current_page:      1,
    items:             {
      count:    0,
      total:    0,
      per_page: 0,
    },
    last_visible_page: 0,
    has_next_page:     true,
  },
  getAnime:             (page: number) => {
    set({animes: []})
    let params: animeVideoParams = {
      page: page,
    };

    getAnimeVideos(params)
      .then(resp => {
        set({
          animes:     resp.data.data,
          pagination: {
            ...resp.data.pagination,
            current_page: page,
          }
        })
      })
  },
  getAnimeById:         (id: string) => {
    set({animes: [], selectedAnime: null})
    getAnimeVideoById(id)
      .then(resp => {
        set({
          selectedAnime: resp.data.data,
        })
      })
  },
  getRecommendedAnimes: (id: string) => {
    set({recommendedAnimes: []})
    getAnimeVideoRecommendationById(id)
      .then(resp => {
        set({recommendedAnimes: resp.data.data})
      })
  }
}));
