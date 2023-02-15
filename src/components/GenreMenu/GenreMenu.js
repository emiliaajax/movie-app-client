import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMovieGenres } from "../../features/movies/movieSlice.js"
import GenreButton from "../GenreButton/GenreButton.js"
import './GenreMenu.css'

function GenreMenu () {
  const dispatch = useDispatch()
  const { movieGenres } = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(getMovieGenres())
  }, [dispatch])

  return ( 
    <>
      <div className="genresContainer">
        {movieGenres?.map((genre) => {
          return <GenreButton id={genre.id} name={genre.name}/>
        })}
      </div>
    </> 
  )
}

export default GenreMenu