import React from 'react';
import './header.css';
import Paper from '@material-ui/core/Paper';
import Map from '../../widgetLocal/map/mapComponent';

export default function HeaderMobile(props) {
    const {city} = props;

    return (
        <React.Fragment>
            <Paper elevation={1} className="headMobile">
                <div className="LocalImage_sm">
                    <Map city={city}/>
                </div>
            </Paper>
      </React.Fragment>
    );
}