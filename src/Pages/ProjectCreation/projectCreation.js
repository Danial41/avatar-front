import React, { useState } from 'react'

import {connect} from 'react-redux'

import {URL, LOCAL_URL} from '../../utils/url.helper'


const ProjectCreationPage = (props) => {

    const [option, setOption] = useState('космос');
    const [image, setImage] = useState();
    const [user, setUser] = useState();
    const [warning, setWarning] = useState();

    const createProjectHandler = (e) => {
        e.preventDefault()

        console.log(image, option);

        const formData = new FormData();
        if (option) formData.append('option', option.toLowerCase());
        if (image) formData.append('image', image);
        if (props.user) formData.append('user', props.user.id)

        fetch(`${LOCAL_URL}projects`, {
            mode: "no-cors",
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
          if (data.message) {
            setWarning(data.message)
          } else {
            // clearFields()
           console.log(data);
          }
        })
        .catch(err => console.log(err));
    }

    const clearFields = () => {
        setOption();
        setImage();
    }

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          setImage(img);
        }
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setOption(value);
    };

    return (
        <div>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Создание проекта</h3>
                    <form onSubmit={createProjectHandler}>

                        <div>
                          <span className="warning">{warning}</span>
                        </div>

                        <label>Отрасль</label>
                        <select className="form-group" onChange={handleChange}>
                            <option value="космос" name="option">Космос</option>
                            <option value="авиация" name="option">Авиция</option>
                            <option value="сельское_хозяйство">Сельское хозяйство</option>
                            <option value="биотех">Биотех</option>  
                        </select>



                        <div className="form-group">
                          <label>Аватар</label>
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

export default connect(mapStateToProps)(ProjectCreationPage);