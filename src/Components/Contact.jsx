import { Typography,useTheme } from "@mui/material";
import WidgetWrapper from "../Components/WidgetWrapper";
import {useColorScheme} from '@mui/material/styles';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FlexBetween from "../Components/FlexBetween";
import {EmailShareButton} from "react-share";
export default function Contact() {
    const theme = useTheme();
    const { mode, systemMode } = useColorScheme();
    console.log(mode,systemMode)
    const primaryLight = theme.palette.primary.light;
    const primary = theme.palette.text.primary;
    const lightBlue = '#48cac0';
  return (
<WidgetWrapper>
      {/* <Typography sx={{fontSize:'25px',borderLeft:'0.5px solid gray', paddingLeft:'10px'}}>Contact</Typography> */}
      <FlexBetween sx={{justifyContent:'flex-start',
      color:primary,
      "&:hover": {
              color: mode === 'light' ? primaryLight : lightBlue,
              cursor: "pointer"
            }
              }}>
      <PhoneAndroidIcon sx={{fontSize:'25px', margin:'0 10px'}}/>
      <Typography sx={{fontSize:'13px'}}>+961 79105747</Typography>
      </FlexBetween>
      <FlexBetween sx={{
      justifyContent:'flex-start',
      justifyItems:'center',
      margin:'20px 0',
      color:primary,
      "&:hover": {
              color: mode === 'light' ? primaryLight : lightBlue,cursor: "pointer"}}}>
      <InstagramIcon sx={{fontSize:'25px', margin:'0 10px'}}/>
      <Typography onClick={()=>window.open('https://www.instagram.com/ibrahimkarra/?next=%2F')} sx={{fontSize:'13px'}}>Follow on Instagram</Typography>
      </FlexBetween>
      <FlexBetween sx={{
      justifyContent:'flex-start',
      justifyItems:'center',
      margin:'20px 0',
      color:primary,
      "&:hover": {
              color: mode === 'light' ? primaryLight : lightBlue,cursor: "pointer"}}}>
      <LinkedInIcon sx={{fontSize:'25px', margin:'0 10px'}}/>
      <Typography onClick={()=>window.open('https://www.linkedin.com/in/ibrahim-karra-87a72b25b/')} sx={{fontSize:'13px'}}>Follow on LinkedIn</Typography>
      </FlexBetween>
      <FlexBetween sx={{
      justifyContent:'flex-start',
      justifyItems:'center',
      margin:'20px 0',
      color:primary,
      "&:hover": {
              color: mode === 'light' ? primaryLight : lightBlue,cursor: "pointer"}}}>
      <GitHubIcon sx={{fontSize:'25px', margin:'0 10px'}}/>
      <Typography onClick={()=>window.open('https://github.com/ibrahim-777')} sx={{fontSize:'13px'}}>Follow on GitHub</Typography>
      </FlexBetween>
      <hr style={{width:'300px',color:'gray', margin:'0 10px'}}/>
      <FlexBetween sx={{
      justifyContent:'flex-start',
      justifyItems:'center',
      margin:'20px 0',
      color:primary,
      "&:hover": {
              color: mode === 'light' ? primaryLight : lightBlue,cursor: "pointer"}}}>
      <EmailIcon sx={{fontSize:'25px', margin:'0 10px'}}/>
      <EmailShareButton sx={{fontSize:'13px'}}>ibrahim.karra@gmail.com</EmailShareButton>
      </FlexBetween>
    </WidgetWrapper>
  )
}
