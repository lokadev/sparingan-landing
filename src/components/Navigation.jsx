import React from 'react';
import { NavLink } from "react-router-dom";
import NavProfile from './NavProfile';
import logo from '../asset/icon/Logo_Sportgather.svg';

const Navigation = () => {
    let detailUser = localStorage.getItem('idUser')
    return (
        <div className="navigation">
            <div className="navigation__group">
                <a href="/"><img src={logo} alt="" className="navigation__logo" /></a>
                <NavLink to='/' activeClassName="active" className="navigation__link" exact>Home</NavLink>
                <NavLink to='/' activeClassName="active" className="navigation__link" exact>Pertandingan</NavLink>
                {/* <a href="/" className="navigation__link">Home</a>
                <a href="/pertandingan" className="navigation__link">Pertandingan</a> */}
            </div>
            { detailUser ? <NavProfile /> : <a href="/login" className="navigation__btn-sign">Sign in / Sign Up</a> }
        </div>
    )
}

export default Navigation