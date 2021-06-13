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

    console.log(projects);

    return (
        <div>
            {projects.map((item) => {
                return <ProjectItemPage image={item.image} name={item.name} option={item.option} user={item.user.fio} />
            })}
        </div>
    )
}

export default ProjectsPage