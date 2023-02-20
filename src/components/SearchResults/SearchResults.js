import MovieCardVertical from "../MovieCardVertical/MovieCardVertical.js"
import getYear from 'date-fns/getYear'
import { useSelector } from "react-redux"
import './SearchResults.css'

function SearchResults () {
  const { searchResults } = useSelector((state) => state.movies)

  return ( 
    <>
      { searchResults.length !== 0
      ? <div className='searchResults'>
        {searchResults?.map((movie) => {
          return <MovieCardVertical id={movie.id} title={movie.title} year={getYear(new Date(movie.release_date))} poster={movie.poster_path} />
        })}
      </div>
      : <div className='searchResults'>
          <p id='noResultsText'>Oops, couldn't find a movie with the given title...</p>
        </div>
      }
    </> 
  )
}

export default SearchResults