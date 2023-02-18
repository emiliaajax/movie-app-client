import { useNavigate } from 'react-router-dom'
import './MovieCardVertical.css'

function MovieCardVertical ({ id, title, year, poster }) {
  const navigate = useNavigate()

  const onClick = () => {
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