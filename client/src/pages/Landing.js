import React from 'react'
// import logo from "../images/logo.ico"
import walkerLogo from "../images/WalkerLogo.png"
import CM_Text from "../images/CM_Text.png"
import "./Landing.css"
const Landing = () => {
  return (
    <main>
        <nav>
        <div id="logo-div" >
            <img src= {walkerLogo} alt='walkerLogo' height = "50px"></img>
            <img src= {CM_Text} alt='CM_Text' height = "50px"></img>
        </div>
            
        </nav>
        <div className = "container page">
            <div className='info'>
            <h1>
                Career<span> Managing</span>App
            </h1>
            <p>
                hello world

            </p>
            <button className='btn btn-hero'>Login/Register</button>
            </div>
        </div>
    </main>
  )
}

export default Landing