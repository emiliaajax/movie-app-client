import MovieCardHorizontal from '../MovieCardHorizontal/MovieCardHorizontal.js'
import getYear from 'date-fns/getYear'
import './MovieBrowser.css'

function MovieBrowser ({ category, movies, isVertical }) {

  return (
    <>
      <div className='movieBrowserContainer'>
        <h1 className='title'>{category}</h1>
        <div className='movies'>
          {movies?.map((movie) => {
            return isVertical 
              ? null
              : <MovieCardHorizontal title={movie.title} year={getYear(new Date(movie.release_date))} poster={movie.backdrop_path}/>
          })}
        </div>
      </div>
    </>
  )
}

export default MovieBrowser