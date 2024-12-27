import axios, { AxiosResponse } from 'axios';
import { QueryObserverResult, useQuery } from 'react-query'
import { Match } from '../../types/Match'
import { Standing } from '../../types/Standing'

const BASE_URL = 'https://www.dystir.fo'

export const client = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

export function useFetchMatches(): QueryObserverResult<Match[], any> {
    console.log("useFetchMatches")
    return useQuery<Match[], any>({
        queryKey:['useFetchMatches'],
        queryFn: async () => {
            const { data } = await fetchMatchesAsync()
            return data
        }, 
        refetchOnWindowFocus: true
    })
}

async function fetchMatchesAsync(): Promise<AxiosResponse<Match[], any>> {
    console.log("fetchMatchesAsync")
    return await client.get<Match[]>(`${BASE_URL}/api/matches/today`)
}

export function useFetchStandings(): QueryObserverResult<Standing[], any> {
    console.log("useFetchStandings")
    return useQuery<any, any>({
        queryKey:['useFetchStandings'],
        queryFn: async () => {
            const { data } = await fetchStandingsAsync()
            return data
        }
    });
}

async function fetchStandingsAsync(): Promise<AxiosResponse<Standing[], any>> {
    console.log("fetchStandingsAsync")
    return await client.get<Standing[]>(`${BASE_URL}/api/standings`)
}
