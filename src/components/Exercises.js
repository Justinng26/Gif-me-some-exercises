import {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'

import {exerciseOptions, fetchData} from '../utils/fetchRequest.js';
import ExerciseCard from './ExerciseCard.js';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  return (
    <Box id="exercises"
      sx={{
        mt: {lg: '110px'}}}
        mt= "50px"
        p= "20px">

{/* Showing results */}
         <Typography variant="h3" mb="46px">
          Showing results
         </Typography>

{/* Exercise card */}
         <Stack 
            direction= "row"
            sx={{ gap: { lg: '110px', xs: '50px'}}}
            flexWrap="wrap"
            justifyContent="center">
            {exercises.map((exercise,index) => (
              <ExerciseCard
                key={index}
                exercise={exercise} />
            ))}
         </Stack>
        </Box>
  )
}
export default Exercises