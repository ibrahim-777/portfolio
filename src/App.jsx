import { ThemeProvider,
   createTheme,
   Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes , Navigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Home from "./Page/Home"
import AboutMe from "./Page/AboutMe"
import Admin from "./Page/Admin/Admin"
import Graphics from "./Page/Graphics"
import LoginPage from "./Page/logIn";
import Projects from "./Page/Projects"
import {useAuth} from './context/AuthContext';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
function App() {
  const {isLoggedIn} = useAuth();
  return (
    <>
     <ThemeProvider theme={darkTheme}>
     <CssVarsProvider>
      <CssBaseline />
      <BrowserRouter>
      <Routes>  
      <Route path="/" element={<Home/>}/>
      <Route path="/Projects"  element={<Projects/>}/>
      <Route path="/AboutMe"  element={<AboutMe/>}/>
      <Route path="/Admin" element={isLoggedIn ? <Admin/> : <Navigate to="/logIn" />}/>
      <Route path="/logIn" element={<LoginPage/>} />
      <Route path="/GraphicDesign"  element={<Graphics/>}/>
    </Routes>
    </BrowserRouter>
      </CssVarsProvider>
    </ThemeProvider>
    </>
  )
}
export default App