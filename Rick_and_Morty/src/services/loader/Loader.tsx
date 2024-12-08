import axios, { AxiosResponse } from "axios";
import { QueryObserverResult, useQuery } from "react-query";
import { RickAndMarty } from "../../types/RickAndMarty";
import { Character } from "../../types/Character";

const BASE_URL = 'https://rickandmortyapi.com'

export const client = axios.create({
    baseURL : BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export function useFetchCharacters(): QueryObserverResult<RickAndMarty, any> {
    return useQuery<RickAndMarty, any>({
        queryFn: async () => {
            const { data } = await fetchCharactersAsync();
            console.log(data)
            return data;
        }
    });
};

async function fetchCharactersAsync(): Promise<AxiosResponse<RickAndMarty, any>> {
    return await client.get<RickAndMarty>('/api/character')
};

export function useFetchSingleCharacter(id: string): QueryObserverResult<Character, any> {
    return useQuery<Character, any>({
        queryFn: async () => {
            const { data } = await fetchSingleCharacterAsync(id);
            console.log(data)
            return data;
        }
    });
};

async function fetchSingleCharacterAsync(id:string): Promise<AxiosResponse<Character, any>> {
    return await client.get<Character>('/api/character/' + id)
};