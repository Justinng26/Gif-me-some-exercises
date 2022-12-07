
import { useState } from 'react';
import { exerciseOptions, fetchData } from './fetchRequest.js';


const Search = ({setExercises}) => {

 const [search, setSearch] = useState('');

 const handleSearch = async () => {

    if(search) {

        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        const findExercises = exercisesData.filter((item) => 
           item.target.toLowerCase().includes(search)
        || item.bodyPart.toLowerCase().includes(search)
        );

        setSearch('');
        setExercises(findExercises);
    }
 }


  // Search bar

  return (
    <div>
        <h2>Exercises:</h2>
        <form>
             <input
                value={search}
                onChange = {(event) => setSearch(event.target.value.toLowerCase())}
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
