import axios from 'axios'

const getMovies = async (endPoint) => {
  const url = `${REACT_APP_MOVIES_API}${endPoint}?api_key=${REACT_APP_API_KEY}`

  const response = await axios.get(url)

  return response.data
}

const movieService = {
  getMovies
}

export default movieService
