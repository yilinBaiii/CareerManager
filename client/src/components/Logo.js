import Div from "../wrappers/Logo" 
import walkerLogo from "../images/WalkerLogo.png"
import CM_Text from "../images/CM_Text.png"
import React from "react"

const Logo = () => {
    return (
        <Div >
            <div>
                <img src={walkerLogo} alt='walkerLogo'></img>
                <img src={CM_Text} alt='CM_Text'></img>
            </div>   
        </Div>
    ) 
}


export default Logo;
