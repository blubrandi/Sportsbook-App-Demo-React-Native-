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
            return state.filter(pendingBet => pendingBet.id !== action.payload)
        }
    }
})

export const { pendingBetAdded, pendingBetRemoved } = betsSlice.actions

export default betsSlice.reducer