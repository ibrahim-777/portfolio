import FlexBetween from "../Components/FlexBetween";
import { Box ,Typography, useTheme} from "@mui/material";
import WidgetWrapper from "../Components/WidgetWrapper";
export default function Languages() {
    const theme = useTheme();
    const alt = theme.palette.background.default;
  return (
    <Box marginTop={'2em'}>
         <WidgetWrapper  sx={{
            width:'360px',
            "&:hover": { 
              border:'1px solid gray',
              backgroundColor:alt,
              boxShadow:'2px 10px 10px black'
            }
          }}>
          <Typography sx={{fontSize:'25px', fontWeight:'500', marginBottom:'1em'}}>Languages</Typography>
          <FlexBetween sx={{padding:'0 0.8em 1em' ,justifiContent:'flex-start'}}>
         <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>Arabic</Typography>
         <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>English</Typography>
         <Typography sx={{fontSize:'15px', fontWeight:'400',justifyContent: "flex-start"}}>French</Typography>
         </FlexBetween>
          </WidgetWrapper>
          </Box>
  )
}
