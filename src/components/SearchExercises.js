import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData } from "../fetchRequest";

const SearchExercises = () => {
    const [search, setSearch] = useState('')

    const handleSearch = async () => {
        // if 'search' == true, fetch data
        if (search) {
            const exercisesData = await fetchData
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
                onChange={(e) => setSearch(e.target.value.toLowerCase)}
                placeholder="Search Exercises"
                type="text"
                sx={{
                    input: {
                        fontWeight: '700',
                        border: 'none',
                        borderRadius: '4px'
                    },
                    width: {lg: '800px', xs: '350px'},
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
    </Stack>
  )
}
export default SearchExercises