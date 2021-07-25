import React from "react";
import {connect} from 'react-redux'
import {logout} from '../redux/auth/auth-operations'
import {getUserName} from '../redux/auth/auth-selectors'
import '../styles/header.css'

const UserMenu = ({name,onLogOutClick}) => (
    <div className="user-block">
        <p>Welcome, {name}!</p>
        <button type="button" onClick={onLogOutClick} className="button">Log out</button>
    </div>
)

const mapStateToProps = state => ({
    name: getUserName(state)
})

const mapDispatchToProps = dispatch => ({
    onLogOutClick: () => dispatch(logout()),
})

export default connect(mapStateToProps,mapDispatchToProps)(UserMenu)