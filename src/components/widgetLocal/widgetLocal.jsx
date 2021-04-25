import React, {useEffect, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './widgetLocal.css';
import Weather from '../days/cards/weather/weatherComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop:10,
    boxShadow:'none'
  },
}));

const days = 
    {
        weither: "cloud",
        city: "Bogotá",
        country: "Colombia",
        grade: 18
    };


export default function WidgetLocal(props) {
    const [weather, setWeather] = useState({});
    const [temp, setTemp] = useState('');

    useEffect(() => {
        setWeather(props.currentWeather.main);
        setTemp(props.temp);
    }, [props]);
  
    return (
        <div className="weitherWidgetLocal">
            <div elevation={3} className="localWeither weitherBox">
                <Weather weather={weather} color="iconWhite"/>
            </div> 
            <div elevation={3} className="gradeBox">
                <span className="textGradeBox">
                    {temp}°
                </span>
            </div> 
        </div>
    );
  }