import MovieBrowser from '../../components/MovieBrowser/MovieBrowser.js'

function Home () {
  return ( 
    <>
      <MovieBrowser endpoint='/movie/popular'></MovieBrowser>
    </>
  )
}

export default Home