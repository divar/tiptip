'use client'
import * as React from 'react';
import {
  Grid, Container, Card, CardContent, Typography
} from '@mui/material';
import {animeStore as useAnimeStore, TypeAnime} from '@/store/anime';
import ListCardComponent from '@/components/ListCard';

function Home() {
  const {favouriteAnime} = useAnimeStore();

  return (
    <Container sx={{mt: 7}}>
      <Grid container justifyContent="center" xs={40} spacing={5}>
        {
          favouriteAnime.length === 0 &&
          <Card sx={{ minWidth: 575}}>
            <CardContent sx={{flexGrow: 1}}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                No Favourite Movie yet
              </Typography>
            </CardContent>
          </Card>
        }
        {
          favouriteAnime.length > 0 &&
          favouriteAnime.map((value: any, i: any) => (
            <Grid key={i} item>
              <ListCardComponent
                anime={value}
              />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

export default Home;
