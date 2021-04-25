import React, {useEffect, useState} from 'react';
import './daysOthers.css';
import { Grid } from '@material-ui/core';
import CardDayOthers from './cardsOthers/cardsOthersComponent';
import {weatherByCity} from '../../components/api/api';

const days = [
    {
        weither: "sun",
        city: "Paris",
        pais: "Francia",
        grade: 16
    }
]

export default function DaysOthers() {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [temp, setTemp] = useState('');

    useEffect(() => {
      getWeather();
    }, []);


  const getWeather = async () => {
      const response = await weatherByCity('french');
      if(response.msg === 200){
        setCity(response.data.name);
        setWeather(response.data.weather[0]);
        setTemp(response.data.main.temp);
      }
  }; 

    return (
        <React.Fragment>
            <Grid item xs={12} sm={12} md={12}>
            <span className="subtitle">3 Days</span> Forocast
            {days &&
                days.map((day) =>(
                    <CardDayOthers city={city} weather={weather} temp={temp} />
                ))
            }
            </Grid>
      </React.Fragment>
    );
}