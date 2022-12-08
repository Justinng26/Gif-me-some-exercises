

import Example from './Example.js';

const Results = ({exercises, setExercises })=> {
    
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