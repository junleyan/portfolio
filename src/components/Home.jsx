import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LeftHome from './LeftHome';
import "../stylesheets/Home.css";

const Home = () => {
    return (
        <Grid container style={{ height: '100vh' }}>
            <Grid item xs={4}>
                <LeftHome />
            </Grid>
            <Grid item xs={8}>
                <Box className="right-home">
                    <Typography variant="body">Right Side</Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Home;
