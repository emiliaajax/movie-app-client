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
          <div id='genreMenu'>
            <GenreMenu />
          </div>
          <div id="discoverResults">
            {moviesByGenre
            ? moviesByGenre.map((movie) => {
                return <MovieCardVertical id={movie.id} title={movie.title} year={getYear(new Date(movie.release_date))} poster={movie.poster_path} />
              })
            : <p id='chooseGenre'>Choose a genre...</p>
            }
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