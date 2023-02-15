// import { useEffect } from "react"
// import { useDispatch } from "react-redux"
import './GenreButton.css'

function GenreButton ({ id, name }) {
  // const dispatch = useDispatch()

  const onClick = () => {
    //dispatch(getMovieGenres())
  }

  return ( 
    <>
      <button className='genreButton' onClick={onClick}>
        {name}
      </button>
    </> 
  )
}

export default GenreButton