import React, { useEffect } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsScreen from './src/screens/TabScreen';
import MatchDetailsScreen from './src/screens/MatchDetailsScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import { startHubConnection } from './src/services/hubConnection';
import { counter } from './src/services/timeService';
import MatchEventsScreen from './src/screens/MatchEventsScreen';
import SelectedEventScreen from './src/screens/SelectedEventScreen';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Page } from './src/routes/Routes';
import { Header } from './src/components/Header';
import { Text } from 'react-native';

export const queryClient = new QueryClient(
  // {
  //   defaultOptions: {
  //     queries: {
  //       staleTime: Infinity,
  //     },
  //   },
  // }
);

export default function App() {
  const {Navigator, Screen} = createNativeStackNavigator();

  useEffect(() => {
    startHubConnection();
    counter();
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider contextSharing={true} client={queryClient}>
        <NavigationContainer>
            <Navigator>
                <Screen name={Page.Tabs} component={TabsScreen} options={{ headerShown: false }} />
                <Screen name={Page.MatchDetails} component={MatchDetailsScreen} options={{ headerShown: false }} />
                <Screen name={Page.MatchEvents} component={MatchEventsScreen} options={{ headerShown: false }} />
                <Screen name={Page.SelectedEvent} component={SelectedEventScreen} options={{ headerShown: false }} />
            </Navigator>
        </NavigationContainer>
        </QueryClientProvider>
    </Provider>
  );
}