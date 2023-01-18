import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="217"
          image="https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="green iguana"
        />
        <CardContent>
          <IconButton type="button" sx={{ p: '5px' }} aria-label="calendar">
            <CalendarTodayOutlinedIcon />
        </IconButton>

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