import { useParams } from "react-router-dom";
import { useFetchSingleCharacter } from "../services/loader/Loader";
import Header from "../components/Header";
import CharacterDetails from "../components/CharacterDetails";

export default function SingleCharacterPage() {
    const { id } = useParams()
    const {data, isLoading}= useFetchSingleCharacter(id ?? "")

    return(
        <>
        {
            isLoading ? "LOADING..." : 
            <>
            <Header />
            <CharacterDetails character={data}  />
            </>
        }
        </>
        
    )
}