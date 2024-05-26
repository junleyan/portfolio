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
                            <Typography fontSize='x-large' sx={{ fontWeight: "bold" }}>{props.company}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontSize='regular'>{props.title}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2.5}>
                    <Typography fontSize='small'>{props.duration}</Typography>
                </Grid>
                {props.description && (
                    <Grid item xs={12}>
                        <Typography fontSize="large">{props.description}</Typography>
                    </Grid>
                )}
                {props.accomplishments?.map((accomplishment) => (
                    <Grid item xs={12}>
                        <Typography fontSize='regular'>&gt;&gt; {accomplishment}</Typography>
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                            <Typography>Skills:</Typography>
                        </Grid>
                        {props.skills?.map((skill) => (
                            <Grid item>
                                <Chip label={skill} variant="outlined" sx={{ borderRadius: 0, color: 'white' }} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Experience;
