import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

export const matchesSlice = createSlice({
  name: 'matchesSlice',
  initialState: {
    matches: [],
    results: [],
    fixtures: [],
    matchDetailsList: [],
    ticks: 0,
  },
  reducers: {
    populateMatches: (state, action) => {
      const {matches, results, fixtures} = updateMatchList(action.payload, state.matches)
      return {...state,matches: matches, results: results, fixtures: fixtures}
    },
    updateMatch: (state, action) => {
      var m = action.payload.match
      var md = action.payload

      var matchDetailsList = state.matchDetailsList.filter((item: any) => item.matchDetailsID != md.matchDetailsID)
      matchDetailsList.push(md as never)

      var matches = state.matches.filter((item: any) => item.matchID != m.matchID)
      matches.push(m as never)

      var results = state.results.filter((item: any) => item.matchID != m.matchID)
      results.push(m as never)

      return {...state, matches: matches, results: results, matchDetailsList: matchDetailsList}
    },
    timeCounter: state => {
      var ticks = Date.now() / 1000
      state.ticks = Math.ceil(ticks)
    },
  },
});

export const { populateMatches, updateMatch, timeCounter } = matchesSlice.actions

export const standingsSlice = createSlice({
  name: 'standings',
  initialState: {
    standings: []
  },
  reducers: {
    populateStandings: (state, action) => {
      const standings = action.payload
      return {...state, standings: standings}
    }
  },
});

export const { populateStandings } = standingsSlice.actions

export const store = configureStore({
  reducer: combineReducers({
    matchesSlice: matchesSlice.reducer,
    standingsSlice: standingsSlice.reducer
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

function updateMatchList(matchesList: any, stateMatches: any) : {matches: any, results: any, fixtures: any} {
  matchesList?.map((match: any) => {
    stateMatches?.find((m: any) => {
      if(match.matchID == m.matchID) {
        match.matchDetails = m.matchDetails
      }
    })
  })
  const matches = matchesList.filter((item: any) => item.statusID < 1)
  const results = matchesList.filter((item: any) => item.statusID > 11)
  const fixtures = matchesList.filter((item: any) => item.statusID > 11)
  return {matches, results, fixtures}
}

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}
