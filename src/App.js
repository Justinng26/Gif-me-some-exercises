import './App.css';
import { useState } from 'react';
import { fetchData, exerciseOptions } from './fetchRequest.js';
import Search from './Search.js';
import Results from './Results.js';

function App() {

  const [exercises, setExercises] = useState([]);

  return (
    <div className="App">
      <h1>project 3</h1>
          <Search 
            setExercises={setExercises}
          />

          <Results
            exercises={exercises}
            setExercises={setExercises}
          />
    </div>
  );
}

export default App;



