import { Box, Grid } from '@mui/material';
import "../stylesheets/RightHome.css";
import ExperienceSection from './ExperienceSection';

const RightHome = () => {
    return (
        <Box className="right-home">
            <Grid container
                direction="column"
                spacing={5}
            >
                <Grid item>
                    <ExperienceSection />
                </Grid>
            </Grid>
        </Box>
    );
}

export default RightHome;
