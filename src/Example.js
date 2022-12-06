

const Example = ({exercise}) => {
  return (
    <div>
         <ul>
            <li>
                <img 
                  src={exercise.gifUrl} 
                  alt={exercise.name} 
                />
            </li>
        </ul>
        <h2>Body part: {exercise.bodyPart}</h2>
        <h2>Target Muscle: {exercise.target}</h2>
        <p>Name of Exercise: {exercise.name}</p>
        

    </div>
  )
}

export default Example;
