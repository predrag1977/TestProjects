import { TeamStanding } from "./TeamStanding"

export type Standing = {
    standingCompetitionId : string, 
    standingCompetitionName: string, 
    standingTypeID: number
    teamStandings: TeamStanding[]
}