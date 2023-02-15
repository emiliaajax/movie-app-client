import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieService from './movieService.js'

export const initialState = {
  isError: false,
  isSuccess: false,
  isPending: false,
  message: ''
}

export const getTrendingMovies = createAsyncThunk('movies/trending', async (thunkAPI) => {
  try {
    return await movieService.getTrendingMovies()
  } catch (error) {
    const message = error.response.data.message 
      || (error.response && error.response.data && error.response.message) 
      || error.message 
      || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const getNowPlayingMovies = createAsyncThunk('movies/nowplaying', async (thunkAPI) => {
  try {
    return await movieService.getNowPlayingMovies()
  } catch (error) {
    const message = error.response.data.message 
      || (error.response && error.response.data && error.response.message) 
      || error.message 
      || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const getTopRatedMovies = createAsyncThunk('movies/toprated', async (thunkAPI) => {
  try {
    return await movieService.getTopRatedMovies()
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
      .addCase(getTrendingMovies.fulfilled, (state, action) => {
        state.isError = false
        state.isSuccess = true
        state.isPending = false
        state.trendingMovies = action.payload
      })
      .addCase(getTrendingMovies.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.isPending = false
        state.trendingMovies = null
      })
      .addCase(getTrendingMovies.pending, (state) => {
        state.isPending = true
      })
      .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
        state.isError = false
        state.isSuccess = true
        state.isPending = false
        state.playingMovies = action.payload
      })
      .addCase(getNowPlayingMovies.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.isPending = false
        state.playingMovies = null
      })
      .addCase(getNowPlayingMovies.pending, (state) => {
        state.isPending = true
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.isError = false
        state.isSuccess = true
        state.isPending = false
        state.topRatedMovies = action.payload
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.isPending = false
        state.topRatedMovies = null
      })
      .addCase(getTopRatedMovies.pending, (state) => {
        state.isPending = true
      })
  }
})

export const { reset } = movieSlice.actions
export default movieSlice.reducer
