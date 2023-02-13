import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../features/movies/movieSlice.js'

export const store = configureStore({
  reducer: {
    movies: movieReducer
  }
})