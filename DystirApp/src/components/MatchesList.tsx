import React from "react"
import { FlatList, RefreshControl } from "react-native"
import { queryClient } from "../../App"
import { MatchView } from "./MatchView"

export default function MatchesList({matchesList}: any) {
    return (
        <FlatList
            removeClippedSubviews={true}
            refreshControl={
                <RefreshControl tintColor={'#cacaca'}  refreshing={false} onRefresh={() => {queryClient.refetchQueries('useFetchMatches')}} /> 
            }
            showsHorizontalScrollIndicator={false} 
            data={matchesList}
            initialNumToRender={10}
            renderItem={({item}) =>
            <>
                <MatchView match = {item}/>
            </>
            }
        />
    )
}