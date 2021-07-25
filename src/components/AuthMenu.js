import React from "react";
import { Link } from "react-router-dom"
import '../styles/header.css'

export const AuthMenu = () => (
    <div className="auth-block">
        <Link to="/users/login" className="button">Login</Link>
        <Link to="/users/signup" className="button">Register</Link>
    </div>
)