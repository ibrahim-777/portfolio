import { useState } from "react";
import {Box,IconButton,Typography,useTheme,useMediaQuery,Button} from "@mui/material";
import {DarkMode,LightMode,Menu,Close,} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import {useColorScheme} from '@mui/material/styles';
import './../index.css';
const Header = () =>{
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  const neutralLight = theme.palette.background.paper;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.default;
  // const darkBlue = '#04444e';
  const lightBlue = '#48cac0';
    const { mode, setMode } = useColorScheme();
    return (
    <FlexBetween padding="1rem 3%" bgcolor={alt}>
        <FlexBetween gap="1.75rem">
        <Typography fontWeight="bold" fontSize="clamp(1rem, 1.5rem, 2.25rem)" color={primaryLight}
          onClick={() => navigate("/")}
          sx={{
            "&:hover": {
              color: mode === 'light' ? primaryLight : lightBlue,
              cursor: "pointer"}}}>
                Ibrahim Karra</Typography>
        {/*mobile screen mode*/}
        </FlexBetween>
        {isNonMobileScreens && (
        <FlexBetween
            bgcolor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
          </FlexBetween>
        )}
        
      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          
          <Typography sx={{ fontSize: "15px",
          "&:hover": {
            color: mode === 'light' ? primaryLight : lightBlue,cursor: "pointer"},
            "&:active": { 
                borderBottom:`3px solid ${primaryLight}`} }}
          onClick={() => navigate("/AboutMe")} 
          >About</Typography>
          <Typography sx={{fontSize: "15px",
          "&:hover": {
            color: mode === 'light' ? primaryLight : lightBlue,cursor: "pointer"},
            "&:active": { 
                borderBottom:`3px solid ${primaryLight}`}  }} 
          onClick={() => navigate("/GraphicDesign")}
          >
            Graphics</Typography>
            <Typography sx={{ fontSize: "15px",
          "&:hover": {
            color: mode === 'light' ? primaryLight : lightBlue, 
            cursor: "pointer"},
            "&:active": { 
            borderBottom:`3px solid ${primaryLight}`}
        }}
          onClick={() =>{
            navigate("/Projects")}}
          >
            Projects</Typography>
            <Button sx={{ fontSize: "15px",
            backgroundColor:lightBlue,
            color:alt,
          "&:hover": {
            cursor: "pointer"} 
        }} onClick={() => navigate("/LogIn")}>Log in</Button>
            <IconButton onClick={() => { mode === 'light' ? setMode('dark') : setMode('light');}}>
            {mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: 'black' , fontSize: "25px" }} />
            )
            }
          </IconButton>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}
      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          bgcolor={background}>
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>
          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton onClick={() => { mode === 'light' ? setMode('dark') : setMode('light');}}
              sx={{ fontSize: "25px" }}>
              {mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{color: 'black', fontSize: "25px" }} />
              )}
            </IconButton>
            <Button sx={{ fontSize: "15px",
            backgroundColor:lightBlue,
            color:alt,
          "&:hover": {
            cursor: "pointer"} 
        }} onClick={() => navigate("/LogIn")}>Log in</Button>
            <Typography sx={{ fontSize: "15px" }}
          onClick={() => navigate("/AboutMe")} 
          >About Me</Typography>
          <Typography sx={{ fontSize: "15px" }} 
          onClick={() => navigate("/GraphicDesign")}
          >
            Graphics</Typography>
            <Typography sx={{ fontSize: "15px" }} 
          onClick={() => navigate("/Projects")}
          >
            Projects</Typography>
          </FlexBetween>
        </Box>
      )}
</FlexBetween>
    );
  };
  export default Header;