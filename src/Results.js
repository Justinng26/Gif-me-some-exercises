import React from 'react'
import { useState, useEffect } from 'react';
import { exerciseOptions, fetchData } from './fetchRequest';

const Results = ({exercises, setExercises })=> {
    console.log(exercises);
  return (
    <div>
        <h2>Results:</h2>
        
        <p>

                {exercises.map((exercise, index) =>
            <p>{exercise.name}</p>
        )}
        </p>
        
        
        
        
          

    </div>
  )
}

export default Results;