import MovieBrowser from '../../components/MovieBrowser/MovieBrowser.js'
import './Home.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingMovies, getNowPlayingMovies, getTopRatedMovies } from '../../features/movies/movieSlice.js'

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
          <MovieBrowser category='Now playing' movies={playingMovies} isVertical={false} />
          <MovieBrowser category='Top rated' movies={topRatedMovies} isVertical={false} />
        </div>
      </div>
    </>
  )
}

export default Home