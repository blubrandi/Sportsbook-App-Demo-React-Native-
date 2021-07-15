import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{
        gameID: 62621,
        betID: 1,
        awayTeamName: 'STL',
        homeTeamName: 'SF',
        betType: 'straight',
        homeMoneyLine: -230,
        awayMoneyLine: 181,
        homePointSpread: -1.6,
        awayPointSpread: 1.8,
        homePointSpreadPayout: 131,
        awayPointSpreadPayout: -166,
        overUnder: 4.2,
        overPayout: -139,
        underPayout: 112,
        wager: 0,
        potentialWinnings: 0,
        potentialPayout: 0
    },
    {
        gameID: 62618,
        betID: 2,
        awayTeamName: 'LAD',
        homeTeamName: 'MIA',
        betType: 'straight',
        homeMoneyLine: 120,
        awayMoneyLine: -149,
        homePointSpread: 1.8,
        awayPointSpread: -1.6,
        homePointSpreadPayout: -323,
        awayPointSpreadPayout: 246,
        overUnder: 4.2,
        overPayout: 120,
        underPayout: -162,
        wager: 0,
        potentialWinnings: 0,
        potentialPayout: 0
    }
]

const betsSlice = createSlice({
    name: 'bets',
    initialState,
    reducers: {
        pendingBetAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const { pendingBetAdded } = betsSlice.actions

export default betsSlice.reducer