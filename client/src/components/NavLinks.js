import { NavLink } from 'react-router-dom'
import links from '../utils/links'

const NavLinks = ({toggleSidebar}) => {
    return (
        <div className='nav-links'>
        {
          links.map((link) => {
            const { id, path, text, icon } = link
            return (
                <NavLink 
                    to={path} 
                    key={id} 
                    location = {"2"}
                    onClick={toggleSidebar} 
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                    end
                >
                    <span className='icon'>{icon}</span>
                    {text}
                </NavLink>
            )
          })
        }
      </div>
    )
  }
  
  export default NavLinks