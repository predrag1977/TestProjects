import { Container } from "@mui/material"
import { useFetchEpisodeCharacters } from "../services/loader/Loader"
import { Character } from "../types/Character"
import CharacterCard from "./CharacterCard"
import { Episode } from "../types/Episode"

export const EpisodeCharacters = ({episode}: Episode | any) => {

    const { data, isLoading} = useFetchEpisodeCharacters(episode)

    return (
        <>
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



