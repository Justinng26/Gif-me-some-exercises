import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchRequest.js";
import HorizontalScrollbar from "./HorizontalScrollbar.js";

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([]);

    // fetch the body part categories on page load (useEffect)
    useEffect(()  => {
        const fetchCategories = async () => {
            const categoriesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
           
        setBodyParts(['all', ...categoriesData])
        }

        fetchCategories();
        

    },[])

    const handleSearch = async () => {
        // if 'search' == true, fetch data
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            // Allow the user to search a body part, piece of equipment, body part etc.

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search) 
                || exercise.target.toLowerCase().includes(search) 
                || exercise.equipment.toLowerCase().includes(search) 
                ||exercise.bodyPart.toLowerCase().includes(search),
            );

            // re-set 'search' to an empty string
            setSearch('')
            setExercises(searchedExercises)
        }
    }

  return (
    <Stack
       alignItems="center"
       mt="37px"
       justifyContent="center"
       p="20px">

{/* Exercises you should know */}
          <Typography
                fontWeight={700}
                mb="50px"
                textAlign="center"
                sx={{
                    fontSize: {lg: '44px', xs: '30px'}}}>
            Awesome Exercises You <br /> Should Know
          </Typography>

{/* input field */}
          <Box position="relative" mb="72px">
            <TextField
                height="76px"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
                type="text"
                sx={{
                    input: {
                        fontWeight: '700',
                        border: 'none',
                        borderRadius: '4px'
                    },
                    width: {lg: '800px', md: '650px', sm: '450px', xs: '350px'},
                    backgroundColor: '#fff',
                    borderRadius:'40px'
                }}/>

{/* search button */}
            <Button className="search-btn"
                sx={{
                    backgroundColor: '#FF2625',
                    color: '#fff',
                    textTransform: 'none',
                    width: {lg: '175px', xs: '14px'},
                    fontSize: {lg: '20px', xs: '14px'},
                    height: '56px',
                    position: "absolute",
                    right: '0'
                }}
                onClick={handleSearch}>
            Search
            </Button>
          </Box>

{/* Horizontal scrollbar */}
          <Box
             sx={{ position:'relative', 
                   width:'100%', 
                   padding:'20px'}}>
             <HorizontalScrollbar
                    data= {bodyParts}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart} 
                    isBodyParts/>
          </Box>
    </Stack>
  )
}
export default SearchExercises