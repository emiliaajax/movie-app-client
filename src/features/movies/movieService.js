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

const getMovieTrailer = async (id) => {
  const url = `${process.env.REACT_APP_MOVIES_API_V3}/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`

  const response = await axios.get(url)

  const results = response.data.results.filter(element => element.type === 'Trailer')

  let movieTrailer

  if (results.length === 0) {
    movieTrailer = response.data.results[0].key
  } else {
    movieTrailer = results.length === 1 ? results[0].key : results[1].key
  }

  return movieTrailer
}

const movieService = {
  getTrendingMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getMovieGenres,
  getMoviesByGenre,
  getMovie,
  getMovieTrailer
}

export default movieService
