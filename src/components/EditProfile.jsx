import React, { useState } from 'react';
import SelectOption from './SelectOption';
import user from '../asset/Image/Image_Profil.png';
import opsiKota from './city';

const EditProfile = () => {
    const [profile, setProfil] = useState({username: 'Rangga Lesmana', status: 'Profesional', kota: 'Bandung', wa: '08123456789', email: 'john@gmail.com'})
    const {username, status, kota, wa, email} = profile
    const [defaultStatus, setDefaultStatus] = useState({ value: 'profesional', label: 'Profesional' })
    const [defaultCity, setDefaultCity] = useState({ value: 'bandung', label: 'Bandung' })
    const opsiStatus = [
        { value: 'profesional', label: 'Profesional' },
        { value: 'amatir', label: 'Amatir' },
    ];

    const handleChange = (e) => {
        setProfil(preValue => {
            return {
                ...preValue,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSelect = (selectedState, action) => {
        if(action.name === 'status') {
            setDefaultStatus(selectedState)
        } else {
            setDefaultCity(selectedState)
        }
        console.log(action.name);
        console.log(selectedState);
    }

    return (
        <div className="profil">
            <div className="profil__info">
                <img src={user} alt={username} />
                <div className='profil__info-detail'>
                    <h1>{username}</h1>
                    <div>
                        <h2 className='profil__info-status'>{status}</h2>
                        <span>●</span>
                        <h2 className='profil__info-kota'>{kota}</h2>
                    </div>
                </div>
            </div>
            <div className="profil__input">
                <form action="" className='profil__form'>
                    <div className="profil__input-group">
                        <label htmlFor="username">Nama</label>
                        <input type="text" name='username' value={username} id='username' onChange={handleChange}/>
                    </div>
                    <SelectOption handleSelect={handleSelect} classState={'profil__input-group'} defaultState={defaultStatus} opsiSelect={opsiStatus} name={'status'} label={'Status Pemain'} />
                    <SelectOption handleSelect={handleSelect} classState={'profil__input-group'} defaultState={defaultCity} opsiSelect={opsiKota} name={'kota'} label={'Kota'}/>
                    <div className="profil__input-group">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input type="text" name='wa' value={wa} id='whatsapp' onChange={handleChange}/>
                    </div>
                    <div className="profil__input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' value={email} id='email' onChange={handleChange}/>
                    </div>
                    <div className="profil__btn">
                        <button className="profil__btn-submit" type='button' name='save'>Simpan Perubahan</button>
                        <button className="profil__btn-cancel" name='cancel' >Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile