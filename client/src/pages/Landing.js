import React from 'react'
import Space from "../images/Space.png"
import walkerLogo from "../images/WalkerLogo.png"
import CM_Text from "../images/CM_Text.png"
import "./Landing.css"
import Wrapper from '../wrappers/LandingPage';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <div id="logo-div" >
                    <img src={walkerLogo} alt='walkerLogo' height="50px"></img>
                    <img src={CM_Text} alt='CM_Text' height="50px"></img>
                </div>
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