import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/404.png';
import Wrapper from '../wrappers/ErrorPage';

const Error = () => {
    return (
        <Wrapper className="full-page">
            <div>
                <img src = {img} alt='not found' />
                <p>We can't seem to find the page you're looking for</p>
                <Link to='/' className='btn btn-hero'>Back Home</Link>
            </div>
        </Wrapper>
    )
}

export default Error;