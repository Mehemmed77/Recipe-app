import "../css/recipes.scss";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Recipe from "./Recipe";
import Grid from '@mui/material/Grid2';
import { Pagination } from "@mui/material";

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
                    <Grid container sx={{marginBlockStart: 2}} rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 4 }}>
                        <Grid>
                            <Recipe />
                        </Grid>
                        <Grid>
                            <Recipe />
                        </Grid>
                        <Grid>
                            <Recipe />
                        </Grid>
                        <Grid>
                            <Recipe />
                        </Grid>
                        <Grid>
                            <Recipe />
                        </Grid>
                        <Grid>
                            <Recipe />
                        </Grid>
                        <Grid>
                            <Recipe />
                        </Grid>
                        <Grid>
                            <Recipe />
                        </Grid>
                        <Grid>
                            <Recipe />
                        </Grid>
                    </Grid>
                </div>

                <div className="paginationContainer">
                    <Pagination sx={{marginBlockStart: 5}} count={10} variant="outlined" shape="rounded" />
                </div>
            </div>
            <aside>salam</aside>
        </div>
    </>
}