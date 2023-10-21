import {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'

import {exerciseOptions, fetchData} from '../utils/fetchRequest.js';
import ExerciseCard from './ExerciseCard.js';

const Exercises = ({exercises, setExercises, bodyPart}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 10;

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate =(e,value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth'})
  }

  useEffect(()  => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
       } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
       }
       setExercises(exercisesData);
    }

    fetchExercisesData();

  },[bodyPart, setExercises]);

  return (
    <Box id="exercises"
      sx={{
        mt: {lg: '60px'}}}
        mt= "50px"
        p= "20px">

{/* Showing results */}
         <Typography variant="h3" mb="90px" ml="70px"
         fontSize={{ xs: '2rem', sm: '2.5rem', md:'3rem', lg: '3.5rem',}}
         >
          Showing results
         </Typography>

{/* Exercise card */}
         <Stack 
            direction= "row"
            sx={{ gap: { lg: '110px', xs: '50px'}}}
            flexWrap="wrap"
            justifyContent="center">
            {currentExercises.map((exercise,index) => (
              <ExerciseCard
                key={index}
                exercise={exercise} />
            ))}
         </Stack>

         <Stack mt="100px" alignItems="center">
            {exercises.length > 10 && (
              <Pagination
                 color="standard"
                 shape="rounded"
                 defaultPage={1}
                 count={Math.ceil(exercises.length /exercisesPerPage) }
                 page= {currentPage}
                 onChange={paginate}
                 size="large"/>
            )}

         </Stack>
        </Box>
  )
}
export default Exercises