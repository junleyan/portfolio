import { Box, Divider, Grid } from '@mui/material';
import "../stylesheets/RightHome.css";
import Experience from './Experience';

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
                <Grid item><Divider sx={{ bgcolor: "white" }} /></Grid>          
                <Grid item>
                    <Experience />
                </Grid>
                <Grid item><Divider sx={{ bgcolor: "white" }} /></Grid>
            </Grid>
        </Box>
    )
}

export default RightHome;
