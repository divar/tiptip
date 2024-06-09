'use client'
import * as React from 'react';
import {
  Grid, Container, Card, CardHeader, Skeleton, Pagination, Stack, TextField
} from '@mui/material';
import {animeStore as useAnimeStore, TypeAnime} from '@/store/anime';
import ListCardComponent from '@/components/ListCard';

function Home() {
  const {animes, getAnime, pagination, setSelectedAnime} = useAnimeStore();
  const [page, setPage]                                  = React.useState(pagination.current_page);
  const [jumpPage, setJumpPage]                          = React.useState(pagination.current_page);

  React.useEffect(() => {
    // Fetch the anime list when the component mounts
    getAnime(page);
  }, [getAnime, page]);

  return (
    <Container sx={{mt: 7}}>
      <Stack sx={{my: 4, alignItems: 'center'}} direction={'row'}>
        <Pagination
          sx={{}}
          count={pagination.items.total}
          color="primary"
          onChange={(event, page) => setPage(page)}
          page={pagination.current_page}/>
        <div>
          <TextField
            label="jump to page"
            id="outlined-size-small"
            type={"number"}
            size="small"
            sx={{width: 120}}
            onChange={(event) => setJumpPage(parseInt(event.target.value))}
            onKeyDown={(value) => {
              if (value.keyCode === 13) {
                setPage(jumpPage)
              }
            }}
          />
        </div>
      </Stack>
      <Grid container justifyContent="center" xs={40} spacing={5}>
        {
          animes.length === 0 &&
          ['s1', 's2', 's3'].map((value) => {
            return (
              <Grid key={value} item>
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
            )
          })
        }
        {
          animes.length > 0 &&
          animes.map((value: any, i: any) => (
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
