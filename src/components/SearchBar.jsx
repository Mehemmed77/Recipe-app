import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { useState } from 'react';
import Context from "./Context";
import { useContext } from "react";

export default function SearchBar() {
    const {items, setItems} = useContext(Context);
    const [value, setValue] = useState("");

    const Get = (value) => {
        if (localStorage.getItem(value) !== null) {
            setItems(JSON.parse(localStorage.getItem(value)));
            console.log(JSON.parse(localStorage.getItem(value)));
            return;
        }
        const callLink = `https://api.spoonacular.com/recipes/complexSearch?apiKey=b0b55024a71b4578b4f082f56b028582&query=${value}&addRecipeNutrition=true&number=30`;

        axios
        .get(callLink)
        .then((response) => {
            localStorage.setItem(value, JSON.stringify(response.data.results));
            setItems(response.data.results);
        })
        .catch((e) => console.log(e));
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