import { useNavigate } from 'react-router-dom'
import './MovieCardHorizontal.css'

function MovieCardHorizontal({ id, title, year, poster }) {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(`/movie/${id}`)
  }

  return ( 
    <>
      <div className='movieCard' onClick={onClick}>
        <img alt='Movie poster' src={process.env.REACT_APP_MOVIE_IMAGES_URL + poster} width='680'></img>
        <div className='movieInfo'>
          <h3>{title}</h3>
          <p>{year}</p>
        </div>
      </div>
    </>
  )
}

export default MovieCardHorizontal
