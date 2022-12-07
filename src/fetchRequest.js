
 export const bodyPartOptions = {
  
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Key': 'ef6fd39132msh8abe055cc29f896p12b893jsn8330c4edbff2',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };






  // Make the fetch request as a prop so that I can pass it to other components when the user makes an input.
export const fetchData = async ( url, options) => {
 
    const response = await fetch ( url, options);
    const data = await response.json();

    return data;
  
   
}

