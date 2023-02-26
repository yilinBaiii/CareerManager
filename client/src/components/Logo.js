import React from 'react'
import walkerLogo from "../images/WalkerLogo.png"
import CM_Text from "../images/CM_Text.png"
import Wrapper from '../wrappers/Logo'

const Logo = () => {
    return (
        <Wrapper>
            <div>
                <img src={walkerLogo} alt='walkerLogo'></img>
                <img src={CM_Text} alt='CM_Text'></img>
            </div>
        </Wrapper>
    )
}

export default Logo