import React, { Component } from "react";

import { connect } from "react-redux";
import { setUser } from "../../redux/user/user.actions";

import {LOCAL_URL, URL} from '../../utils/url.helper'

class SignUp extends Component {
  state = {
    fio: "",
    email: "",
    snils: "",
    phone_number: "",
    social_media: "",
    competence: "",
    about_me: "",
    image: null,
    warning: "",
  };

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: img
      });
    }
  };

  register = (e) => {
    e.preventDefault();

    const formData = new FormData();
        if (this.state.fio) formData.append('fio', this.state.fio);
        if (this.state.email) formData.append('email', this.state.email);
        if (this.state.snils) formData.append('snils', this.state.snils.toLowerCase());
        if (this.state.phone_number) formData.append('phone_number', this.state.phone_number);
        if (this.state.social_media) formData.append('social_media', this.state.social_media);
        if (this.state.competence) formData.append('competence', this.state.competence);
        if (this.state.about_me) formData.append('about_me', this.state.about_me);
        if (this.state.image) formData.append('image', this.state.image);

    console.log(formData.values());

    fetch(`${URL}users`, {
      method: "POST",
      mode: "cors",      
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          this.setState({ warning: data.error });
        } else {
          console.log(data.data);
          this.props.setUser(data.data);
          console.log(this.props);
          this.setState({
            fio: "",
            email: "",
            password: "",
            snils: "",
            phone_number: "",
            social_media: "",
            competence: "",
            about_me: "",
            image: "",
            warning: "Account was created",
          });
          setTimeout(() => {
            this.setState({ warning: "" });
            this.props.history.push(`/profile/${data.data.id}`);
          }, 2000);
        }
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
            <h3>Регистрация</h3>
          <form onSubmit={this.register}>

            <div>
              <span className="warning">{this.state.warning}</span>
            </div>

            <div className="form-group">
              <label>ФИО</label>
              <input
                type="text"
                className="form-control"
                placeholder="ФИО"
                name="fio"
                value={this.state.fio}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>СНИЛС</label>
              <input
                type="text"
                className="form-control"
                placeholder="СНИЛС"
                name="snils"
                value={this.state.snils}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Номер телефона</label>
              <input
                type="text"
                className="form-control"
                placeholder="Введите номер телефона"
                name="phone_number"
                value={this.state.phone_number}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Соц сети</label>
              <input
                type="text"
                className="form-control"
                placeholder="ссылка на соц сети"
                name="social_media"
                value={this.state.social_media}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Компетенции</label>
              <input
                type="text"
                className="form-control"
                placeholder="Компетенции"
                name="competence"
                value={this.state.competence}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Обо мне</label>
              <input
                type="text"
                className="form-control"
                placeholder="Напишите что-нибудь о себе."
                name="about_me"
                value={this.state.about_me}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Аватар</label>
              <input
                type="file"
                className="form-control"
                placeholder="Грузи пикчу"
                name="image"
                onChange={this.onImageChange}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (value) => dispatch(setUser(value)),
});

export default connect(null, mapDispatchToProps)(SignUp);