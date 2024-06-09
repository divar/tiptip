'use client'
import * as React from 'react';
import {Grid, Container, Card, Skeleton} from '@mui/material';
import {animeStore as useAnimeStore, TypeAnime} from '@/store/anime';
import DetailComponent from '@/components/DetailComponent';
import ListCardRecommendationComponent from "@/components/ListCardRecommendation";

export default function Detail({params}: { params: { id: string } }) {
  const {addFavouriteAnime, removeFavouriteAnime, favouriteAnime, selectedAnime, recommendedAnimes, getAnimeById, getRecommendedAnimes} = useAnimeStore();

  const processFavourite = () => {
    let isAnimeExistOnFavourite: boolean = favouriteAnime.findIndex(item => item.mal_id === selectedAnime?.mal_id) > -1;

    if (!isAnimeExistOnFavourite) {
      addFavouriteAnime(selectedAnime!)
    } else {
      removeFavouriteAnime(selectedAnime!)
    }
  }

  React.useEffect(() => {
    // Fetch the anime list when the component mounts
    getAnimeById(`${params.id}`);
    getRecommendedAnimes(`${params.id}`);
  }, [getAnimeById, getRecommendedAnimes, params.id]);

  return (
    <Container sx={{mt: 7}}>
      {
        !!selectedAnime &&
        <DetailComponent
          cover={selectedAnime.images.jpg.large_image_url}
          trailer={selectedAnime.trailer.url}
          title={selectedAnime.title}
          titleJapan={selectedAnime.title_japanese}
          year={selectedAnime.year}
          rating={selectedAnime.score}
          synopsis={selectedAnime.synopsis}
          malId={selectedAnime.mal_id}
          onFavoriteClicked={() => processFavourite()}
        />
      }
      <Grid container justifyContent="center" xs={40} spacing={5}>
        {
          recommendedAnimes.length === 0 &&
          <Grid item>
            <Card sx={{width: 345, p: 3}}>
              <Skeleton animation={'wave'} width="40%"/>
              <Skeleton animation={'wave'} width="60%"/>
              <Skeleton animation={'wave'} sx={{mt: 2}} variant="rectangular" width={'100%'} height={418}/>
              <Skeleton animation={'wave'} sx={{mt: 2}} width={'80%'}/>
              <Skeleton animation={'wave'} width={'100%'}/>
              <Skeleton animation={'wave'} width={'70%'}/>
              <Skeleton animation={'wave'} width={'70%'}/>
              <Skeleton animation={'wave'} variant="rectangular" sx={{mt: 2}} width={'100%'} height={30}/>
            </Card>
          </Grid>
        }
        {
          recommendedAnimes.length > 0 &&
          recommendedAnimes.map((recommendation: any, i: any) => (
            <Grid key={i} item>
              <ListCardRecommendationComponent
                recommendation={recommendation}
              />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}
