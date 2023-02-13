import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieService from './movieService.js'

export const initialState = {
  isError: false,
  isSuccess: false,
  isPending: false,
  message: ''
}

export const getMovies = createAsyncThunk('movies/get', async (endpoint, thunkAPI) => {
  try {
    return await movieService.getMovies(endpoint)
  } catch (error) {
    const message = error.response.data.message 
      || (error.response && error.response.data && error.response.message) 
      || error.message 
      || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isSuccess = false
      state.isPending = false
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isError = false
        state.isSuccess = true
        state.isPending = false
        state.movies = action.payload
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.isPending = false
        state.movies = null
      })
      .addCase(getMovies.pending, (state) => {
        state.isPending = true
      })
  }
})

export const { reset } = movieSlice.actions
export default movieSlice.reducer
