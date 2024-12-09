import { Card, CardContent, Container, Typography} from "@mui/material"
import { useFetchLocationCharacters } from "../services/loader/Loader"
import { Character } from "../types/Character"
import CharacterCard from "./CharacterCard"

export const LocationDetails = ({location}: Location | any) => {

    const { data, isLoading} = useFetchLocationCharacters(location)

    return (
        <>
        <Typography sx={{ margin: "5px" }} gutterBottom variant="h5" component="div">LOCATION</Typography>
        <Card sx={{ width: 300, display: "inline-block", margin: "5px" }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {location?.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {`Type: ${location.type}`}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {`Dimension: ${location.dimension}`}
                </Typography>
            </CardContent>
        </Card>
        <Container style={{width:"100%", textAlign:"center"}}>
        {
            isLoading ? "LOADING" : 
            data?.map((character: Character) => 
                <CharacterCard key={character.id} character = {character} />
            )
        }
        </Container>
        </>
    )
} 



