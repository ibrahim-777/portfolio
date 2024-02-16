import {useEffect,useState} from 'react'
import Axios from 'axios';
import CardComponent from "./CardComponent";
export default function Posters() {
    // const ThemeContext = createContext();
    const [data, setData] = useState([]);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTNlNWQ2MzMwNWYxNzUxZGFjYTVlYyIsImlhdCI6MTcwNDIwNzk1NH0.brEqblqf-8UVXX35s6OSsaj29by80thI5viLUMrHDAY'
//   const formatter = new SimpleDateFormat("yyyy-MM-dd");
  const getPosters = async () => {
    try {
        const response = await Axios.get('https://ibrahim-portfolio-server.onrender.com/posters',
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
    <>
    {data.length > 0 ? (
        data.map( poster => {  
    return(
    <CardComponent
     description={poster.description} 
     title={'Ibrahim Karra'} 
     date={poster.date}
     key={poster.id} 
     image={poster.picturePath}/>)
  }) 
  ):''}
  </>
  )}
