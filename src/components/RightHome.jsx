import { Box, Divider, Grid } from '@mui/material';
import "../stylesheets/RightHome.css";
import Experience from './Experience';

const ExperienceDivider = () => {
    return (
        <Divider className="divider" />
    );
};

const RightHome = () => {
    return (
        <Box className="right-home">
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
                ml={7}
                mr={10}
            >
                <Grid item><ExperienceDivider/></Grid>
                <Grid item>
                    <Experience
                        company="University of Hawai'i"
                        title="Frontend Developer"
                        duration="Oct 2023 - Present"
                        description="Maintained and contributed to the development of STAR GPS
                                    , an easy-to-navigate registration system for undergraduate
                                    and graduate courses at the University of Hawai'i, utilized
                                    by over 18,000 students to facilitate timely graduation."
                        skills={["React.js", "Material UI", "AngularJS", "Java"]} />
                </Grid>
                <Grid item><ExperienceDivider/></Grid>
            </Grid>
        </Box>
    );
}

export default RightHome;
