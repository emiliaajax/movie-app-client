import { useDispatch } from "react-redux"
import { getMoviesByGenre } from "../../features/movies/movieSlice"
import './GenreButton.css'

function GenreButton ({ id, name }) {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(getMoviesByGenre(id))
  }

  return ( 
    <>
      <button className='genreButton' onClick={onClick}>
        {name}
      </button>
    </> 
  )
}

export default GenreButton
