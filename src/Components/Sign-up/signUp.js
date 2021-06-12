import React, { Component } from "react";
// import "./signUp.css";

// import { connect } from "react-redux";
// import { setUser } from "../../redux/user/user.actions";

class SignUp extends Component {
  state = {
    fio: "",
    email: "",
    warning: "",
  };

  register = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/users", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          this.setState({ warning: data.error });
        } else {
          console.log(data.user);
          localStorage.setItem("user", JSON.stringify(data));
          this.setState({
            fio: "",
            email: "",
            password: "",
            warning: "Account was created",
          });
          setTimeout(() => {
            this.setState({ warning: "" });
            // this.props.history.push("/weekdays");
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
          <form onSubmit={this.register}>
            <h3>Регистрация</h3>

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

            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;