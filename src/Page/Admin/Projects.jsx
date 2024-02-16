import {
    EditOutlined,
    DeleteOutlined,
    AttachFileOutlined,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined,
    // TextFields,
  } from "@mui/icons-material";
  import {
    Box,
    Divider,
    Typography,
    // InputBase,
    useTheme,
    Button,
    IconButton,
    useMediaQuery,
    TextField
  } from "@mui/material";

  import FlexBetween from "../../Components/FlexBetween";
  import Dropzone from "react-dropzone";
  // import UserImage from "../../Components/UserImage";
  import WidgetWrapper from "../../Components/WidgetWrapper";
  import { useState } from "react";
// import { Field } from "formik";

  const Projects = () => {

    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState(null);
    const [post, setPost] = useState("");
    const [link, setLink] = useState("");
    const { palette } = useTheme();
    const _id = '6593e5d63305f1751daca5ec';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTNlNWQ2MzMwNWYxNzUxZGFjYTVlYyIsImlhdCI6MTcwNDIwNzk1NH0.brEqblqf-8UVXX35s6OSsaj29by80thI5viLUMrHDAY'
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const mediumMain = palette.primary.main
    const medium = palette.primary.main
    const alt = palette.background.default;
    const handlePost = async () => {
      const formData = new FormData();
      formData.append("id", _id);
      formData.append("description", post);
      formData.append("link", link);
      if (image) {
        console.log(image)
        formData.append("picture", image);
        formData.append("picturePath",image.name
        );
      }
      const response = await fetch(`https://ibrahim-portfolio-server.onrender.com/projects`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const projects = await response.json();
      console.log(projects)
      setImage(null);
      setPost("");
      setLink("");
    };
  
    return (
      <>
      <WidgetWrapper>
      <Typography backgroundColor={medium} 
      textAlign={'center'}
      color={alt}
      padding={'10px'}
      maxWidth={'1130px'}
      fontWeight={'600'}
       margin={ '1em auto'}
  
       >You are Now in Projects Field</Typography>
          <TextField
            placeholder="Description"
            onChange={(e) => setPost(e.target.value)}
            value={post}
            sx={{
              width: "100%",
              backgroundColor: alt,
              borderRadius: "2rem",
              padding: "1rem 2rem",
            }}
          />

          <TextField
            placeholder="Link"
            onChange={(e) => setLink(e.target.value)}
            value={link}
            sx={{
              width: "100%",
              backgroundColor: alt,
              borderRadius: "2rem",
              padding: "1rem 2rem",
            }}
          />
        {isImage && (
          <Box
            border={`1px solid ${medium}`}
            borderRadius="5px"
            mt="1rem"
            p="1rem"
          >
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
            >
              {({ getRootProps, getInputProps }) => (
                <FlexBetween>
                  <Box
                    {...getRootProps()}
                    border={`2px dashed ${palette.primary.main}`}
                    p="1rem"
                    width="100%"
                    sx={{ "&:hover": { cursor: "pointer" } }}
                  >
                    <input {...getInputProps()} />
                    {!image ? (
                      <p>Add Image Here</p>
                    ) : (
                      <FlexBetween>
                        <Typography>{image.name}</Typography>
                        <EditOutlined />
                      </FlexBetween>
                    )}
                  </Box>
                  {image && (
                    <IconButton
                      onClick={() => setImage(null)}
                      sx={{ width: "15%" }}
                    >
                      <DeleteOutlined />
                    </IconButton>
                  )}
                </FlexBetween>
              )}
            </Dropzone>
          </Box>
        )}
  
        <Divider sx={{ margin: "1.25rem 0" }} />
  
        <FlexBetween>
          <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
            <ImageOutlined sx={{ color: mediumMain }} />
            <Typography
              color={mediumMain}
              sx={{ "&:hover": { cursor: "pointer", color: medium } }}
            >
              Image
            </Typography>
          </FlexBetween>
  
          {isNonMobileScreens ? (
            <>
              <FlexBetween gap="0.25rem">
                <GifBoxOutlined sx={{ color: mediumMain }} />
                <Typography color={mediumMain}>Clip</Typography>
              </FlexBetween>
  
              <FlexBetween gap="0.25rem">
                <AttachFileOutlined sx={{ color: mediumMain }} />
                <Typography color={mediumMain}>Attachment</Typography>
              </FlexBetween>
  
              <FlexBetween gap="0.25rem">
                <MicOutlined sx={{ color: mediumMain }} />
                <Typography color={mediumMain}>Audio</Typography>
              </FlexBetween>
            </>
          ) : (
            <FlexBetween gap="0.25rem">
              <MoreHorizOutlined sx={{ color: mediumMain }} />
            </FlexBetween>
          )}
  
          <Button
            disabled={!post}
            onClick={handlePost}
            sx={{
              color: alt ,
              backgroundColor: palette.primary.main,
              borderRadius: "3rem",
            }}
          >
            POST
          </Button>
        </FlexBetween>
      </WidgetWrapper>
      </>
    );
  };
  
  export default Projects;