import React from "react";
import { Link } from "react-router-dom"
import { AuthMenu } from "./AuthMenu";
import UserMenu from "./UserMenu";
import '../styles/header.css';

export const AppBar = ({isAuthenticated}) => (
    <header className="header-block">
        <div className="nav-block">
            <Link to="/" className="button-nav">Main Page</Link>
            <Link to="/contacts" className="button-nav">Contacts</Link>
        </div>
        {!isAuthenticated ? <AuthMenu/> : <UserMenu/>}
    </header>
)