
import Header from "../components/Header";
import { useFetchCharacters } from "../services/loader/Loader";
import { Container, TextField } from "@mui/material";
import CharacterCard from "../components/CharacterCard";
import { Character } from "../types/Character";
import { useState } from "react";

export default function CharactersPage() {
    const {data} = useFetchCharacters()
    const [searchingText, setSearchingText] = useState("")

    return (
        <>
        <Header/>
        <Container sx={{width:"100%", textAlign:"right"}}>
            <TextField id="outlined-search" label="Search characters" type="search" sx={{margin:"10px"}} onChange={(e) => setSearchingText(e.target.value)} />
        </Container>
        <Container style={{width:"100%", textAlign:"center"}}>
        {
            filteredCharacters(data?.results, searchingText).map((character: Character) => 
                <CharacterCard key={character.id} character = {character} />
            )
        }
        </Container>
        </>
    )
}

const filteredCharacters = (characters: Character[] | undefined, searchingText: string) : Character[] => {
    const list = characters?.filter((character) => 
        character.name.toLowerCase().startsWith(searchingText.toLowerCase())
    )
    return list ?? []
}
  