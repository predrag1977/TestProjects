import { useParams } from "react-router-dom";
import { useFetchSingleCharacter } from "../services/loader/Loader";
import CharacterCard from "../components/CharacterCard";
import Header from "../components/Header";

export default function SingleCharacterPage() {
    const { id } = useParams()
    const {data, isLoading}= useFetchSingleCharacter(id ?? "")

    return(
        <>
        {
            isLoading ? "LOADING..." : 
            <>
            <Header />
            <CharacterCard key={data?.id} character = {data}  />
            </>
        }
        </>
        
    )
}