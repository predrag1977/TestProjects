import { useLocation} from "react-router-dom"
import { useFetchSingleLocation } from "../services/api/API"
import Header from "../components/Header"
import { LocationDetails } from "../components/LocationDetails"

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