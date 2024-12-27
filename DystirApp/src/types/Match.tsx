export type Match = {
    matchID: number
    homeTeam: string
    awayTeam: string
    homeCategoriesName: string
    awayCategoriesName: string
    homeSquadName: string
    awaySquadName: string
    time: Date
    location: string
    statusID: number
    homeTeamScore: number
    awayTeamScore: number
    homeTeamPenaltiesScore: number
    awayTeamPenaltiesScore: number
    matchTypeName: string
    homeTeamID: number
    awayTeamID: number
    statusName: string
    matchActivation: number | null
    statusTime: Date
    matchTypeID: number
    teamAdminID: number | null
    roundID: number
    roundName: string
    extraMinutes: number
    extraSeconds: number
    homeTeamOnTarget: number | null
    awayTeamOnTarget: number | null
    homeTeamCorner: number | null
    awayTeamCorner: number | null
    homeTeamLogo: string
    awayTeamLogo: string
    matchDetails: null
    orderID: 1
}
