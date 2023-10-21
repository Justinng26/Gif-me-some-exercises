import { Box, Stack, Typography } from "@mui/material"

const ExerciseVideos = ({ exerciseVideos, name }) => {

  

  if(!exerciseVideos.length) return 'Loading..'

  return (
    <Box sx={{ marginTop: { lg:'90px', xs:'20px'}}} p="20px">

      <Typography 
        variant="h3" 
        mb={{ lg:"90px", md:"50px", sm:"40px", xs:"20px"}} 
        sx={{ ml: '60px'}}
        fontSize={{ xs: '2rem', sm: '2.5rem', md:'3rem', lg: '3.5rem',}}
      >
        Watch&nbsp; 
         <span style={{color: '#ff2625',textTransform: 'capitalize'}}>
                {name}  
         </span> exercise videos
      </Typography>

      <Stack 
        justifyContent="center" 
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg:'row',
          md: 'row',
          xs:'column'},
          gap: { lg: '110px', xs:'0'}
        }}>

        {exerciseVideos?.slice(0,6).map((item, index) => {
          return (
              <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer">
              
              <img src={item.video.thumbnails[0].url}
                  alt={item.video.title} />

              <Box>
{/* Video title */}
                <Typography variant="h5" color="#000">
                  {item.video.title}
                </Typography>
{/* Channel title */}
                <Typography variant="h6" color="#000">
                  {item.video.channelName}
                </Typography>
              </Box>
              </a>
              );
            })}
      </Stack>
    </Box>
  )
}
export default ExerciseVideos