import React, {useEffect, useState} from 'react';
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import GrainIcon from '@material-ui/icons/Grain';
import './weather.css';

export default function Weather(props) { console.log("prueba:"); console.log(props);
  const [weather, setWeather] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    setWeather(props.weather);
    setColor(props.color);
  }, [props]);

  return (
    <React.Fragment>
          {weather === 'Rain' ?
            <div>
              <GrainIcon fontSize="large" className={"iconLeft" + (color ? color : ' iconRain')}/>   
              
            </div>
          :weather === 'Clouds' ?
            <CloudIcon fontSize="large" className={"iconLeft " + (color ? color : ' iconCloud')}/>
          :weather === 'Clear' ?
              <div>
                <WbSunnyIcon fontSize="large" className={"iconLeft together_up" + (color ? color : ' iconSun')}/>
                <CloudIcon fontSize="large" className={"iconLeft together_down front" + (color ? color : ' iconCloud')}/>
              </div>
            :
            <WbSunnyIcon fontSize="large" className={"iconLeft " + (color ? color : ' iconSun')}/>
        }
    </React.Fragment>
  );
}