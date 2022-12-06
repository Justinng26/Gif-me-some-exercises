import React from 'react'
import { useState, useEffect } from 'react';
import { exerciseOptions, fetchData } from './fetchRequest';
import Example from './Example.js';

const Results = ({exercises, setExercises })=> {
    // console.log(exercises);
  return (
    <div>
        <h2>Results:</h2>
                <p>
                    {exercises.map((singleExercise, index)  =>   
                        <Example
                             key= {index}
                             exercise= {singleExercise}
                        />
                     )}
                </p>
            
    </div>
  )
}

export default Results;