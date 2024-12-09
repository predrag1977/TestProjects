import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Typography, Card, CardContent, Container } from "@mui/material";
import { useFetchSingleEpisode } from "../services/loader/Loader";
import { EpisodeCharacters } from "../components/EpisodeCharacters";

export default function EpisodePage() {
    const params = useParams()

    const {data, isLoading} = useFetchSingleEpisode(params.id ?? "")

    return (
        <>
        <Header />
        {
            isLoading ? "LOADING..." :
            <>
            <Typography sx={{ margin: "5px" }} gutterBottom variant="h5" component="div">EPISODE</Typography>
            <Card sx={{ width: 300, display: "inline-block", margin: "5px" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data?.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {`Date: ${data?.air_date}`}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {`Episode: ${data?.episode}`}
                    </Typography>
                </CardContent>
            </Card>
            <Container style={{width:"100%", textAlign:"center"}}>
            {
                <EpisodeCharacters episode={data}></EpisodeCharacters>
            }
            </Container>
            </>
        }
        </>
    )
}