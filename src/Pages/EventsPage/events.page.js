import React from 'react'

const EventsPage = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch(`${URL}news`)
        .then(resp => resp.json())
        .then(data => setProjects(data.data))
    }, [])

    return (
        <div className='projects-keeper'>
            {projects.map((item) => {
                return <ProjectItemPage image={item.image} title={item.title} date_and_time={item.date_and_time} key={item.id} id={item.id}/>
            })}
        </div>
    )
}

export default EventsPage