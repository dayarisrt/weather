import React from 'react';
import './place.css';
import { Grid, Paper } from '@material-ui/core';

export default function Place() {

    return (
        <React.Fragment>
            <Grid item xs={12} sm={12} md={12}>
                <span className="subtitle">Place to</span> visit
                <Paper className="imgPlace">
                    
                </Paper>
            </Grid>
      </React.Fragment>
    );
}