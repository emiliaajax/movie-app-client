import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../features/movies/movieSlice.js'
import MovieCardHorizontal from '../MovieCardHorizontal/MovieCardHorizontal.js'
import getYear from 'date-fns/getYear'
import './MovieBrowser.css'

function MovieBrowser ({ endpoint, isVertical }) {
  const dispatch = useDispatch()
  const { movies } = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(getMovies(endpoint))
  }, [dispatch, endpoint])

  return (
    <>
      <div className='moviesContainer'>
        {movies?.map((movie) => {
          return isVertical 
            ? null
            : <MovieCardHorizontal title={movie.title} year={getYear(new Date(movie.release_date))} poster={movie.backdrop_path}/>
        })}
      </div>
    </>
  )
}

export default MovieBrowser