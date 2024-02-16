import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Posters from "../Components/Posters";
import {Box,Typography,useTheme,useMediaQuery} from '@mui/material';

export default function Graphics() {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const lightBlue = '#48cac0';
  const theme = useTheme();
  const alt = theme.palette.background.default;
  return (
    <div>
      <Header/>
      {isNonMobileScreens && (
        <Box>
    <Box sx={{margin: '2em 0 0 2em', width:'550px',alignItems:'flex-start'}}>
    <Typography sx={{fontSize:"clamp(2rem, 3rem, 4rem)",fontWeight:'700'}}>
    Here We Go Again</Typography>
    <Typography bgcolor={lightBlue} color={alt} textAlign={'center'} width={'390px'}>I am also a self-taught graphic designer</Typography> 
</Box>
<Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
<Posters/>
 </Box>
</Box>
  )}
  {!isNonMobileScreens && (
    <Box  maxWidth={'1000px'} minWidth={'300px'}>
    <Box sx={{margin: '2em 0 0 2em', width:'400px',alignItems:'flex-start'}}>
    <Typography sx={{fontSize:"clamp(1.5rem, 2rem, 2.25rem)",fontWeight:'700'}}>
    Here We Go Again</Typography>
    <Typography bgcolor={lightBlue} color={alt} textAlign={'center'} width={'300px'}>I am also a self-taught graphic designer</Typography> 
</Box>
<Box margin={'auto 0'}>
<Posters/>
 </Box>
</Box>
  )}
      <Footer/>
    </div>
  )
}
