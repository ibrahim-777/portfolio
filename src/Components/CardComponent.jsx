import {useTheme,Typography,IconButton,CardActions,CardContent,CardMedia,CardHeader,Card} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Share from './Share';
import {useState} from 'react';
import UserImage from '../Components/UserImage';
import FlexBetween from '../Components/FlexBetween';
export default function CardComponent({title,description,date,image,link}) {
  const [show, setShow] = useState(false);
  const [isLiked, setLike] = useState(false);
  const [likeCount, SetlikeCount] = useState(0);
  const theme = useTheme();
  const alt = theme.palette.background.default;
  const lightBlue = '#48cac0';

  return (
    <div>
    <Card sx={{ width: 345, margin:'2em 1.5em' ,boxShadow:'5px 5px 7px gray'}}>
      <CardHeader
        avatar={
          <UserImage/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height='350'
        image={`https://ibrahim-portfolio-server.onrender.com/assets/${image}`}
        alt={description}
      />
      <CardContent>
        <Typography variant="body2" height={'50px'} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {link? (<IconButton>
          <GitHubIcon onClick={()=> window.open(`${link}`)} />
        </IconButton>):(
        <FlexBetween gap="0.3rem">
          <IconButton onClick={()=>{
            setLike(true);
            SetlikeCount(likeCount +1 )
           }
          }>
             {isLiked ? (<FavoriteIcon sx={{ color: lightBlue }} />) : (<FavoriteBorderOutlinedIcon />)}
           </IconButton>
           <Typography>{likeCount}</Typography>
         </FlexBetween>)
        }
        
        <IconButton aria-label="share">
          <ShareIcon onClick={()=>setShow(!show)}
          />
        </IconButton>
      </CardActions>
      {show && <Share display={'block'} canceled={()=>setShow(!show)} description={description} title={title}/>}
    </Card>
    
    </div>
  );
}
