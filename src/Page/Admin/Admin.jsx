import {
  // Box,
  Button,
  // TextField,
  // useMediaQuery,
  // Typography,
  useTheme
} from "@mui/material";
import Posters from "./Posters";
import Projects from "./Projects";
import {useState} from 'react';
import Header from "../../Components/Header";
export default function Admin() {
  const [toggle, changeToggle] = useState(true);
  const { palette } = useTheme();
  return (
    <div>
     <Header/>
     <Button sx={{
                m: "1rem 1em 0 4rem",
                p: "0.5rem",
                backgroundColor: palette.primary.main,
                color: palette.background.default,
                "&:hover": { color: palette.primary.main },
              }} 
              onClick={()=> changeToggle(!toggle)} >Projects</Button>
     <Button sx={{
                m: "1rem 0 0",
                p: "0.5rem",
                backgroundColor: palette.primary.main,
                color: palette.background.default,
                "&:hover": { color: palette.primary.main },
              }} 
              onClick={()=> changeToggle(!toggle)} >Posters</Button>
     {toggle && <Posters/>}
     {!toggle && <Projects/>}
    </div>
  )
}
