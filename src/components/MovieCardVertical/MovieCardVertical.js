import './MovieCardVertical.css'

function MovieCardVertical ({ title, year, poster }) {
  return ( 
    <>
      <div className='movieCardVertical'>
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