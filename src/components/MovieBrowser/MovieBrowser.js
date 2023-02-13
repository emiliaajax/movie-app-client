import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../features/movies/movieSlice.js'

function MovieBrowser ({ endpoint }) {
  const dispatch = useDispatch()
  const { movies } = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(getMovies(endpoint))
  }, [dispatch, endpoint])

  useEffect(() => {
    console.log(movies)
  }, [movies])

  return (
    <>

    </>
  )
}

export default MovieBrowser