import React, { useState } from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { SceneMap, TabBar, TabBarItem, TabView } from 'react-native-tab-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/DystirStyle'
import StandingsScreen from './StandingsScreen'
import MatchesScreen from './MatchesScreen'
import ResultsScreen from './ResultsScreen'
import StatisticsScreen from './StatisticsScreen'
import { Header } from '../components/Header'

const renderScene = SceneMap({
  summary: () => <StandingsScreen />,
  lineups: () => <MatchesScreen />,
  commentary: () => <ResultsScreen />,
  statistics: () => <StatisticsScreen />,
  standings: () => <StandingsScreen />
})

export default function MatchDetailsScreen(props: any) {
  const {route, navigation} = props
  const match = route.params

  const layout = useWindowDimensions()
  const [index, setIndex] = useState(0)

  const [routes] = useState([
    { key: "summary", title: "SUMMARY" },
    { key: "lineups", title: "LINEUPS" },
    { key: "commentary", title: "COMMENTARY" },
    { key: "statistics", title: "STATISTICS" },
    { key: "standings", title: "STANDINGS" }
  ])

  function renderTabBaritem (props: any) {
    console.log(props)
    return (<TabBarItem key={props.key}
      {...props}
      style={{margin:0, padding:0}}
      labelStyle={{fontSize:12, marginHorizontal:0, textAlign: "center", textTransform:"capitalize"}}
    />)
  }

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      renderTabBarItem={renderTabBaritem}
      indicatorStyle={{backgroundColor:'#40A81B'}}
      activeColor={'#40A81B'}
      inactiveColor={'#cacaca'}
      style={{ backgroundColor: '#000', borderColor: '#cacaca' }}
    />
  )

  return (
    <SafeAreaView style={styles.safeArea} >
        <Header title={match?.homeTeam + " - " + match?.awayTeam} showBackButton={true} />
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          initialLayout={{ width: layout.width }}
        />
    </SafeAreaView>
  )
}

