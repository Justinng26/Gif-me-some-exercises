import { Box, Typography, Button } from "@mui/material"
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
   <Box sx={{
          mt: { lg: '212px', xs: '70px'},
          ml: { sm: '70px', xs: '70px'}
   }} position="relative" p="20px">

{/* Fitness Club */}
        <Typography 
            color="#FF2625"
            fontWeight="600"
            fontSize="26px">
        Fitness Club
        </Typography>

{/* Sweat, smile, repeat */}
        <Typography
            fontWeight={700}
            mb="23px"
            mt="30px"
            sx={{
                fontSize: { lg: '44px', xs: '40px'}
            }}>
            Sweat, Smile <br /> and Repeat
        </Typography>

{/* Check out these exercises */}
        <Typography
            fontSize="22px"
            lineHeight="35px"
            mb= {4}>
        Check out the most effective exercises
        </Typography>

{/* Exercise */}
        <Typography
            fontWeight={600}
            fontSize="200px"
            color="#ff2625"
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none'}}}>
        Exercise 
        </Typography>

{/* Button */}
        <Button
            variant="contained"
            color="error"
            href="#exercises"
            sx={{
                backgroundColor: "#ff2625",
                padding: '10px'}}>
        Explore Exercises
        </Button>

{/* hero banner img */}
        <img
          src= {HeroBannerImage}
          alt= "banner"
          className="hero-banner-img"
           />
   </Box>
  )
}
export default HeroBanner
