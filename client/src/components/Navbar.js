import Wrapper from '../wrappers/Navbar.js'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Logo from './Logo'
import { useAppContext } from '../context/appContext.js'
import { useState } from 'react'

const Navbar = () => {
    const { user, logoutUser, toggleSidebar } = useAppContext()
    const [showLogout, setShowLogout] = useState(false)
    return (
        <Wrapper>
        <div className='nav-center'>
            <button className='toggle-btn' onClick={toggleSidebar}>
                <FaAlignLeft />
            </button>
            <div>
                <Logo />
                <h3 className='logo-text'>Dashboard</h3>
            </div>
            <div className='btn-container'>
                <button type='button' className='btn' onClick={() => setShowLogout(!showLogout)}>
                    <FaUserCircle />
                    {user?.name}
                    <FaCaretDown />
                </button>
                <div className={showLogout ? 'dropdown show-dropdown': 'dropdown'}>
                    <button type='button' className='dropdown-btn' onClick={logoutUser}>Logout</button>
                </div>
            </div>
        </div>

    </Wrapper>
    )
}

export default Navbar