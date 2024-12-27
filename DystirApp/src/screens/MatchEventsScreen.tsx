import React, { useEffect } from 'react';
import { FlatList, Image, RefreshControl, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { EventButton } from '../components/EventButton'
import { getMatchDetails } from '../services/api'
import { useSelector } from 'react-redux';
import { EventView } from '../components/EventView';
import { styles } from '../styles/DystirStyle';
import { BackButton } from '../components/BackButton';

export default function MatchEventsScreen(props: any) {
    const {route, navigation} : any = props;
    const matchDetailsList = useSelector((state : any) => state.matchesSlice.matchDetailsList);

    var match = route.params;
    var matchDetails = matchDetailsList.find((md: any) => {return md?.match?.matchID == match?.matchID;});

    useEffect(() => {
        getMatchDetails(match?.matchID);
    }, []);

    return (
        <SafeAreaView style={{backgroundColor: 'black', height: '100%'}}>
            <View style={{
                    flexDirection: 'row',
                }}>
                <BackButton onBackPress={() => navigation.pop()} />

                <View style={{flex:1}}>
                    <Image source={{uri: 'https://www.dystir.fo/team_logos/' +  match.homeTeamLogo}}
                        style={{
                            alignSelf:'center',
                            height: 50,
                            resizeMode: 'contain',
                            aspectRatio: 1,
                        }} />
                </View>

                <Text style={[styles.text, {fontSize:25}]}>{match.homeTeamScore} : {match.awayTeamScore}</Text>

                <View style={{flex:1}}>
                    <Image source={{uri: 'https://www.dystir.fo/team_logos/' +  match.awayTeamLogo}}
                        style={{
                            alignSelf:'center',
                            height: 50,
                            resizeMode: 'contain',
                            aspectRatio: 1,
                        }} />
                </View>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.pop()}>
                    <View style={{height:40, width:40, marginVertical:8, opacity:0.5, backgroundColor: '#fff', borderRadius: 20}}>
                        <Image
                            source={require('../images/moreSelectedOn.png')}
                            style={{margin:6, height:27, width:27}} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{
                    paddingBottom: 5,
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}>
                <Text style={[styles.text, {flex:1, textAlign:'right', fontSize:25}]}>{match.homeTeam}</Text>

                <Text style={[styles.text, {fontSize:25, paddingHorizontal:8}]}>-</Text>

                <Text style={[styles.text, {flex:1, textAlign:'left', fontSize:25}]}>{match.awayTeam}</Text>
            </View>

            <View style={{
                flexDirection:'row',
                }}>
                <EventButton title={'SHOT'} backgroundColor={'gray'} />
                <EventButton title={'GOAL'} backgroundColor={'green'} />
                <EventButton title={'CORNER'} backgroundColor={'lightgray'} color={'black'} />
            </View>
            <View style={{
                flexDirection:'row',
                }}>
                <EventButton title={'PENALTY\nSCORED'} backgroundColor={'darkgreen'} color={'white'} />
                <EventButton title={'PENALTY'} backgroundColor={'violet'} />
                <EventButton title={'PENALTY\nMISSED'} backgroundColor={'salmon'} />
            </View>
            <View style={{
                flexDirection:'row',
                }}>
                <EventButton title={'RED\nCARD'} backgroundColor={'red'} />
                <EventButton title={'YELLOW\nCARD'} backgroundColor={'yellow'} color={'black'} />
                <EventButton title={'SUBS'} backgroundColor={'lightgray'} color={'black'} />
            </View>
            <View style={{
                flexDirection:'row',
                }}>
                <EventButton
                    title={`LINE UP\n${match.homeTeam.toUpperCase()}`}
                    backgroundColor={'black'}
                    color={'lightgray'}
                    borderColor={'lightgray'}
                    onPress={() => navigation.pop()} />
                <EventButton
                    title={'COMMENTARY'}
                    backgroundColor={'white'}
                    color={'black'}
                    onPress={() => navigation.pop()} />
                <EventButton
                    title={`LINE UP\n${match.awayTeam.toUpperCase()}`}
                    backgroundColor={'black'}
                    color={'lightgray'}
                    borderColor={'lightgray'}
                    onPress={() => navigation.pop()} />
            </View>
            <FlatList
                refreshControl = {
                    <RefreshControl tintColor={'#cacaca'} refreshing={false} onRefresh={() => {}} />
                }
                style={{paddingTop:5}}
                showsHorizontalScrollIndicator={false}
                keyExtractor={event => event.eventOfMatchId ?? 0}
                data={matchDetails?.eventsOfMatch.concat().reverse()}
                renderItem={({item, index}) =>
                    <EventView eventOfMatch={item} match={match} onPress={() => {}}/>
            }
            />
        </SafeAreaView>
    );
}
