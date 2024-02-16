import FlexBetween from "../Components/FlexBetween";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Image from "../Components/image";
import Rating from '@mui/material/Rating';
import { Box ,Typography,useTheme,useMediaQuery} from "@mui/material";
import WidgetWrapper from "../Components/WidgetWrapper";
import Technical from "../Components/Technical";
import Languages from "../Components/Languages";

export default function AboutMe() {
  const theme = useTheme();
  const alt = theme.palette.background.default;
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const img = 'http://localhost:5173/public/user.jpg'
  return (
    <Box >
        <Header/>
      {isNonMobileScreens && (
    <Box>
    <FlexBetween>
    <Box sx={{margin: '0 0 0 2em', width:'550px',alignItems:'flex-start'}}>
    <Typography sx={{marginLeft:'0.5em',fontSize:"clamp(2rem, 3rem, 4rem)",fontWeight:'700'}}>
    I’m Ibrahim Karra</Typography>  
    <Typography sx={{marginLeft:'0.5em',fontSize:"clamp(2rem, 3rem, 4rem)",fontWeight:'700'}}>
     The Human Machine.</Typography>  
     <WidgetWrapper textAlign={'justify'}>
     Self-taught Junior Web Developer proficient in the MERN (MongoDB, Express.js,
React.js, Node.js) stack. Passionate about creating user-friendly and innovative web
applications. Strong foundation in front-end and back-end development with
expertise in HTML5, CSS3, JavaScript, React.js, and Node.js. Familiar with NoSQL
databases and RESTful API design. Experience with Git and collaborative
development. Committed to delivering high-quality code and exceptional user
experiences. Seeking opportunities to contribute to a dynamic development team
and further enhance skills.
     </WidgetWrapper>
     <Languages/>
    </Box>
    <Box margin={'2em 3em 0 0'}>
    <Image rotate={3} Img={img} margin={'2em auto'} height={400}/>
    <Contact/>
    </Box>
    </FlexBetween>
    <Technical/>
</Box>
  )}
  {
   !isNonMobileScreens && (
    <Box>
    <Image rotate={3} Img={img} margin={'2em'} height={400}/>
    <Box sx={{margin: '0 0 0 2em', maxWidth:'450px',alignItems:'flex-start'}}>
    <Typography sx={{marginLeft:'0.5em',fontSize:"clamp(1rem, 2rem, 3rem)",fontWeight:'700'}}>
      I’m Ibrahim Karra. I live in Tripoli Lebanon,
       where I develope the earth.</Typography>  
     <WidgetWrapper>
     Self-taught Junior Web Developer proficient in the MERN (MongoDB, Express.js,
React.js, Node.js) stack. Passionate about creating user-friendly and innovative web
applications. Strong foundation in front-end and back-end development with
expertise in HTML5, CSS3, JavaScript, React.js, and Node.js. Familiar with NoSQL
databases and RESTful API design. Experience with Git and collaborative
development. Committed to delivering high-quality code and exceptional user
experiences. Seeking opportunities to contribute to a dynamic development team
and further enhance skills.
     </WidgetWrapper>
    </Box>
    <WidgetWrapper  sx={{
        width:'400px',
      }}>
    <Typography sx={{fontSize:'25px', fontWeight:'500'}}>Contacts</Typography>
    <Contact/>
    </WidgetWrapper>
    <Languages/>
    <WidgetWrapper  sx={{
        width:'360px',
        "&:hover": { 
          border:'1px solid gray',
          backgroundColor: alt,
          boxShadow:'2px 10px 10px black',
          margin:' 1em auto'
        }
      }}>
      <Typography sx={{fontSize:'25px', fontWeight:'500', marginBottom:'1em'}}>Soft Skills</Typography>
      <FlexBetween sx={{padding:'0 1em 1em'}}>
      <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start",}}>Problem-solving:</Typography>
      <Rating name="size-large" defaultValue={5}  readOnly size="large" />
      </FlexBetween>
      <FlexBetween  sx={{padding:'0 1em 1em'}}>
      <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>Adaptability :</Typography>
      <Rating name="size-large" defaultValue={5}  readOnly size="large" />
      </FlexBetween>
      <FlexBetween sx={{padding:'0 0.8em 1em'}}>
      <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>Attention to detail :  </Typography>
      <Rating name="size-large" defaultValue={5} readOnly size="large" />
      </FlexBetween>
      <FlexBetween sx={{padding:'0 1em 1em'}}>
      <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>Leadership :</Typography>
      <Rating name="size-large" defaultValue={5} readOnly size="large" />
      </FlexBetween>
       </WidgetWrapper>
       {/*///////////////////////////////////////////////Technicals */}
       <WidgetWrapper  sx={{
        width:'360px',
        "&:hover": { 
          border:'1px solid gray',
          backgroundColor:alt,
          boxShadow:'2px 10px 10px black',
          margin:'1em auto'
        }
      }}>
     <Typography sx={{fontSize:'25px', fontWeight:'500', marginBottom:'1em'}}>Technical Skills</Typography>
     <FlexBetween sx={{padding:'0 0.8em 1em'}}>
     <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>JavaScript</Typography>
     <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>React</Typography>
     <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>Angular</Typography>
     </FlexBetween>
     <FlexBetween sx={{padding:'0 0.8em 1em'}}>
     <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>NodeJs</Typography>
     <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>ExpressJs</Typography>
     <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>MongoDB</Typography>
     </FlexBetween>
     <FlexBetween sx={{padding:'0 0.8em 1em'}}>
     <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>Git</Typography>
     <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>GitHub</Typography>
     <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>RestAPI</Typography>
     </FlexBetween>
     <FlexBetween sx={{padding:'0 0.8em 1em' ,justifiContent:'flex-start'}}>
     <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>CSS</Typography>
     <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>SQL</Typography>
     <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>MUI</Typography>
     </FlexBetween>
      </WidgetWrapper>
</Box>
   ) 
  }
    <Footer/>
  </Box>
  )
}
