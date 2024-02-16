import FlexBetween from "../Components/FlexBetween";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import image from './../../public/laptop.svg'
import {useEffect,useState} from 'react'
import Axios from 'axios';
import CardComponent from "./../Components/CardComponent";
import './../index.css'
import {Box,Typography,useTheme,useMediaQuery} from '@mui/material';
export default function Projects() {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const lightBlue = '#48cac0';
  const theme = useTheme();
  const alt = theme.palette.background.default;
  
  const [data, setData] = useState([]);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTNlNWQ2MzMwNWYxNzUxZGFjYTVlYyIsImlhdCI6MTcwNDIwNzk1NH0.brEqblqf-8UVXX35s6OSsaj29by80thI5viLUMrHDAY'
//   const formatter = new SimpleDateFormat("yyyy-MM-dd");
  const getPosters = async () => {
    try {
        const response = await Axios.get('https://ibrahim-portfolio-server.onrender.com/projects',
        {
        headers: { Authorization: `Bearer ${token}` }
      })
      setData(response.data)
   
    } catch (error) {
        console.log(error.message);
      } 
  }; 
  useEffect(()=> {
        getPosters()
        console.log('effect', data)
    },[])
  return (
    <div >
      <Header/>
      {isNonMobileScreens && (
        <Box className="bg">
          <FlexBetween style={{alignItems: "flex-start"}}>
    <Box sx={{margin: '4em 0 0 2em', width:'550px'}}>
    <Typography sx={{fontSize:"clamp(1rem, 2rem, 3rem)",fontWeight:'700'}}>
    Here Some Of my Projects</Typography>
    <Typography bgcolor={lightBlue} color={alt} padding={'10px'} marginTop={'1em'} textAlign={'justify'} width={'390px'}>My projects are based on Javascript Language with 2 frameWork
     ReactJs and AngularJs In Front End and NodeJs with Expressjs In Back End ,And I m Familiar with Microsoft SQL and MongoDB so I'm Full stack Development</Typography> 
</Box>
<Box sx={{marginRight: '7em', marginTop:'2em', width:'550px'}}>
  <img src={image} alt='' style={{width:'500px'}}/></Box>
  </FlexBetween>
<Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>

    {data.length > 0 ? (
        data.map( p => {  
    return(
    <CardComponent
     description={p.description} 
     title={'Ibrahim Karra'} 
     date={p.date}
     key={p.id} 
     link={p.link}
     image={p.picturePath}/>
     )
  }) 
  ):''}
 </Box>
</Box>
  )}
  {!isNonMobileScreens && (
    <Box  maxWidth={'1000px'} minWidth={'300px'}>
      
    <Box sx={{margin: '1em 0 0 1em', width:'400px',alignItems:'flex-start'}}>
    <Typography sx={{fontSize:"clamp(1.5rem, 2rem, 2.25rem)",fontWeight:'700'}}>
    Here Some Of my Projects</Typography>
    <Typography bgcolor={lightBlue} color={alt} padding={'10px'} marginTop={'1em'} textAlign={'justify'} width={'380px'}>My projects are based on Javascript Language with 2 frameWork
     ReactJs and AngularJs In Front End and NodeJs with Expressjs In Back End ,And I m Familiar with Microsoft SQL and MongoDB so I'm Full stack Development</Typography> 
</Box>
<Box margin={'auto 0'}>
    {data.length > 0 ? (
        data.map( p => {  
    return(
    <CardComponent
     description={p.description} 
     title={'Ibrahim Karra'} 
     date={p.date}
     key={p.id} 
     link={p.link}
     image={p.picturePath}/>
 )
  }) 
  ):''}
 </Box>
</Box>
  )}
      <Footer/>
    </div>
  )
}
