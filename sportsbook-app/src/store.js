import { configureStore } from '@reduxjs/toolkit'
import betsSliceReducer from './components/bets/betsSlice'

export default configureStore({
    reducer: {
        bets: betsSliceReducer
    }
})