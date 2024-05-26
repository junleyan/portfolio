import { Grid } from '@mui/material';
import "../stylesheets/Home.css";
import LeftHome from './LeftHome';
import RightHome from './RightHome';

const Home = () => {
    return (
        <Grid container className='home-container'>
            <Grid item xs={4}>
                <LeftHome />
            </Grid>
            <Grid item xs={8} className='right-container'>
                <RightHome />
            </Grid>
        </Grid>
    );
}

export default Home;
