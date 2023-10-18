import { Box, Stack, Typography } from "@mui/material"
import HorizontalScrollBar from './HorizontalScrollbar.js'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '50px', xs: '0' }}}>

{/* Same muscle group */}
      <Typography variant="h3" mb={5} padding="30px 0" sx={{ ml: '70px' }}>
        Exercises that target the same muscle group:
      </Typography>

      <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ?<HorizontalScrollBar  data={targetMuscleExercises} />
        : <Loader />}
      </Stack>

{/* Same equipment */}
      <Typography variant="h3" mb={5} padding="30px 0" sx={{ ml: '70px' }}>
        Exercises that target the same equipment:
      </Typography>

      <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
        {equipmentExercises.length ?<HorizontalScrollBar  data={equipmentExercises} />
        : <Loader />}
      </Stack>
    </Box>
  )
}
export default SimilarExercises