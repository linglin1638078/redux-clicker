//boiler plate
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    usename: ""
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        changeName: (state,action) => {
            state.usename = action.payload
        }
    }
})

export const {changeName } = playerSlice.actions

export default playerSlice.reducer
