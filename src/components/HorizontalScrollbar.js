import React, { useContext } from 'react';
import {  VisibilityContext, ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

// left arrow
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow" sx={{mb: 3}}>
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

// right arrow
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow"  sx={{mt: 3}}>
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart, isBodyParts }) => (

   <ScrollMenu 
  LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
          ml="190px"
        >
          
       {isBodyParts ? <BodyPart 
          item={item}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}/>
          : <ExerciseCard 
              exercise={item}/>}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;