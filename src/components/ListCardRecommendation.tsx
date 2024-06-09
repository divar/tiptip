import React from 'react';
import {Paper, Card, CardContent, Typography, CardHeader, CardMedia, Collapse, CardActions, IconButton} from '@mui/material';
import {animeStore as useAnimeStore, TypeAnime, TypeRecommendation} from "@/store/anime";
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


const ListCardComponent = ({recommendation}: { recommendation: TypeRecommendation }) => {
  const router                                           = useRouter()
  const [expanded, setExpanded]                          = React.useState(false);

  const navigateToDetail = (id: string) => {
    router.push(`/detail/${id}`);
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card sx={{width: 205}}>
      <CardHeader
        subheader={recommendation.entry.title}
        onClick={() => navigateToDetail(`${recommendation.entry.mal_id}`)}
        style={{cursor: 'pointer'}}
      />
      <CardMedia
        onClick={() => navigateToDetail(`${recommendation.entry.mal_id}`)}
        style={{cursor: 'pointer'}}
        component="img"
        height="150"
        image={recommendation.entry.images.jpg.image_url}
      />
    </Card>
  );
};

export default ListCardComponent;
