import React from 'react';
import './days.css';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardDay from './cards/cardsComponent'

const days = [
    {
        weather: "sun",
        name: "Friday",
        description: "Detail 1",
        gradeFrom: 16,
        gradeTo:23
    },
    {
        weather: "cloud",
        name: "Saturday",
        description: "Detail 2",
        gradeFrom: 19,
        gradeTo:27
    },
    {
        weather: "rain",
        name: "Sunday",
        description: "Detail 3",
        gradeFrom: 15,
        gradeTo:19
    }
]

export default function Days() {

    return (
        <React.Fragment>
            <Grid item xs={12} sm={12} md={12}>
            <span className="subtitle">3 Days</span> Forocast
            {days &&
                days.map((day) =>(
                    <CardDay day={day} />
                ))
            }
            </Grid>
      </React.Fragment>
    );
}