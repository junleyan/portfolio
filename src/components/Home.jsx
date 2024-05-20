import { Grid } from '@mui/material';
import LeftHome from './LeftHome';
import RightHome from './RightHome';

const Home = () => {
    return (
        <Grid container style={{ height: '100vh' }}>
            <Grid item xs={4}>
                <LeftHome />
            </Grid>
            <Grid item xs={8}>
                <RightHome />
            </Grid>
        </Grid>
    );
}

export default Home;
