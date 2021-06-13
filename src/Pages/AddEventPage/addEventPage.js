import React, {useState} from 'react'

import {connect} from 'react-redux'

import {LOCAL_URL, URL} from '../../utils/url.helper'

const AddEventPage = (props) => {

    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [dateAndTime, setDateAndTime] = useState();
    const [description, setDescription] = useState();
    const [warning, setWarning] = useState();

    const createEventHandler = (e) => {
        e.preventDefault()

        const formData = new FormData();
        if (image) formData.append('image', image);
        if (props.user) formData.append('user', props.user.id)
        if (title) formData.append('title', title)
        if (description) formData.append('description', description)
        if (dateAndTime) formData.append('date_and_time', dateAndTime)

        fetch(`${URL}news`, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            setWarning(data.message)
          } else {
            // props.history.push('./projects')
            console.log(data);
          }
        })
        .catch(err => console.log(err));
    }

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          setImage(img);
        }
    };

    return (
        <div>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Создание События</h3>
                    <form onSubmit={createEventHandler}>

                        <div>
                          <span className="warning">{warning}</span>
                        </div>

                        <div className="form-group">
                          <label>Название события</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Назовите событие"
                            name="ешеду"
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label>Описание проекта</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Опишите проект"
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label>Время проведения</label>
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Опишите проект"
                            name="date_and_time"
                            onChange={(e) => setDateAndTime(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label>Картинка</label>
                          <input
                            type="file"
                            className="form-control"
                            placeholder="Грузи пикчу"
                            name="image"
                            onChange={onImageChange}
                          />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">
                          Создать
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(AddEventPage);