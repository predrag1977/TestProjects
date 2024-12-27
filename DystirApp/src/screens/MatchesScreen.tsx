import React from "react";
import { SafeAreaView} from 'react-native';
import { useSelector } from 'react-redux'
import { Header } from '../components/Header'
import MatchesList from "../components/MatchesList"
import { styles } from "../styles/DystirStyle";

export default function MatchesScreen() {
    const matches = useSelector((state : any) => state.matchesSlice.matches)

    return (
        <SafeAreaView style={styles.safeArea} >
            <Header title={'Matches'} />
            <MatchesList matchesList={matches} />
        </SafeAreaView>
    )
}

