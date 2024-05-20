import { Box, Grid, Typography } from '@mui/material';
import "../stylesheets/LeftHome.css";

const AboutMeLine = (props) => {
    return (
        <Box item mb={0.75}>
            <Grid container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
            >
                <Grid item display='flex'>
                    <img src={props.icon} alt="icon" width="10" height="10" />
                </Grid>
                <Grid item display='flex'>
                    <Typography fontSize='x-small'>{props.info}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutMeLine;
