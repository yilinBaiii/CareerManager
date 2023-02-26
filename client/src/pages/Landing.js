import React from 'react'
import Space from "../images/Space.png"
import Wrapper from '../wrappers/LandingPage'
import { Logo } from "../components/index"
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                {/* info */}
                <div className='info'>
                    <h1>
                        Career<span> Managing</span> App
                    </h1>
                    <p>
                        This is a job search tool that enables job seekers to efficiently manage
                        and track their job search progress in a centralized location.
                        Leveraging the power of MongoDB, Express, React, and Node.js,
                        this full-stack application provides a seamless experience for users.
                    </p>
                    <Link to="/register" className='btn btn-hero'>
                        Login/Register
                    </Link>
                </div>
                <img src={Space} alt="Space" className='img main-img'></img>
            </div>
        </Wrapper>
    )
}

export default Landing