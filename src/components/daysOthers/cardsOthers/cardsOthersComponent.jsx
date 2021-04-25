import React, {useEffect, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import './cardsOthers.css';
import Weather from '../../days/cards/weather/weatherComponent';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop:10,
    boxShadow:'none'
  },
}));

export default function CardDayOrther(props) {
  const classes = useStyles(); 
  const theme = useTheme();

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [weatherDescription, setWeatherDescription] = useState('');
  const [temp, setTemp] = useState('');

    useEffect(() => {
      setCity(props.city);
      setWeather(props.weather.main);
      setWeatherDescription(props.weather.description);
      setTemp(props.temp);
    }, [props]);

  return (
    <Paper elevation={3} className="dayTagOthers">
          <Card className={classes.root}>
              <CardMedia
              className="cardLeftOthers colorText"
              title="Live from space album cover"
            >
                <Weather weather={weather}/>
            </CardMedia>
            
            <CardMedia
              className="cardCenterOthers"
              title="Live from space album cover"
            >
                <span className="gradesOthers">{temp}°</span>
                <Typography variant="subtitle1" color="textSecondary">
                  {weatherDescription}
                </Typography>
            </CardMedia>

            <div className="detailsOthers">
              <CardContent className="content">
                <Typography component="h5" variant="h5">
                  {city}
                </Typography>
              </CardContent>
            </div>
          </Card>
          <Grid container component="main"  alignItems="center" justify="center" className="DetailGrid">
            <Grid item xs={4} sm={4} md={4}>Detail 1</Grid>
            <Grid item xs={4} sm={4} md={4}>Detail 2</Grid>
            <Grid item xs={4} sm={4} md={4}>Detail 3</Grid>
          </Grid>
     
    </Paper> 
  );
}