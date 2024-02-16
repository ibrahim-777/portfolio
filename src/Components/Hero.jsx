import '../index.css'
import {Box,Typography,useTheme,useMediaQuery} from '@mui/material';
import image from './WebDevelopment.svg';
import FlexBetween from './FlexBetween';
export default function Hero() {
    const theme = useTheme();
    const primarylight = theme.palette.primary.light
    const secondary = theme.palette.text.secondary
    const neutralLight = theme.palette.background.paper;
    const isNonMobileScreens = useMediaQuery("(min-width: 750px)");
    // const isMobileScreens = useMediaQuery("(min-width: 300px)");
  return (
    <Box>
      {isNonMobileScreens && (
        <FlexBetween>
        <Box  margin=' 4em 2rem' 
        maxWidth="500px"
        minWidth="300px">
      <Typography fontWeight="bold"
       fontSize="clamp(1rem, 2rem, 2.25rem)"
       justifyContent={'flex-start'}
       >
        Full Stack Developer and 
        <Typography fontWeight="bold"
       fontSize="clamp(1rem, 2rem, 2.25rem)"
       justifyContent={'flex-start'}
        bgcolor={primarylight}
        width={'360px'}
        color={neutralLight}
        paddingLeft={'15px'}
       >Graphic Designer</Typography>
        </Typography>
        <Typography 
        fontSize="clamp(0.5rem, 0.75rem, 1rem)" 
        marginTop={'1em'} 
        color={secondary} 
        justifyContent={'flex-start'}
        width='360px'>
            I m Ibrahim, a self-taught  junior web developer based in Tripoli,
            I m proficient in the MERN(MongoDB , Express.js , React.js , Node.js) stack. passionate about creating 
            user-friendly and innovative web applications.strong foundation in front-end and back-end development 
             </Typography>
             </Box>
             <img src={image} alt='userPhoto' style={{margin:'2.5em',width:'450px'}} />
             </FlexBetween>
      )}
      {!isNonMobileScreens && (
        
        <Box  margin='2rem 1.5em' maxWidth='500px'>
        <img src={image} alt='userPhoto' style={{margin:'2em 1em',width:'250px'}}/>
      <Typography fontWeight="bold"
       fontSize="clamp(1rem, 1.5rem, 2.25rem)"
       justifyContent={'flex-start'}
       >
        Full Stack Developer and 
        <Typography fontWeight="bold"
       fontSize="clamp(1rem, 1.5rem, 2.25rem)"
       justifyContent={'flex-start'}
        bgcolor={primarylight}
        maxWidth={'270px'}
        color={neutralLight}
        paddingLeft={'15px'}
       >Graphic Designer</Typography>
        </Typography>
        <Typography 
        fontSize="clamp(0.5rem, 0.75rem, 1rem)" 
        marginTop={'1em'} 
        color={secondary} 
        justifyContent={'flex-start'}
        width='300px'>
            I m Ibrahim, a self-taught  junior web developer based in Tripoli,
            I m proficient in the MERN(MongoDB , Express.js , React.js , Node.js) stack. passionate about creating 
            user-friendly and innovative web applications.strong foundation in front-end and back-end development 
             </Typography>
             </Box>
      )}
    </Box>
  )
}
