
import 'react-native-url-polyfill/auto';
import { HubConnectionBuilder, HubConnectionState, LogLevel } from '@microsoft/signalr';
import { store, updateMatch } from '../redux/store/store';

const url = 'https://www.dystir.fo';

const connection = new HubConnectionBuilder()
    .withUrl(`${url}/dystirhub`)
    .withAutomaticReconnect()
    .configureLogging(LogLevel.Information)
    .build();

    connection.on('UpdateMatch', (match) => {
        console.log('UpdateMatch');
        // const matchDetailsData = matchDetailsJson.replace(/"([^"]+)":/g,
        //     function ($0: any, $1: any) { return ('"' + $1.charAt(0).toLowerCase() + $1.slice(1) + '":') }
        // );
    });

    connection.on('ReceiveMatchDetails', (matchID, matchDetailsJson) => {
        const matchDetailsData = matchDetailsJson.replace(/"([^"]+)":/g,
                function ($0: any, $1: any) { return ('"' + $1.charAt(0).toLowerCase() + $1.slice(1) + '":'); }
            );
            const matchDetails = JSON.parse(matchDetailsData);
            store.dispatch(updateMatch(matchDetails));
    });

    connection.on('RefreshData', () => {});

    connection.on('ReceiveMessage', (_match, _matchJson) => { });

export async function startHubConnection() {
    if(connection.state == HubConnectionState.Disconnected) {
        await connection.start().then(() => {
            // getMatches();
        });
    }
}

