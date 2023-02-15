import axios from 'axios'

const getTrendingMovies = async () => {
  const url = `${process.env.REACT_APP_MOVIES_API_V3}/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`

  const response = await axios.get(url)

  return response.data.results
}

const getNowPlayingMovies = async () => {
  const url = `${process.env.REACT_APP_MOVIES_API_V3}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`

  const response = await axios.get(url)

  return response.data.results
}

const getTopRatedMovies = async () => {
  const url = `${process.env.REACT_APP_MOVIES_API_V3}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`

  const response = await axios.get(url)

  return response.data.results
}

const getMovieGenres = async () => {
  const url = `${process.env.REACT_APP_MOVIES_API_V3}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`

  const response = await axios.get(url)

  return response.data.genres
}

const getMoviesByGenre = async (genreId) => {
  const url = `${process.env.REACT_APP_MOVIES_API_V3}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc&with_genres=${genreId}`

  const response = await axios.get(url)

  return response.data.results
}

const getMovie = async (id) => {
  const url = `${process.env.REACT_APP_MOVIES_API_V3}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`

  const response = await axios.get(url)

  return response.data
}

const movieService = {
  getTrendingMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getMovieGenres,
  getMoviesByGenre,
  getMovie
}

export default movieService
