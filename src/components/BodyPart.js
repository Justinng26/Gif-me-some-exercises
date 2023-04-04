import {Stack, Typography} from '@mui/material';
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, setBodyPart, BodyPart}) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="bodyPart-card"
        sx={{

        }}>
        <img 
          src={Icon}
          alt="dumbbell"
          styles={{
            width: '40px',
            height: '40px'
          }}/>
    </Stack>
  )
}
export default BodyPart