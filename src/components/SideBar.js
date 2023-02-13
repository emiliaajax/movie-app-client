import { Link } from 'react-router-dom'
import './SideBar.css'

function SideBar () {
  return ( 
    <>
      <nav className='sideBar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Discover</Link>
          </li>
        </ul>
      </nav>
    </> 
  )
}

export default SideBar