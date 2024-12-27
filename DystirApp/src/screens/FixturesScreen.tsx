import React from 'react'
import { SafeAreaView } from 'react-native'
import { Header } from '../components/Header'
import { useSelector } from 'react-redux'
import MatchesList from '../components/MatchesList'
import { styles } from '../styles/DystirStyle'

export default function FixturesScreen() {
    const fixtures = useSelector((state : any) => state.matchesSlice.fixtures)
    
    return (
        <SafeAreaView style={styles.safeArea}>
            <Header title={'Fixtures'} />
            <MatchesList matchesList={fixtures} />
        </SafeAreaView>
    )
}
