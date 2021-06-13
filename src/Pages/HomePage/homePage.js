import React from 'react'

import HomePagePic from "../../assets/pictures/home.jpg";
import HomePagePic2 from "../../assets/pictures/home2.jpg";

import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <img src={HomePagePic} />
            <div className='btn-panel'>
                <div className='top-btn-panel'>
                    <span>Всё</span>
                    <span>Проекты</span>
                    <span>Мероприятия</span>
                </div>
                <div id='blackline'></div>
                <div className='bottom-nav-panel'>
                    <Link to='/project'>
                        <span>Добавить проект</span>
                    </Link>
                    <Link to='/event'>
                        <span>Добавить мероприятие</span>
                    </Link>
                    <span>Добавить новость</span>
                </div>
            </div>
            <img src={HomePagePic2} />
        </div>
    )
}

export default HomePage