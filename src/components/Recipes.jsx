import "../css/recipes.scss";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Recipe from "./Recipe";

export default function Recipes() {
    return <>
        <div className="container">
            <div className="searchContent">
                <div className="searchBar">
                    <div className="inputHolder"><TextField sx={{width:"100%"}} label="Search for recipes"></TextField></div>
                    <div className="iconHolder"><SearchIcon sx={{color: "#474F85"}} /> </div>
                </div>

                <div className="mainContent">
                    <span>Search any recipe you want!</span>
                    <Recipe />
                </div>
            </div>
            <aside>salam</aside>
        </div>
    </>
}