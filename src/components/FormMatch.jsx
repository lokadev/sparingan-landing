import React, { useState } from 'react';
// import opsiKota from './city';
import location from '../asset/icon/Location_Icon.svg';
import { opsiOlahraga, opsiStatus } from './data';
import SelectOption from './SelectOption';
import Map from './Map';

const FormMatch = () => {
    const [valueCabor, setValueCabor] = useState({ value: '', label: '' })
    const [valueStatus, setValueStatus] = useState({ value: '', label: '' })
    const [displayLocation, setDisplayLocation] = useState('')
    const [city, setCity] = useState('')
    const [matchValue, setMatchValue] = useState({jumlahPemain: '', deskripsiMatch: '', tglMatch: '', hargaMatch: ''})
    const [popUp, setPopUp] = useState(false)
    const {jumlahPemain, deskripsiMatch, tglMatch, hargaMatch} = matchValue

    const handleSelect = (selectedState, action) => {
        if(action.name === 'cabor') {
            setValueCabor(selectedState)
        } else {
            setValueStatus(selectedState)
        }
        console.log(selectedState);
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setMatchValue(preValue => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const handleLocation = (city, displayLocation) => {
        setDisplayLocation(displayLocation)
        setCity(city)
        
    }

    const handlePopUp = () => {
        setPopUp(true)
    }

    const handlePopIn = (state = false) => {
        setPopUp(state)
        setMatchValue({jumlahPemain: '', deskripsiMatch: '', tglMatch: '', hargaMatch: ''})
    }

    return (
        <div className="formMatch">
            <h1 className="formMatch__title">Form Pertandingan</h1>
            <div className="formMatch__input">
                <form action="" className="formMatch__form">
                    <SelectOption handleSelect={handleSelect} classState={'formMatch__input-group'} placeholder={'Pilih Cabang Olahraga'} opsiSelect={opsiOlahraga} name={'cabor'} label={'Cabang Olahraga'} />
                    <SelectOption handleSelect={handleSelect} classState={'formMatch__input-group'} placeholder={'Pilih Status Pemain'}  opsiSelect={opsiStatus} name={'status'} label={'Status Pemain'} />
                    <div className="formMatch__input-group">
                        <label htmlFor="jumlahPemain">Pemain yang Dibutuhkan</label>
                        <input type="number" min='1' step='1' name='jumlahPemain' value={jumlahPemain} id='jumlahPemain' placeholder='Jumlah Pemain (Orang)' onChange={handleChange} required autoComplete='off'/>
                    </div>
                    <div className="formMatch__input-group">
                        <label htmlFor="deskripsi">Deskripsi Pertandingan</label>
                        <textarea name="deskripsiMatch" value={deskripsiMatch} placeholder='Masukkan Deskripsi' id="deskripsi" cols="20" rows="5" onChange={handleChange} required autoComplete='off'></textarea>
                    </div>
                    <div className="formMatch__input-group">
                        <label htmlFor='lokasi'>Lokasi Pertandingan</label>
                        <div className="formMatch__location" onClick={handlePopUp}>
                            {displayLocation || 'Lokasi Pertandingan'}
                            <img src={location} />
                        </div>
                    </div>
                    <div className="formMatch__input-group">
                        <label htmlFor="tanggal">Tanggal Pertandingan</label>
                        <input type="date" name='tglMatch' value={tglMatch} id='tanggal' placeholder='Tanggal Pertandingan' onChange={handleChange} required autoComplete='off'/>
                    </div>
                    <div className="formMatch__input-group">
                        <label htmlFor="harga">Biaya Pertandingan per Orang</label>
                        <input type="number" min='5000' step='500' name='hargaMatch' placeholder='Biaya Pertandingan' value={hargaMatch} id='harga' onChange={handleChange} required autoComplete='off'/>
                    </div>
                    <div className="formMatch__btn">
                        <button className="formMatch__btn-submit" type='button' name='save'>Simpan</button>
                        <button className="formMatch__btn-cancel" name='cancel' >Cancel</button>
                    </div>
                </form>
            </div>

            <Map popUp={popUp} handleLocation={handleLocation} handlePopIn={handlePopIn} />
            <div className={`overlay ${popUp && 'overlayPopUp'}`} popUp={popUp} onClick={() => handlePopIn(false)}></div>
        </div>
    )
}

export default FormMatch