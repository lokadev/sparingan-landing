import React from "react";
import logo from '../asset/icon/Logo_Sportgather.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <span className="footer__copyright">@copyright2022</span>
            <a href="/"><img src={logo} alt="logo_sportgather" className="footer__logo" /></a>
        </footer>
    )
}

export default Footer