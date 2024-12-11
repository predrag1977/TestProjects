import { useNavigate, useParams } from "react-router-dom";
import { useFetchSingleCharacter } from "../services/api/API";
import Header from "../components/Header";
import CharacterDetails from "../components/CharacterDetails";
import { Button, Typography } from "@mui/material";

export default function SingleCharacterPage() {
    const navigate = useNavigate()
    const { id } = useParams()
    const {data, isLoading}= useFetchSingleCharacter(id ?? "")

    return(
        <>
        {
            isLoading ? "LOADING..." : 
            <>
            <Header />
            <CharacterDetails character={data}  />
            <Typography gutterBottom variant="h5" component="div">Episodes</Typography>
            {
                data?.episode.map((episode: string) => 
                    <Button key={episode.split("/").pop()} size="small" onClick={() => {navigate(`/episode/${episode.split("/").pop()}`)} }>{episode.split("/").pop()}</Button>
                )  
            }
            </>
        }
        </>
        
    )
}