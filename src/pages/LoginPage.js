import React, {Component} from 'react';
import {connect} from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import "../styles/form.css";

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    onInput = e => {
        const fieldName = e.target.name;
        const value = e.target.value;
        this.setState({[fieldName]: value})
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({email:"", password:""});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="form login">
                <label className="form-field">
                    <p className="form-label-title">Email:</p>
                    <input type="email" required name="email" onChange={this.onInput}></input>
                </label>
                <label className="form-field">
                    <p className="form-label-title">Password:</p>
                    <input type="password" minLength="3" required name="password" onChange={this.onInput}></input>
                </label>

                <button type="submit">Log in</button>
            </form>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    onSubmit: (creds) => dispatch(authOperations.login(creds))
})

export default connect(null, mapDispatchToProps)(Login)