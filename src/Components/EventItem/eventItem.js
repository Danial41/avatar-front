import React from 'react'

import {Link} from 'react-router-dom'

const EventItem = (props) => {

    const {image, title, id, date_and_time} = props

    return (
        <div className='project-wrapper'>
            <Link to={`/project/${id}`}>
                <span id='project-title'>События</span>
                <img id='project-pic' src={image} />
                <div className='description-wrapper'>
                    <div>Название: {title}</div>
                    <div>Дата {date_and_time}</div>
                </div>
            </Link>
        </div>
    )
}

export default EventItem