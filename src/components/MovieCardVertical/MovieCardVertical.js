import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset } from '../../features/movies/movieSlice'
import './MovieCardVertical.css'

function MovieCardVertical ({ id, title, year, poster }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(reset())
    navigate(`/movie/${id}`)
  }

  return ( 
    <>
      <div className='movieCardVertical' onClick={onClick}>
        <img 
            alt='Movie poster' 
            src={process.env.REACT_APP_MOVIE_IMAGES_URL + poster}
            height='380' 
          />
        <div className='movieVerticalInfo'>
          <h3>{title}</h3>
          <p>{year}</p>
        </div>
      </div>
    </>
  )
}

export default MovieCardVertical