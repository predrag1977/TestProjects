import { Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { getMatchTimeColor, getMatchTime, isLive } from '../services/timeService';
import { Page } from '../routes/Routes';

export function MatchView({match}:any) {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const ticks = useSelector((state : any) => state.matchesSlice.ticks);

    return (
        <View style={{
            marginBottom:8,
            height:96,
            flex:1,
            flexDirection:'row',
        }}>
            <TouchableOpacity style={{
                backgroundColor: '#333',
                paddingHorizontal:8,
                justifyContent:'center',
                flex:1,
                borderRadius:10,
            }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(Page.MatchDetails, match)}>
                <View style={{
                    flexDirection:'row',
                    }}>
                    <Text numberOfLines={1} style={{
                        flex:1,
                        fontSize:14,
                        color:'lightgray',
                        textAlign:'left',
                    }}>{moment.utc(match.time).local().format('ddd DD.MMM HH:mm') + ' - ' + match.roundName}
                    </Text>
                    <Text style={{
                        fontSize:14,
                        color:getMatchTimeColor(match.statusID),
                        textAlign:'right',
                    }}>{getMatchTime(match, ticks)}
                    </Text>
                </View>
                <Text numberOfLines={1} style={{
                    fontSize:14,
                    color:'lightgray',
                    textAlign:'left',
                }}>{match.matchTypeName + ' - ' + match.location}
                </Text>
                <View style={{
                    flexDirection:'row',
                    }}>
                    <Text style={{
                        flex:1,
                        fontSize:15,
                        fontWeight:800,
                        paddingTop:5,
                        color:'white',
                    }}>{match.homeTeam}
                    </Text>
                    <Text style={{
                        fontSize:15,
                        fontWeight:800,
                        paddingTop:5,
                        color:'white',
                    }}>{match.statusID < 1 || match.statusID > 13 ? '-' : match.homeTeamScore}
                    </Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    }}>
                    <Text style={{
                        flex:1,
                        fontSize:15,
                        fontWeight:800,
                        paddingVertical:5,
                        color:'white',
                    }}>{match.awayTeam}
                    </Text>
                    <Text style={{
                        fontSize:15,
                        fontWeight:800,
                        paddingVertical:5,
                        color:'white',
                    }}>{match.statusID < 1 || match.statusID > 13 ? '-' : match.awayTeamScore}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{
                opacity:isLive(match.statusID) ? 1 : 0.4,
                backgroundColor:'green',
                alignItems:'center',
                justifyContent:'center',
                width:86,
                padding:8,
                marginLeft:5,
                borderRadius:10,
            }}
            disabled={!isLive(match.statusID)}
            activeOpacity={isLive(match.statusID) ? 0.8 : 1}
            onPress={() => navigation.navigate(Page.MatchEvents, match)}>
                <Text style={{
                    fontSize:14,
                    fontWeight:800,
                    color:'white',
                    textAlign:'center',
                }}>{isLive(match.statusID) ? 'LIVE' : 'NOT ACTIVE'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
