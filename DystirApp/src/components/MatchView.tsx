import { Text, TouchableOpacity, View } from 'react-native'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { getMatchTimeColor, getMatchTime, isLive } from '../services/timeService'
import { Page } from '../routes/Routes'

export function MatchView({match}:any) {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const ticks = useSelector((state : any) => state.matchesSlice.ticks)

    return (
        <View style={{
            marginBottom:8,
            height:106,
            flex:1,
            flexDirection:'row',
        }}>
            <TouchableOpacity style={{
                backgroundColor: '#333',
                paddingHorizontal:12,
                justifyContent:'center',
                flex:1,
                borderRadius:10,
            }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(Page.MatchDetails, match)}>
                <Text numberOfLines={1} style={{
                    fontSize:14,
                    paddingBottom:5,
                    color:'lightgray',
                    textAlign:'left',
                }}>{match.matchTypeName + ' - ' + match.location}
                </Text>
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
                <View style={{
                    flexDirection:'row',
                    }}>
                    <Text style={{
                        flex:1,
                        fontSize:16,
                        fontWeight:800,
                        paddingTop:5,
                        color:'white',
                    }}>{match.homeTeam + (match.homeSquadName.length > 0 ? " " : "") + match.homeSquadName  + " " + match.homeCategoriesName}
                    </Text>
                    <Text style={{
                        fontSize:16,
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
                        fontSize:16,
                        fontWeight:800,
                        paddingVertical:5,
                        color:'white',
                    }}>{match.awayTeam + (match.awaySquadName.length > 0 ? " " : "") + match.awaySquadName  + " " + match.awayCategoriesName}
                    </Text>
                    <Text style={{
                        fontSize:16,
                        fontWeight:800,
                        paddingVertical:5,
                        color:'white',
                    }}>{match.statusID < 1 || match.statusID > 13 ? '-' : match.awayTeamScore}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
