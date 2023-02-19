import SearchIcon from './img/SearchIcon.svg'
import { useEffect, useRef, useState } from 'react'
import './SearchBar.css'

function SearchBar () {
  const [clicked, setClicked] = useState(false)
  const searchInput = useRef(null)

  const onClick = () => {
    setClicked(true)
  }

  useEffect(() => {
    if (clicked) {
      searchInput.current.focus()
    }
  }, [clicked])

  const onChange = () => {
    
  }


  return ( 
    <>
      <div id='searchContainer' onClick={onClick} onChange={onChange}>
        {clicked
        ? <input placeholder='Search movie titles' ref={searchInput}></input>
        : <img alt='Search icon' src={SearchIcon}/>
        }
      </div>
    </> 
  )
}

export default SearchBar