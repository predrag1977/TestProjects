import { useLocation} from "react-router-dom"
import { useFetchLocationCharacters, useFetchSingleLocation } from "../services/loader/Loader"
import Header from "../components/Header"
import { LocationDetails } from "../components/LocationDetails"
import { Typography, Card, CardContent, Container } from "@mui/material"
import CharacterCard from "../components/CharacterCard"
import { Character } from "../types/Character"

export default function LocationPage() {
    const {state} = useLocation()
    const { data, isLoading} = useFetchSingleLocation(state.locationUrl ?? "")
    
    return(
        <>
            <Header />
            {
                isLoading ? "LOADING" : 
                <LocationDetails location = {data}/>
            }
        </>
    )
}