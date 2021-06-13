import React from 'react'

const ProjectItemPage = (props) => {

    const {image, option, user} = props

    return (
        <div className='project-wrapper'>
            <span id='project-title'>ПРОЕКТЫ</span>
            <img id='project-pic' src={image} />
            <div className='description-wrapper'>
                <div>Отрасль: {option}</div>
                <div>Автор: {user}</div>
            </div>
        </div>
    )
}

export default ProjectItemPage