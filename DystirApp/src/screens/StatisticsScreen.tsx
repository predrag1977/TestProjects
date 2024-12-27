import { SafeAreaView } from "react-native";
import { Header } from "../components/Header";

export default function StatisticsScreen() {
    return(
        <SafeAreaView style={{backgroundColor:'#000', height: '100%'}}>
            <Header title={"Statistics"} />
        </SafeAreaView>
    )
}