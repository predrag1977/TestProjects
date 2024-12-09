import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Character } from "../types/Character";

export default function CharacterDetails({character}: Character | any)  {
    const navigate = useNavigate()
    
    return (
    <Card sx={{ width: 300, display: "inline-block", margin: "5px" }}>
        <CardMedia component='img' sx={{ height:250, objectFit: "contain" }} title={character.name} image={character.image} />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {character.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {`Status: ${character.status}`}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {`Species: ${character.species}`}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {`Gender: ${character.gender}`}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={(e) => {navigate("/location", {state:{locationUrl: character.location.url}})} }>Location</Button>
        </CardActions>
    </Card>
    )
} 

