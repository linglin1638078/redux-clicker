import { configureStore } from "@reduxjs/toolkit";
import gameReducer from './gameSlice';//if we do not import using {}, it will import the default export from gameSlice
import playerReducer from './playerSlice'

export const store = configureStore({
    reducer: {
        game: gameReducer,
        plaer: playerReducer
    }
})