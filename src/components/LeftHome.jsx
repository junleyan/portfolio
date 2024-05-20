import { Box, Grid } from '@mui/material';
import { TypewriterTypography } from '../utils/utils';
import "../stylesheets/LeftHome.css";
import Avatar from '../assets/images/avatar.jpg';
import LocationPinIcon from '../assets/icons/location-pin.svg';
import EnvelopeIcon from '../assets/icons/envelope.svg';
import BankIcon from '../assets/icons/bank.svg';
import TagIcon from '../assets/icons/tag.svg';
import PhoneIcon from '../assets/icons/phone.svg'
import AboutMeLine from './AboutMeLine';

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
                    <img alt="avatar" src={Avatar} width="100" height="100" />
                </Grid>
                <Grid item>
                    <TypewriterTypography text="Hi, I'm Junle Yan" speed={75} />
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
    )
}

export default LeftHome;
