import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { useState } from 'react';
import Context from "./Context";
import { useContext } from "react";

export default function SearchBar() {
    const {items, setItems} = useContext(Context);
    const [value, setValue] = useState("");
    const [numberOfResults, setNumberOfResults] = useState(30);
    const maxTries = 3;

    const Get = (value) => {

        const cachedData = localStorage.getItem(value);
        if (cachedData !== null) {
            setItems(cachedData);
            return;
        }

        const callLink = `https://api.spoonacular.com/recipes/complexSearch?apiKey=b0b55024a71b4578b4f082f56b028582&query=${value}&addRecipeNutrition=true&number=${numberOfResults}`;

        axios
        .get(callLink)
        .then((response) => {
            const result = response.data.results;
            localStorage.setItem(value, JSON.stringify(result));
            setItems(result);
            
            if (result.length === 30) setNumberOfResults(30);
        })

        .catch((e) => {
            console.log(e);
            setNumberOfResults(10);
            Get(value);
        });
    }

    return <>
        <div className="searchBar">
            <div className="inputHolder">
                <TextField sx={{width:"100%"}} label="Search for recipes" 
                            onKeyDown={(e) => {if (e.key.toLowerCase() === "enter") Get(e.target.value);}}
                            onChange={(e) => setValue(e.target.value)}>
                </TextField>
            </div>
            <div className="iconHolder" 
                onClick={() => Get(value)}>
                <SearchIcon sx={{color: "#474F85"}} />
            </div>
        </div>
    </>
}