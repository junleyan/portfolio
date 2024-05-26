import { Box, Divider, Grid, Typography } from '@mui/material';
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
                <Grid item>
                    <Typography fontSize='xxx-large' sx={{ fontWeight: "bold" }}>Experiences</Typography>
                </Grid>
                <Grid item><ExperienceDivider/></Grid>
                <Grid item>
                    <Experience
                        company="University of Hawai'i"
                        title="Assistant Frontend Developer"
                        duration="Oct 2023 - Present"
                        description="Maintained and contributed to the development of STAR GPS
                                    , an easy-to-navigate registration system for undergraduate
                                    and graduate courses at the University of Hawai'i, utilized
                                    by over 18,000 students to facilitate timely graduation."
                        accomplishments={[
                            "Improved UI/UX, resulting in a significant decrease in user help center inquiries.",
                            "Conducted security vulnerability assessments on SQL procedures and API endpoints.",
                            "Performed software maintenances across the codebase."
                        ]}
                        skills={["React.js", "Material UI", "AngularJS", "Java"]} />
                </Grid>
                <Grid item><ExperienceDivider/></Grid>
                <Grid item>
                    <Experience
                        company="University of Hawai'i"
                        title="Data Center Technician"
                        duration="Sep 2023 - Oct 2023"
                        description="Provided support for daily operations at the University of 
                                    Hawai'i Information Technology Center, a facility that hosts 
                                    all of the University's enterprise information and 
                                    communication technology systems."
                        accomplishments={[
                            "Patched fiber optic connection to establish connections between server aisles.",
                            "Created diagrams using Microsoft Visio to document network connections."
                        ]}
                        skills={["MS Visio"]} />
                </Grid>
                <Grid item><ExperienceDivider/></Grid>
                <Grid item>
                    <Experience
                        company="Bishop Museum"
                        title="STEAM Museum Student Intern"
                        duration="Jun 2020 - Dec 2020"
                        accomplishments={[
                            "Conducted research on the geographical correlation between native Hawaiian land snail species and plants through the investigation of Hawaiian archives.",
                            "Leveraged GIS software to create maps illustrating the geographical correlation between native Hawaiian land snail species and plants.",
                            "Designed and implemented educational activities aimed to foster interest in natural sciences among museum visitors."
                        ]}
                        skills={["QGIS", "MS Excel"]} />
                </Grid>
                <Grid item><ExperienceDivider/></Grid>
            </Grid>
        </Box>
    );
}

export default RightHome;
