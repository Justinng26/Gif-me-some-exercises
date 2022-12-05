import React from 'react'
import { useEffect, useState } from 'react';
// import {Box, Button, TextField, Typography} from '@mui/icons-material';


import { exerciseOptions, fetchData } from './fetchRequest.js';


const Search = ({setExercises}) => {

 const [search, setSearch] = useState('');
//  const [exercises, setExercises] = useState([]);

 const handleSearch = async () => {
    if(search) {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

        //  console.log(exercisesData);

        const findExercises = exercisesData.filter((item) => 
           item.name.toLowerCase().includes(search)
        || item.target.toLowerCase().includes(search)
        || item.equipment.toLowerCase().includes(search)
        || item.bodyPart.toLowerCase().includes(search)
        );

        

        setSearch('');
        setExercises(findExercises);
    }
 }

  return (
    <div>
        <h2>Exercises:</h2>
        <form>

             <input
                value={search}
                onChange = {(e) => setSearch(e.target.value.toLowerCase())}
                placeholder = "Search Exercises"
                type= "text"
             />
        </form>
       

        <button onClick= {handleSearch}>
            Search:
        </button>

    </div>
  )
}

export default Search;
