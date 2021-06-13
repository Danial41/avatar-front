import React, {useState, useEffect} from 'react'

const ProjectsPage = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/projects')
        .then(resp => resp.json())
        .then(data => setProjects(data.data))
    }, [])

    console.log(projects);

    return (
        <div>
            {projects.map((item) => <div>{item.id}</div>)}
        </div>
    )
}

export default ProjectsPage