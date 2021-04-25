import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React, {useEffect, useState} from 'react';
import Hidden from '@material-ui/core/Hidden';
import './App.css';
import Days from './components/days/daysComponent';
import Place from './components/place/placeComponent';
import Header from './components/layouts/header/header';
import HeaderMobile from './components/layouts/header/headerMobile';
import DaysOthers from './components/daysOthers/daysOthersComponent';
import WidgetLocal from './components/widgetLocal/widgetLocal';
import {weatherByCity} from './components/api/api';

function App() {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState({});
  const [temp, setTemp] = useState('');

    useEffect(() => {
      getWeather();
    }, []);


  const getWeather = async () => {
      const response = await weatherByCity('bogota');
      if(response.msg === 200){
        setCity(response.data.name);
        setCurrentWeather(response.data.weather[0]);
        setTemp(response.data.main.temp);
      }
  }; 
  

  return (
    <Container maxWidth="lg" className="container">
      <Grid container component="main"  alignItems="center" justify="center">
        <Grid item xs={12} sm={12} md={12}>
          <WidgetLocal currentWeather={currentWeather} temp={temp}/>
          <Hidden only={['xs','sm']}>
            <Header city={city} />
          </Hidden>
          <Hidden only={['md', 'lg']}>
            <HeaderMobile city={city} />
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={12} md={12} container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <Days />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Place/>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <DaysOthers/>
          </Grid>
        </Grid>
      </Grid>
      
    </Container>
  );
}

export default App;
