import Rating from '@mui/material/Rating';
import FlexBetween from "../Components/FlexBetween";
import { Typography, useTheme} from "@mui/material";
import WidgetWrapper from "../Components/WidgetWrapper";
export default function Technical() {
    const theme = useTheme();
    const alt = theme.palette.background.default;
  return (
    <FlexBetween margin={'0 2em '}>
        {/*//////////Soft Skills */}
    <WidgetWrapper  sx={{
        width:'400px',
        height:'300px',
        "&:hover": { 
          border:'1px solid gray',
          backgroundColor: alt,
          boxShadow:'2px 10px 10px black'
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
       <WidgetWrapper  sx={{
        width:'400px',
        height:'300px',
        "&:hover": { 
          border:'1px solid gray',
          backgroundColor:alt,
          boxShadow:'2px 10px 10px black'
        }
      }}>
     <Typography sx={{fontSize:'25px', fontWeight:'500', marginBottom:'1em'}}>Education</Typography>
     <Typography sx={{fontSize:'20px', fontWeight:'400',justifyContent: "flex-start"}}>
      Technical degree industrial maintenance (TS)
      </Typography>
      <FlexBetween margin={'2em 0'}>
     <Typography sx={{fontSize:'12px', fontWeight:'400',justifyContent: "flex-start"}}>
      I got the first place in the Lebanese official exams </Typography>
     <Typography sx={{fontSize:'10px', fontWeight:'300',justifyContent: "flex-start"}}>2019 - 2018</Typography>
     </FlexBetween>
      </WidgetWrapper>
       {/*///////////////////////////////////////////////Technicals */}
       <WidgetWrapper  sx={{
        width:'400px',
        height:'300px',
        "&:hover": { 
          border:'1px solid gray',
          backgroundColor:alt,
          boxShadow:'2px 10px 10px black'
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
      </FlexBetween>
  )
}
