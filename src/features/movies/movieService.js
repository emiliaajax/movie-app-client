import axios from 'axios'

const getMovies = async (endPoint) => {
  const url = `${process.env.REACT_APP_MOVIES_API_V3}${endPoint}?api_key=${process.env.REACT_APP_API_KEY}`

  const response = await axios.get(url)

  return response.data.results
}

const movieService = {
  getMovies
}

export default movieService
