import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import Form from './Form.jsx'
const LoginPage = () =>{
  const {palette} = useTheme();
  const navigate = useNavigate()
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return (
    <Box>
       <Box
        width="100%"
        backgroundColor={palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color="primary"
          onClick={()=> navigate("/") }
        >
          Ibrahim Portfolio
        </Typography>
        </Box>
        <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Admin Side To create Posters and projects links
        </Typography>
        <Form />
      </Box>
    </Box>
    )
  }
  export default LoginPage;