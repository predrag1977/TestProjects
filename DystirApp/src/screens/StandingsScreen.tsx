
import React, { Component } from 'react';
import { FlatList, RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header';
import { QueryClient } from 'react-query';
import { queryClient } from '../../App';

export default function StandingsScreen() {

    const standings = useSelector((state : any) => state.standingsSlice.standings)

    return (
        <SafeAreaView style={{backgroundColor:'#000', height: '100%'}}>
            <Header title={'Standings'} />
            <FlatList
                removeClippedSubviews={true}
                refreshControl={
                    <RefreshControl tintColor={'#cacaca'}  refreshing={false} onRefresh={() => {queryClient.refetchQueries('useFetchStandings')}} /> 
                }
                showsHorizontalScrollIndicator={false} 
                data={standings}
                initialNumToRender={5}
                renderItem={({item}) =>
                <>
                    <Text numberOfLines={1} style={{
                        fontSize:14,
                        color:'lightgray',
                        textAlign:'right',
                        fontWeight: 'bold'
                    }}>{item.standingCompetitionName}</Text>
                    <FlatList
                        removeClippedSubviews={true}
                        refreshControl = {
                            <RefreshControl tintColor={'#cacaca'}  refreshing={false}  /> 
                        }
                            showsHorizontalScrollIndicator={false} 
                            data={item.teamStandings}
                            renderItem={({item}) =>
                            <>
                            <View style={{height:40, alignItems: 'center', flexDirection: 'row'}}>
                            <Text numberOfLines={1} style={{
                                fontSize:14,
                                marginRight: 5,
                                color:'lightgray',
                                textAlign:'left',
                            }}>{item.position + "."}</Text>
                            <Text numberOfLines={1} style={{
                                fontSize:14,
                                color:'lightgray',
                                textAlign:'left',
                            }}>{item.team}</Text>
                            <Text numberOfLines={1} style={{
                                fontSize:14,
                                flex: 1,
                                color:'lightgray',
                                textAlign:'right',
                            }}>{item.points}</Text>
                            </View>
                            <View style={{flex: 1, height: 1, backgroundColor: item.positionColor}} />
                            </>
                        }
                    />
                    <View style={{flex: 1, height: 20}} />
                </>
                }
            />
            
        </SafeAreaView>
    );
}
