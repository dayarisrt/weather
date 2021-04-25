import React from 'react';
import './header.css';
import Paper from '@material-ui/core/Paper';
import Map from '../../widgetLocal/map/mapComponent';

export default function Header(props) {
    const {city} = props;
    return (
        <React.Fragment>
            <Paper elevation={1} className="head">
                <div className="LocalImage_lg">
                    <Map city={city}/>
                </div>
            </Paper>
      </React.Fragment>
    );
}