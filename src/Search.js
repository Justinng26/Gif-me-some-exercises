
import { useState } from 'react';
import { bodyPartOptions, fetchData } from './fetchRequest.js';


const Search = ({setExercises}) => {

 const [search, setSearch] = useState('');

 const handleSearch = async () => {

    if(search) {

        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', bodyPartOptions);
        const getExercises = exercisesData.filter((item) => 
           item.target.toLowerCase().includes(search)
        || item.bodyPart.toLowerCase().includes(search)
        || item.equipment.toLowerCase().includes(search),
        );

        // reset 'search' to an empty string
        setSearch('');

        setExercises(getExercises);
    }
 }


  // Search bar

  return (
    <div>
        <h2>What body part would you like to train today?</h2>
        <h2>What equipment do you have available?</h2>
        <form>
             <input
                value={search}
                onChange = {(event) => setSearch(event.target.value.toLowerCase())}
                placeholder = "Search body part"
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
