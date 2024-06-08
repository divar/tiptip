'use client'
import * as React from 'react';
import {
  Grid, Container, Card, Box, CardHeader, Skeleton, IconButton, CardMedia, CardContent, CardActions, Collapse, Typography, Pagination, Stack, TextField,
  InputLabel, OutlinedInput
} from '@mui/material';
import {IconButtonProps} from '@mui/material/IconButton';
import {animeStore as useAnimeStore, TypeAnime} from '@/store/anime';
import {styled} from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {useRouter} from 'next/navigation'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const {expand, ...other} = props;
  return <IconButton {...other} />;
})(({theme, expand}) => ({
  transform:  !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Home() {
  const router                                           = useRouter()
  const {animes, getAnime, pagination, setSelectedAnime} = useAnimeStore();
  const [page, setPage]                                  = React.useState(pagination.current_page);
  const [jumpPage, setJumpPage]                          = React.useState(pagination.current_page);

  React.useEffect(() => {
    // Fetch the anime list when the component mounts
    getAnime(page);
  }, [getAnime, page]);

  const [expanded, setExpanded] = React.useState(new Array(animes.length).fill(false));

  const handleExpandClick = (i: number) => {
    let xp = [...expanded];
    xp[i]  = !expanded[i];
    setExpanded(xp);
  };

  const navigateToDetail = (anime: TypeAnime) => {
    setSelectedAnime(anime)
    router.push(`/detail/${anime.mal_id}`);
  }
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
              <Card sx={{width: 345}}>
                <CardHeader
                  title={value.title}
                  subheader={value.title_japanese}
                  onClick={() => navigateToDetail(value)}
                  style={{cursor: 'pointer'}}
                />
                <CardMedia
                  onClick={() => navigateToDetail(value)}
                  style={{cursor: 'pointer'}}
                  component="img"
                  height="150"
                  image={value.images.jpg.image_url}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {
                      !expanded[i] && value.synopsis &&
                      value.synopsis.substring(0, 200) + "..."}
                    <Collapse in={expanded[i]} timeout="auto" unmountOnExit>
                      {value.synopsis && value.synopsis}
                    </Collapse>
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <LeaderboardIcon/>
                  </IconButton>
                  <IconButton aria-label="share">
                    <Typography variant="body1" color="text.secondary">
                      {value.score}
                    </Typography>
                    <StarBorderIcon/>
                  </IconButton>
                  <ExpandMore
                    expand={expanded[i]}
                    onClick={() => handleExpandClick(i)}
                    aria-expanded={expanded[i]}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon/>
                  </ExpandMore>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

export default Home;
