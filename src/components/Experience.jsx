import { Box, Chip, Grid, Typography} from '@mui/material';

const Experience = (props) => {
    return (
        <Box>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1.5}
            >
                <Grid item xs>
                    <Grid container direction="row" spacing={4} alignItems="center">
                        <Grid item>
                            <Typography fontSize='x-large' sx={{ fontWeight: "bold" }}>University of Hawai'i</Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontSize='regular'>Frontend Developer</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2.5}>
                    <Typography fontSize='small'>Oct 2023 - Present</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontSize='large'>
                        Maintained and contributed to the development of STAR GPS
                        , an easy-to-navigate registration system for undergraduate 
                        and graduate courses at the University of Hawai'i, utilized 
                        by over 18,000 students to facilitate timely graduation.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item><Typography>Skills:</Typography></Grid>
                        <Grid item><Chip label='React.js' variant="outlined" sx={{ borderRadius: 0, color: 'white' }} /></Grid>
                        <Grid item><Chip label='Material UI' variant="outlined" sx={{ borderRadius: 0, color: 'white' }} /></Grid>
                        <Grid item><Chip label='Java' variant="outlined" sx={{ borderRadius: 0, color: 'white' }} /></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Experience;
