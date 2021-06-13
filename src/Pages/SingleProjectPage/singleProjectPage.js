import React, {useEffect, useState} from 'react'

import {URL} from '../../utils/url.helper'

const SingleProjectPage = (props) => {

    const [project, setProject] = useState([])

    fetch(`${URL}projects/${props.match.params.id}`)
    .then(res => res.json())
    .then(data => setProject(data.data))
    .catch(err => console.log(err))

    return (
        <div>
            <img src={project.image} />
            <div>Название: {project.name}</div>
            <div>Отрасль: {project.option}</div>
            <div>Описание: {project.description}</div>
        </div>
    )
}

export default SingleProjectPage