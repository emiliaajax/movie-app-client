import SideBar from '../SideBar/SideBar.js'
import './BaseLayout.css'

function BaseLayout (props) {
  const { children } = props ? props : null

  return ( 
    <>
      <div className='layoutContainer'>
        <SideBar id='sidebar'/>
        <div id='children'>
          {children}
        </div>
      </div>
    </>
  )
}

export default BaseLayout