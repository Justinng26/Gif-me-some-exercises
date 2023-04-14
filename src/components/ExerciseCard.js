import {Link} from 'react-router-dom';
import {Button, Stack, Typography} from '@mui/material';

const ExerciseCard = ({exercise}) => {
  return (
    <Link  to={`/exercise/${exercise.id}`}  className="exercise-card">
        <img 
          src={exercise.gifUrl} 
          alt={exercise.name} 
          loading="lazy" />

        <Stack direction="row">            
{/* body part */}
            <Button
                sx={{ ml:'21px',
                      color:'#fff',
                      background: '#ffa9a9',
                      fontSize: '14px',
                      borderRadius: '20px',
                      textTransform: 'capitalize'}}>
                {exercise.bodyPart}
            </Button>
{/* target muscle */}
            <Button
                sx={{ ml:'21px',
                      color:'#fff',
                      background: '#fcc757',
                      fontSize: '14px',
                      borderRadius: '20px',
                      textTransform: 'capitalize'}}>
                {exercise.target}
            </Button>
        </Stack>
    </Link>
  )
}
export default ExerciseCard