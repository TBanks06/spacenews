import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="217"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="caption" align="left" display="block" component="div">
          June 1st, 2021

          </Typography>
          <Typography gutterBottom variant="h6" align="left" component="div">
          Healthcare updates

          </Typography>
          <Typography variant="body1" align="left" gutterBottom>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography gutterBottom variant="h6" align="left" component="div">
          Read more

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}