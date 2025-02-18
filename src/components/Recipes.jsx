import "../css/recipes.scss";
import Recipe from "./Recipe";
import Grid from '@mui/material/Grid2';
import { Pagination } from "@mui/material";
import { useState } from "react";
import { v4 as id } from 'uuid';
import SearchBar from "./SearchBar";
import Context from "./Context";
import { useContext } from "react";

export default function Recipes() {
    const [page, setPage] = useState(1);
    const [pivot, setPivot] = useState(9);
    const {items, setItems} = useContext(Context);

    return <>
        <div className="container">
            <div className="searchContent">
                <SearchBar />
                <div className="mainContent">
                    <span>Search any recipe you want!</span>
                    <Grid container sx={{marginBlockStart: 2}} rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 4 }}>

                        {items.slice((page - 1) * pivot, page * pivot)
                            .map((e) => 
                            (<Grid key={id()}> <Recipe title={e.title} image={e.image} summary={e.summary} /> </Grid>))
                            }

                    </Grid>
                </div>

                <div className="paginationContainer">
                    <Pagination sx={{marginBlockStart: 5}} onChange={(e, pageNumber) => setPage(pageNumber)} count={Math.ceil(items.length / pivot)} variant="outlined" shape="rounded" />
                </div>
            </div>
            <aside>salam</aside>
        </div>
    </>
}