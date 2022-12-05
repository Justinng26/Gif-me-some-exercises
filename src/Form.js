import { useState } from "react";


const Form = (prop) => {


    const[userChoice, setUserChoice] = useState("")

    
    const handleChange = (event) => {
        setUserChoice( event.target.value);
    }

    const submitHandler = (event) => {
        prop.chooseBodyPart(event, userChoice);

        // make API call after user has submitted
        // prevent.default


    }


    return(
        <form onSubmit= {submitHandler}>
            <label htmlFor=""> Select body part: </label>
            <select
            id=""
            name=""
            onChange={ handleChange }
            value = {userChoice}
            >

                <option value="" disabled></option>
                <option value="abs">abs</option>
                <option value="back">back</option>
                <option value="chest">chest</option>
            </select>

        <button type="submit">Search Exercises</button>

        </form>
        
        
      
    )
}



 export default Form; 



// <div>
        //     {/* <h2>{prop.nameOfBodyPart}</h2>
        //     <img src={prop.gif} alt= {prop.name} /> */}
        // </div>