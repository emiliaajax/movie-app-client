import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getMovie, getMovieTrailer } from "../../features/movies/movieSlice"
import './Movie.css'

function Movie () {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { movie, movieTrailer } = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(getMovie(id))
    dispatch(getMovieTrailer(id))
  }, [dispatch, id])

  return ( 
    <>
    <div className='movieDetails'>
      {movieTrailer 
        ? <iframe title={movieTrailer} type='text/html' id='trailer' src={'https://www.youtube.com/embed/' + movieTrailer} />
        : null
      }
      <div id='movieInfo'>
        <h1 id='title'>{movie?.title}</h1>
        <p id='description'>{movie?.overview}</p>
      </div>
      <div id='metaInfo'>
        <p><b>Original title</b>: {movie?.original_title}</p>
        <p><b>Rating</b>: {movie?.vote_average}</p>
        <p><b>Votes</b>: {movie?.vote_count}</p>
      </div>
    </div>
    </> 
  )
}

export default Movie