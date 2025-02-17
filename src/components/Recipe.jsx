import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import dummyImg from "../imgs/dummy.png";
import { Button, Typography } from '@mui/material';

export default function Recipe ({title, image, description}) {
    return <>
        <Card sx={{maxWidth: 345}}>
            <CardMedia sx={{ height: 200 }} image={dummyImg} />
            <CardContent >
                <Typography gutterBottom variant="h5">
                    Lorem ipsum dolor sit.
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <div className='actions'> <FavoriteBorderIcon titleAccess="Add to Favorites" /> <PlaylistAddIcon titleAccess="Add to Saved" /> </div>
            </CardActions>
        </Card>
    </>
}