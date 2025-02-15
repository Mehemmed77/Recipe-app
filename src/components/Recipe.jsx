import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import dummyImg from "../imgs/dummy.png";
import { Typography } from '@mui/material';

export default function Recipe () {
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
        </Card>
    </>
}