import React from 'react'

import firstPicture from '../../assets/pictures/pic.png';

import { Link } from 'react-router-dom';

const FirstPage = () => {
    return (
        <div>
            <img src={firstPicture} />
            <Link to='/sign-up'>
                <button className='comm-btn'>Вступить в сообщество</button>
            </Link>
        </div>
    )
}

export default FirstPage