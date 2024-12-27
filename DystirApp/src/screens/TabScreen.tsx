import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useEffect } from 'react'
import { Image } from 'react-native'
import ResultsScreen from './ResultsScreen'
import MatchesScreen from './MatchesScreen'
import FixturesScreen from './FixturesScreen'
import StandingsScreen from './StandingsScreen'
import { store, populateMatches, populateStandings } from '../redux/store/store'
import { useFetchMatches, useFetchStandings } from '../services/api/API'
import StatisticsScreen from './StatisticsScreen'
import { styles } from '../styles/DystirStyle'
import { Page } from '../routes/Routes'

export default function TabsScreen() {
  const {Navigator, Screen} = createBottomTabNavigator()

  const {data, isLoading} = useFetchMatches()
  const {data: standings, isLoading: isLoadingStandings} = useFetchStandings()

  useEffect(() => {
    if (!isLoading) {
      console.log("GET MATCHES")
      store.dispatch(populateMatches(data))
    }
    if (!isLoadingStandings) {
      console.log("GET STANDINGS")
      store.dispatch(populateStandings(standings))
    }
  }, [isLoading, isLoadingStandings, data]);

  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000'
        },
        headerShown: false,
        tabBarActiveTintColor: '#40A81B',
        tabBarInactiveTintColor: '#cacaca',
      }}
      initialRouteName={Page.Matches}>
      
      <Screen name={Page.Matches} component={MatchesScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={require('../images/sports_soccer_ball.png')} style={focused ? styles.tabBarIconFocused : styles.tabBarIcon} tintColor={color} />
          ),
        }} />
      <Screen name={Page.Results} component={ResultsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={require('../images/checklist.png')} style={focused ? styles.tabBarIconFocused : styles.tabBarIcon}  tintColor={color} />
          ),
        }} />
      <Screen name={Page.Fixtures} component={FixturesScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={require('../images/calendar_month.png')} style={focused ? styles.tabBarIconFocused : styles.tabBarIcon}  tintColor={color} />
          ),
        }} listeners={{
          tabPress: e => {
          },
        }} />
      <Screen name={Page.Standings} component={StandingsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={require('../images/table.png')} style={focused ? styles.tabBarIconFocused : styles.tabBarIcon} tintColor={color} />
          )
        }} />
      <Screen name={Page.Statistics} component={StatisticsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={require('../images/insert_chart.png')} style={focused ? styles.tabBarIconFocused : styles.tabBarIcon} tintColor={color} />
          )
        }} />
    </Navigator>
  );
}
