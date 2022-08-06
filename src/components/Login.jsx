import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './UI/Form';

const Login = () => {
    let navigate = useNavigate();
    const [loginValue, setLoginValue] = useState({email: '', password: ''})
    const {email, password} = loginValue

    const handleChange = e => {
        setLoginValue(preValue => {
            return {
                ...preValue,
                [e.target.name]: e.target.value
            }
        })
    }

    const loginSubmit = (e) => {
        e.preventDefault()

        // fetch('http://localhost:5000/api/v1/login', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json',  'Accept': 'application/json'},
        //         body: JSON.stringify({
        //             email: email,
        //             password: password,
        //         })
        //     }).then(function(response) {
        //         return response.json();
        //     }).then(function(data) {
        //         if(data.user) {
        //             localStorage.setItem('idUser', data.user[0]._id);
        //             navigate('/')
        //             window.location.reload()
        //         } else {
        //             alert('Email / Password Anda Salah')
        //         }
        //     });
    }
    
    return (
        <Form className="login">
            <div className="login__form">
                <h1 className="login__form-title">Sign In</h1>
                <form action="" className="" onSubmit={loginSubmit}>
                    <div className='input-group'>
                        <input type="email" name='email' id='email' onChange={handleChange} required autoComplete='off' autoFocus='on' placeholder='Masukkan email anda' />
                        <label htmlFor="email">Email</label> 
                    </div>
                    <div className='input-group'>
                        <input type="password" name='password' id='password' onChange={handleChange} required autoComplete='off' placeholder='●●●●●●●' />
                        <label htmlFor="password">Password</label> 
                    </div>
                    <div className="login__cta">
                        <button type='submit'>Sign In</button>
                        <p>Don't have an account ? <a href='/register'>Sign up now</a></p>
                        <a href="/forgot">Forgot your password ?</a>
                    </div>
                </form>
            </div>
        </Form>
    )
}

export default Login