import React from 'react';
import ReactPlayer from 'react-player/youtube';
import {Paper, Card, CardContent, Typography, CardHeader, IconButton, CardActions} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {animeStore as useAnimeStore} from "@/store/anime";

const DetailComponent = ({cover, trailer, title, titleJapan, year, rating, synopsis, onFavoriteClicked, malId}: {
  cover: string,
  trailer: string | null | undefined,
  title: string,
  titleJapan: string,
  year: number,
  rating: number,
  synopsis: string,
  malId: number,
  onFavoriteClicked: () => void
}) => {
  const {favouriteAnime} = useAnimeStore();

  const isFav = favouriteAnime.findIndex(item => item.mal_id === malId) > -1;
  return (
    <Paper sx={{m:6}}>
      <Card>
        <img src={cover}  alt="Movie Cover" style={{width: '100%', height: '300px', objectFit: 'cover'}}/>
        {trailer && <ReactPlayer url={trailer} width="100%"/>}
        <CardHeader
          title={`${title} (${year})`}
          subheader={titleJapan}
        />
        <CardContent>
          <Typography variant="subtitle1" component="p">
            Rating: {rating}
          </Typography>
          <Typography variant="body2" component="p" color={'#505050'}>
            {synopsis}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton  aria-label="add to favorites" onClick={() => onFavoriteClicked()}>
            {
              !isFav &&
              <><FavoriteBorderIcon/> Add to favorites</>
            }
            {
              isFav &&
              <><FavoriteIcon color={'error'}/> Remove from favorites</>
            }
          </IconButton>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default DetailComponent;
