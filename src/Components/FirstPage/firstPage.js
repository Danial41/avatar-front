import React from 'react'

import firstPicture from '../../assets/pictures/pic.png'

const FirstPage = () => {
    return (
        <div>
            <img src={firstPicture} />
            <button className='comm-btn'>Вступить в сообщество</button>
        </div>
    )
}

export default FirstPage