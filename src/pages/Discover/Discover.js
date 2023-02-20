import { useSelector } from "react-redux"
import Footer from "../../components/Footer/Footer"
import GenreMenu from "../../components/GenreMenu/GenreMenu"
import MovieCardVertical from "../../components/MovieCardVertical/MovieCardVertical"
import getYear from 'date-fns/getYear'
import './Discover.css'

function Discover () {
  const { moviesByGenre } = useSelector((state) => state.movies)

  return ( 
    <>
      <div className='discoverWrapper'>
        <div className='discoverContainer'>
          <h1>Discover</h1>
          <GenreMenu />
          <div id="discoverResults">
            {moviesByGenre?.map((movie) => {
              return <MovieCardVertical id={movie.id} title={movie.title} year={getYear(new Date(movie.release_date))} poster={movie.poster_path} />
            })}
          </div>
        </div>
        <div className='footer'>
          {moviesByGenre
            ? <Footer />
            : null
          }
        </div>
      </div>
    </> 
  )
}

export default Discover