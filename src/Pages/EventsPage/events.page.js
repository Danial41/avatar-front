import React, {useState, useEffect} from 'react'

import EventItem from '../../Components/EventItem/eventItem'
import {URL} from '../../utils/url.helper'

const EventsPage = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch(`${URL}news`)
        .then(resp => resp.json())
        .then(data => setEvents(data.data))
    }, [])

    return (
        <div className='projects-keeper'>
            {events.map((item) => {
                return <EventItem image={item.image} title={item.title} date_and_time={item.date_and_time} key={item.id} id={item.id}/>
            })}
        </div>
    )
}

export default EventsPage