import React from 'react'
import Space from "../images/Space.png"
import Wrapper from '../wrappers/LandingPage'
import {Logo} from "../components/index"

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
                    <button className='btn btn-hero'>Login/Register</button>
                </div>
                <img src={Space} alt="Space" className='img main-img'></img>
            </div>
        </Wrapper>
    )
}

export default Landing