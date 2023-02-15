import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getMovie } from "../../features/movies/movieSlice"

function Movie () {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { movie } = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(getMovie(id))
  }, [dispatch, id])

  return ( 
    <>
      <p>hej</p>
    </> 
  )
}

export default Movie