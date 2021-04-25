import React from 'react';
import './map.css';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';
import mapLocal from '../../../img/map_bogo.png';

export default function Map(props) {
    const {city} = props;

    return (
        <React.Fragment>
            <Typography variant="h4" component="h1" className="localText">
                <RoomIcon/> {city}
            </Typography>
            <img src={mapLocal} className="mapLocal"/>
      </React.Fragment>
    );
}