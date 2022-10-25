//boiler plate
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    points:0
}

export const gameSlice = createSlice({
    name: 'points',
    initialState,
    reducers: {
        addPoint: (state) => {
            state.points += 1
        },
        subtractPoint: (state) => {
            state.points -= 1
        },
        resetPoint: (state) => {
            state.points = 0
        }
    }
})

export const {addPoint, subtractPoint, resetPoint } = gameSlice.actions

export default gameSlice.reducer
