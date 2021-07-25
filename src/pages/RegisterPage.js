import React, {Component} from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import "../styles/form.css";

class Register extends Component {
    state = {
        name: "",
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
        this.setState({name:"", email:"", password:""})
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="form register">
                <label className="form-field">
                <p className="form-label-title">Name:</p>
                    <input 
                        type="text" 
                        name="name" 
                        onChange={this.onInput}
                        required
                        autoComplete="off">
                    </input>
                </label>
                <label className="form-field">
                <p className="form-label-title">Email:</p>
                    <input 
                        type="email" 
                        name="email" 
                        onChange={this.onInput}
                        required
                        autoComplete="off">
                    </input>
                </label>
                <label className="form-field">
                <p className="form-label-title">Password:</p>
                    <input 
                    type="password" 
                    name="password" 
                    onChange={this.onInput}
                    required>

                    </input>
                </label>

                <button type="submit">Register</button>
            </form>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    onSubmit: (creds) => dispatch(authOperations.register(creds))
})

export default connect(null, mapDispatchToProps)(Register)