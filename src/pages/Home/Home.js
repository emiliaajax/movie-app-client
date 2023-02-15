import MovieBrowser from '../../components/MovieBrowser/MovieBrowser.js'
import './Home.css'

function Home () {
  return ( 
    <>
      <div className='movieBrowsers'>
        <MovieBrowser endpoint='/movie/popular' isVertical={false}></MovieBrowser>
      </div>
    </>
  )
}

export default Home