import FlexBetween from "./FlexBetween";
import {Typography,useTheme,useMediaQuery,Box} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CopyrightIcon from '@mui/icons-material/Copyright';
export default function Footer() {
    const navigate = useNavigate();
    const theme = useTheme();
    // const background = theme.palette.background.default;
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const alt = theme.palette.background.default;
  return (
    <Box>
      {isNonMobileScreens && (
       <FlexBetween padding="1rem 6%" marginTop={'2em'} borderTop={'0.5px solid gray'} bgcolor={alt}>
        <FlexBetween margin='auto' gap="2rem" >
          <Typography sx={{ fontSize: "15px",cursor:'pointer' }}
          onClick={() => navigate("/AboutMe")} 
          >About</Typography>
          <Typography sx={{ fontSize: "15px",cursor:'pointer' }} 
          onClick={() => navigate("/GraphicDesign")}
          >Graphics</Typography>
            <Typography sx={{ fontSize: "15px" ,cursor:'pointer'}} 
          onClick={() => navigate("/Projects")}
          >Projects</Typography>
        </FlexBetween>
        <FlexBetween padding="1rem 6%"  bgcolor={alt} >
        <CopyrightIcon sx={{fontSize: '15px'}}/>
        <Typography sx={{ fontSize: '13px', opacity:'0.5'}}>2023 ibrahim karra .All rights reserved</Typography>
        </FlexBetween>
      </FlexBetween>
      )}
      {
        !isNonMobileScreens && (
          <Box sx={{
          maxWidth:"1000px",
          minWidth:"300px"}}>
          <FlexBetween padding="1rem 3%" marginTop={'2em'} borderTop={'0.5px solid gray'} bgcolor={alt}>
        <FlexBetween margin='auto' gap="2rem" >
          <Typography sx={{ fontSize: "15px",cursor:'pointer' }}
          onClick={() => navigate("/AboutMe")} 
          >About</Typography>
          <Typography sx={{ fontSize: "15px",cursor:'pointer' }} 
          onClick={() => navigate("/GraphicDesign")}
          >Graphics</Typography>
            <Typography sx={{ fontSize: "15px" ,cursor:'pointer'}} 
          onClick={() => navigate("/Projects")}
          >Projects</Typography>
        </FlexBetween>
      </FlexBetween>
       <Box display={'flex'} justifyContent={'center'} padding="1rem 4%"  bgcolor={alt} >
       <CopyrightIcon sx={{fontSize: '15px'}}/>
       <Typography sx={{ fontSize: '13px', opacity:'0.5'}}>2023 ibrahim karra</Typography>
       </Box>
       </Box>
        )
      }
      </Box>
  )
}
