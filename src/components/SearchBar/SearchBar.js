import SearchIcon from './img/SearchIcon.svg'
import { useEffect, useRef, useState } from 'react'
import './SearchBar.css'
import { useDispatch } from 'react-redux'
import { reset, searchMovie } from '../../features/movies/movieSlice.js'

function SearchBar () {
  const dispatch = useDispatch()
  const [clicked, setClicked] = useState(false)
  const searchInput = useRef(null)

  const onClick = () => {
    setClicked(true)
  }

  const onChange = (event) => {
    if (event.target.value.length >= 3) {
      dispatch(searchMovie(event.target.value))
    }

    if (event.target.value.length <= 3) {
      dispatch(reset())
    }
  }

  useEffect(() => {
    if (clicked) {
      searchInput.current.focus()
    }
  }, [clicked])

  return ( 
    <>
      <div id='searchContainer' onClick={onClick} onChange={onChange}>
        {clicked
        ? <input placeholder='Search movie titles' ref={searchInput} onChange={onChange}></input>
        : <img alt='Search icon' src={SearchIcon}/>
        }
      </div>
    </> 
  )
}

export default SearchBar