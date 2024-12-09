import axios, { AxiosResponse } from "axios";
import { QueryObserverResult, useQuery } from "react-query";
import { RickAndMarty } from "../../types/RickAndMarty";
import { Character } from "../../types/Character";
import { Location } from "../../types/Location";

const BASE_URL = 'https://rickandmortyapi.com'

export const client = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
})

export function useFetchCharacters(): QueryObserverResult<RickAndMarty, any> {
    return useQuery<RickAndMarty, any>({
        queryKey:["Characters"],
        queryFn: async () => {
            const { data } = await fetchCharactersAsync()
            console.log(data)
            return data;
        }
    });
};

export function useFetchSingleCharacter(id: string): QueryObserverResult<Character, any> {
    return useQuery<Character, any>({
        queryKey:["SingleCharacter"],
        queryFn: async () => {
            const { data } = await fetchSingleCharacterAsync(id)
            console.log(data)
            return data;
        }
    });
};

export function useFetchSingleLocation(url: string): QueryObserverResult<Location, any> {
    return useQuery<Location, any>({
        queryKey:["SingleLocation"],
        queryFn: async () => {
            const { data } = await fetchSingleLocationAsync(url)
            console.log(data)
            return data;
        }
    });
};

export function useFetchLocationCharacters(location:Location | undefined): QueryObserverResult<Character[], any> {
    return useQuery<Character[], any>({
        queryKey:["LocationCharacters"],
        queryFn: async () => {
            const charatersIDs = (): string[] => {
                var ids: string[] = []
                location?.residents?.forEach((resident: string) => {
                    let id = resident.split("/").pop()
                    if((id?.length ?? 0) > 0) {
                        ids.push(id!)
                    }
                })
                return ids
            }
            const { data } = await fetchLocationCharactersAsync(charatersIDs())
            console.log(data)
            return data
        },
        enabled: !!location
    });
};

async function fetchCharactersAsync(): Promise<AxiosResponse<RickAndMarty, any>> {
    return await client.get<RickAndMarty>(`${BASE_URL}/api/character`)
};

async function fetchSingleCharacterAsync(id:string): Promise<AxiosResponse<Character, any>> {
    return await client.get<Character>(`${BASE_URL}/api/character/${id}`)
};

async function fetchSingleLocationAsync(url:string): Promise<AxiosResponse<Location, any>> {
    return await client.get<Location>(url)
}

async function fetchLocationCharactersAsync(charatersIDs:string[]): Promise<AxiosResponse<Character[], any>> {
    return await client.get<Character[]>(`${BASE_URL}/api/character/${charatersIDs.join(',')}`)
}