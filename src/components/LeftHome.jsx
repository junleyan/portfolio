import { Box, Grid } from '@mui/material';
import { TypewriterTypography } from '../utils/utils';
import "../stylesheets/LeftHome.css";
import AboutMeLine from './AboutMeLine';
import TagIcon from '../assets/icons/tag.svg';
import BankIcon from '../assets/icons/bank.svg';
import Avatar from '../assets/images/avatar.jpg';
import PhoneIcon from '../assets/icons/phone.svg';
import EnvelopeIcon from '../assets/icons/envelope.svg';
import LocationPinIcon from '../assets/icons/location-pin.svg';

const LeftHome = () => {
    return (
        <Box className="left-home">
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center" 
                spacing={3}
            >
                <Grid item>
                    <img alt="avatar" src={Avatar} width="300" height="300" />
                </Grid>
                <Grid item>
                    <TypewriterTypography text="Hi, I'm Junle Yan" speed={75} size='x-large' />
                </Grid>
                <Grid item>
                    <AboutMeLine icon={TagIcon} info={'Computer Science Undergraduate'}/>
                    <AboutMeLine icon={LocationPinIcon} info={'Honolulu, Hawaii'}/>
                    <AboutMeLine icon={EnvelopeIcon} info={<span>junleyan.hi<span>&#64;</span>gmail<span>&#46;</span>com</span>}/>
                    <AboutMeLine icon={PhoneIcon} info={'(808) 741-2586'}/>
                    <AboutMeLine icon={BankIcon} info={'University of Hawai\'i at Manoa'}/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default LeftHome;
