// import {useState} from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";
  import {
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
  } from "react-share";
import {Card,Box,Typography,Stack,Divider,useMediaQuery} from '@mui/material';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
export default function Share({title,description,canceled}) {
    const url = window.location.href
    const font = '10px';
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Card variant="outlined" sx={{ 
        maxWidth: 345, 
        position: isNonMobileScreens ? 'absolute' : 'fix',
        top: '130%',
        width: '100%', 
        zIndex:'100',
        margin:'auto', 
        padding:'10px'
        }}>
  <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom fontSize={'1em'} margin={'auto'}>
            Share
          </Typography>
          <HighlightOffRoundedIcon onClick={()=>canceled()} fontSize='20px'/>
        </Stack>
        <Divider>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box margin={'10px 10px 10px 0'}>
            <FacebookShareButton url={`${url}/${title}`} quote={description}>
            <FacebookIcon width={'40px'} fontSize={'10px'} borderRadius={'50%'}/>
            </FacebookShareButton>
            <Typography fontSize={font}>Facebook</Typography>
            </Box>
            <Box margin={'10px'}>
            <TwitterShareButton  url={`${url}/${title}`} title={description}>
            <TwitterIcon width={'40px'} fontSize={'10px'} borderRadius={'50%'}/>
            </TwitterShareButton>  
            <Typography fontSize={font}>Twitter || X</Typography>
            </Box>
            <Box margin={'10px'}>
            <LinkedinShareButton url={`${url}/${title}`} title={description}>
            <LinkedinIcon width={'40px'} fontSize={'10px'} borderRadius={'50%'}/>
            </LinkedinShareButton>
            <Typography fontSize={font} >Linkedin</Typography>
            </Box>
            <Box margin={'10px'}>
            <WhatsappShareButton url={`${url}/${title}`} title={description}>
            <WhatsappIcon width={'40px'} fontSize={'10px'} borderRadius={'50%'}/>
            </WhatsappShareButton>
            <Typography fontSize={font} >Whatsapp</Typography>
            </Box>
            <Box margin={'10px 0 10px 10px'}>
            <TelegramShareButton url={`${url}/${title}`} title={description}>
            <TelegramIcon  width={'40px'} fontSize={'10px'} borderRadius={'50%'}/>
            </TelegramShareButton>
            <Typography fontSize={font}>Telegram</Typography>
            </Box>
            </Stack>
        </Divider>
    </Card>
  )
}
