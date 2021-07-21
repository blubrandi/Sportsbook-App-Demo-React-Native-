import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = []

const betsSlice = createSlice({
    name: 'bets',
    initialState,
    reducers: {
        pendingBetAdded(state, action) {
            state.push(action.payload)
        },
        pendingBetRemoved(state, action) {
            return state.filter(element => element.betID !== action.payload.betID)
        },
        betStatusChanged(state, action) {

            let bet = state.find(element => element.betID === action.payload.betID)
            bet.betPending = !bet.betPending
        }

    }
})

export const { pendingBetAdded, pendingBetRemoved, betStatusChanged } = betsSlice.actions

export default betsSlice.reducer