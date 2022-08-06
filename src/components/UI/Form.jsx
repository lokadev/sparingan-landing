import React, { useState } from 'react';
import logoWeb from './Logo_Website.svg';

const Form = ({children, className}) => {
    return (
        <div className={`form ${className}`}>
            <div className="form__boxTitle">
                <img src={logoWeb} alt="" className="form__logo" />
                <h1 className="form__title">Cari Lawan Terbaikmu</h1>
            </div>
            {children}
        </div>
    )
}

export default Form