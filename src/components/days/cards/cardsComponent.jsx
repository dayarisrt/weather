
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import './cards.css';
import Weather from './weather/weatherComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop:10
  },
}));

export default function CardDay(props) {
  const classes = useStyles(); 
  const theme = useTheme();
  const {weather, name, description, gradeFrom, gradeTo} = props.day;

  return (
    <Paper elevation={3} className="dayTag">

    <Card className={classes.root}>
        <CardMedia
        className="cardLeft"
        title="Live from space album cover"
      >
          <Weather weather={weather}/>
      </CardMedia>
      <div className="details">
        <CardContent className="content">
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className="cardRight colorText"
        title="Live from space album cover"
      >
          <span className="grades">{gradeFrom}° / {gradeTo}°</span>
      </CardMedia>
    </Card>
    </Paper> 
  );
}