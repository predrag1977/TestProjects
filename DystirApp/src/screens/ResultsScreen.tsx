import React from 'react'
import { SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import { Header } from '../components/Header'
import MatchesList from '../components/MatchesList'
import { styles } from '../styles/DystirStyle'

export default function ResultsScreen() {
    const results = useSelector((state : any) => state.matchesSlice.results)

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header title={'Results'}/>
            <MatchesList matchesList={results} />
        </SafeAreaView>
    );
}
