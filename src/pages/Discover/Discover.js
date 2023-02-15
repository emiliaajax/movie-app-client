import { useEffect } from "react"
import { useSelector } from "react-redux"
import Footer from "../../components/Footer/Footer"
import GenreMenu from "../../components/GenreMenu/GenreMenu"
import MovieBrowser from "../../components/MovieBrowser/MovieBrowser"
import './Discover.css'

function Discover () {
  const { moviesByGenre } = useSelector((state) => state.movies)

  useEffect(() => {console.log(moviesByGenre)}, [moviesByGenre])

  return ( 
    <>
      <div className='discoverWrapper'>
        <div className='discoverContainer'>
          <h1>Discover</h1>
          <GenreMenu />
          {moviesByGenre
          ? <MovieBrowser category={null} movies={moviesByGenre} isVertical={true} />
          : <p className='chooseGenre'>Choose a genre...</p>
          }
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