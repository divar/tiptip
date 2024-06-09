import React from 'react';
import {Paper, Card, CardContent, Typography, CardHeader, CardMedia, Collapse, CardActions, IconButton} from '@mui/material';
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {animeStore as useAnimeStore, TypeAnime} from "@/store/anime";
import {useRouter} from "next/navigation";
import {styled} from "@mui/material/styles";
import {IconButtonProps} from "@mui/material/IconButton";

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


const ListCardComponent = ({anime}: { anime: TypeAnime }) => {
  const router                                           = useRouter()
  const {animes, getAnime, pagination, setSelectedAnime} = useAnimeStore();
  const [expanded, setExpanded]                          = React.useState(false);

  const navigateToDetail = (anime: TypeAnime) => {
    setSelectedAnime(anime)
    router.push(`/detail/${anime.mal_id}`);
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card sx={{width: 345}}>
      <CardHeader
        title={anime.title}
        subheader={anime.title_japanese}
        onClick={() => navigateToDetail(anime)}
        style={{cursor: 'pointer'}}
      />
      <CardMedia
        onClick={() => navigateToDetail(anime)}
        style={{cursor: 'pointer'}}
        component="img"
        height="150"
        image={anime.images.jpg.image_url}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {
            !expanded && anime.synopsis &&
            anime.synopsis.substring(0, 200) + "..."}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {anime.synopsis && anime.synopsis}
          </Collapse>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <LeaderboardIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <Typography variant="body1" color="text.secondary">
            {anime.score}
          </Typography>
          <StarBorderIcon/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={() => handleExpandClick()}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon/>
        </ExpandMore>
      </CardActions>
    </Card>
  );
};

export default ListCardComponent;
