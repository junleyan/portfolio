import { Box, Chip, Grid, Typography} from '@mui/material';

const Experience = (props) => {
    return (
        <Box>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                <Grid item xs={5}>
                    <Typography sx={{ fontWeight: "bold" }}>University of Hawai'i</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography fontSize='x-small'>Frontend Developer</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography fontSize='xx-small'>Oct 2023 - Present</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontSize='x-small'>
                        Maintained and contributed to the development of STAR GPS
                        , an easy-to-navigate registration system for undergraduate 
                        and graduate courses at the University of Hawai'i, utilized 
                        by over 18,000 students to facilitate timely graduation.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item><Typography fontSize='small'>Skills:</Typography></Grid>
                        <Grid item><Chip label='React.js' size='small' variant="outlined" sx={{ borderRadius: 0, color: 'white' }} /></Grid>
                        <Grid item><Chip label='Material UI' size='small' variant="outlined" sx={{ borderRadius: 0, color: 'white' }} /></Grid>
                        <Grid item><Chip label='Java' size='small' variant="outlined" sx={{ borderRadius: 0, color: 'white' }} /></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Experience;
