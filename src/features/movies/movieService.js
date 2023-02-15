import axios from 'axios'

const getTrendingMovies = async () => {
  const url = `${process.env.REACT_APP_MOVIES_API_V3}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`

  const response = await axios.get(url)

  return response.data.results
}

const getNowPlayingMovies = async () => {
  const url = `${process.env.REACT_APP_MOVIES_API_V3}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`

  const response = await axios.get(url)

  return response.data.results
}

const getTopRatedMovies = async() => {
  const url = `${process.env.REACT_APP_MOVIES_API_V3}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`

  const response = await axios.get(url)

  return response.data.results
}

const movieService = {
  getTrendingMovies,
  getNowPlayingMovies,
  getTopRatedMovies
}

export default movieService
