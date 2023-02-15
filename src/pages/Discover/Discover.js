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
          <MovieBrowser category={null} movies={moviesByGenre} isVertical={true} />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </> 
  )
}

export default Discover