import React, {useState, useEffect} from 'react'

import {URL} from '../../utils/url.helper'

import ProjectItemPage from '../../Components/ProjectsPageItems/projectPageItems'

const ProjectsPage = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch(`${URL}projects`)
        .then(resp => resp.json())
        .then(data => setProjects(data.data))
    }, [])

    return (
        <div className='projects-keeper'>
            {projects.map((item) => {
                return <ProjectItemPage image={item.image} name={item.name} option={item.option} user={item.user.fio} key={item.id} id={item.id}/>
            })}
        </div>
    )
}

export default ProjectsPage