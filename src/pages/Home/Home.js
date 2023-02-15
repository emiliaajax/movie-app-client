import MovieBrowser from '../../components/MovieBrowser/MovieBrowser.js'
import './Home.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingMovies, getNowPlayingMovies, getTopRatedMovies } from '../../features/movies/movieSlice.js'
import Footer from '../../components/Footer/Footer.js'

function Home () {
  const dispatch = useDispatch()
  const { trendingMovies, playingMovies, topRatedMovies } = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(getTrendingMovies())
    dispatch(getNowPlayingMovies())
    dispatch(getTopRatedMovies())
  }, [dispatch])
  
  return ( 
    <>
      <div className='homeContainer'>
        <div className='browserContainer'>
          <MovieBrowser category='Trending' movies={trendingMovies} isVertical={false} />
          <MovieBrowser category='Now playing' movies={playingMovies} isVertical={true} />
          <MovieBrowser category='Top rated' movies={topRatedMovies} isVertical={true} />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home