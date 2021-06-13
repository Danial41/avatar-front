import React, {useEffect, useState} from 'react'

import {URL} from '../../utils/url.helper'

const SingleProjectPage = (props) => {

    const [event, setEvent] = useState([])

    fetch(`${URL}projects/${props.match.params.id}`)
    .then(res => res.json())
    .then(data => setEvent(data.data))
    .catch(err => console.log(err))

    return (
        <div>
            <img src={event.image} />
            <div>Название: {event.title}</div>
            <div>Дата: {event.option}</div>
            <div>Описание: {event.description}</div>
        </div>
    )
}

export default SingleProjectPage