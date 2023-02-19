import { Link, useLocation } from 'react-router-dom'
import HomeIcon from './img/HomeIcon.svg'
import HomeIconInactive from './img/HomeIconInactive.svg'
import DiscoverIcon from './img/DiscoverIcon.svg'
import DiscoverIconInactive from './img/DiscoverIconInactive.svg'
import './TopBar.css'
import SearchBar from '../SearchBar/SearchBar'

function TopBar () {
  const location = useLocation()

  return (
    <>
      <div className='topBarContainer'>
        <div className='topBar'>
          <div>
            <Link to='/' style={{ color: location.pathname === '/' ? '#FFFFFF' : '#838383' }}>
              <img 
                alt='Home icon' 
                src={location.pathname === '/' ? HomeIcon : HomeIconInactive} 
              />
              Home
            </Link>
          </div>
          <div>
            <Link to='/discover' style={{ color: location.pathname === '/discover' ? '#FFFFFF' : '#838383' }}>
              <img 
                alt='Discover icon' 
                src={location.pathname === '/discover' ? DiscoverIcon : DiscoverIconInactive} 
              />
              Discover
            </Link>
          </div>
          <div id='searchBar'>
            <SearchBar />
          </div>
        </div>
      </div>
    </> 
  )
}

export default TopBar