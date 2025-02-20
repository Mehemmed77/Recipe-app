import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import dummyImg from "../imgs/dummy.png";
import { Button, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';

export default function Recipe ({title, image, summary = ""}) {
    const ref = useRef(null);

    useEffect((e) => {
        ref.current.innerHTML = summary.slice(0, 298) + "...Read More";
    },[])

    return <>
        <Card sx={{maxWidth: 345}}>
            <div style={{height:"200px"}}>
                <img src={image} alt={title} height={200} style={{width:"100%"}} />
            </div>
            <CardContent >
                <Typography gutterBottom variant="h5">
                    {title}
                </Typography>
                <Typography ref={ref} variant="body2" sx={{ color: 'text.secondary' }}>
                    {summary}
                </Typography>
            </CardContent>
            <CardActions>
                <div className='actions'> <FavoriteBorderIcon titleAccess="Add to Favorites" /> <PlaylistAddIcon titleAccess="Add to Saved" /> </div>
            </CardActions>
        </Card>
    </>
}