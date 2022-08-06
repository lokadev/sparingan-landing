import React, { useState } from 'react';
import SelectOption from './SelectOption';
import opsiKota from './city';
import { opsiStatus } from './data';
import Form from './UI/Form';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    let navigate = useNavigate();
    const [regisValue, setRegisValue] = useState({name: '', email: '', whatsapp: '', password: ''})
    const [valueKota, setValueKota] = useState({ value: '', label: '' })
    const [valueStatus, setValueStatus] = useState({ value: '', label: '' })
    const {name, email, whatsapp, password} = regisValue
    const {value: city} = valueKota
    const {value: isProfessional} = valueStatus

    const handleSelect = (selectedState, action) => {
        if(action.name === 'kota') {
            setValueKota(selectedState)
        } else {
            setValueStatus(selectedState)
        }
    }

    const handleChange = (e) => {
        setRegisValue(preValue => {
            return {
                ...preValue,
                [e.target.name]: e.target.value
            }
        })
    }

    const registerSubmit = (e) => {
        e.preventDefault()

        // fetch('http://localhost:5000/api/v1/user', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json',  'Accept': 'application/json'},
        //         body: JSON.stringify({
        //             name: name,
        //             email: email,
        //             password: password,
        //             whatsapp: whatsapp,
        //             city: city,
        //             isProfessional: isProfessional
        //         })
        //     }).then(function(response) {
        //         return response.json();
        //     }).then(function(data) {
        //         console.log(data)
        //         if(data.data) {
        //             localStorage.setItem('idUser', data.data._id);
        //             navigate('/')
        //             window.location.reload()
        //         }else if(data.message){
        //           alert("email sudah ada")
        //         }
        //     });

    }

    return (
        <Form className='regis'>
            <div className="regis__form">
                <h1 className="regis__form-title">Sign Up</h1>
                <form action="" className="" onSubmit={registerSubmit}>
                    <div className='input-group'>
                        <input type="text" name='name' id='name' onChange={handleChange} required autoComplete='off' autoFocus='on' placeholder='Masukkan nama anda' />
                        <label htmlFor="name">Nama</label> 
                    </div>
                    <div className='input-group'>
                        <input type="email" name='email' id='email' onChange={handleChange} required autoComplete='off' placeholder='Masukkan email anda' />
                        <label htmlFor="email">Email</label> 
                    </div>
                    <div className='input-group'>
                        <SelectOption handleSelect={handleSelect} classState={'regis__input-select'} placeholder={'Pilih kota'} opsiSelect={opsiKota} name={'kota'} />
                        <label htmlFor="kota">Kota</label> 
                    </div>
                    <div className='input-group'>
                        <SelectOption handleSelect={handleSelect} classState={'regis__input-select'} placeholder={'Pilih status'} opsiSelect={opsiStatus} name={'isProfessional'} />
                        <label htmlFor="status">Status</label> 
                    </div>
                    <div className='input-group'>
                        <input type="text" name='whatsapp' id='wa' onChange={handleChange} required autoComplete='off' placeholder='0812*****' />
                        <label htmlFor="wa">Whatsapp</label> 
                    </div>
                    <div className='input-group'>
                        <input type="password" name='password' id='password' onChange={handleChange} required autoComplete='off' placeholder='●●●●●●●' />
                        <label htmlFor="password">Password</label> 
                    </div>
                    <div className="regis__cta">
                        <button type='submit'>Sign Up</button>
                        <p>Have an account ? <a href='/login'>Sign in</a></p>
                    </div>
                </form>
            </div>
        </Form>
    )
}

export default Register