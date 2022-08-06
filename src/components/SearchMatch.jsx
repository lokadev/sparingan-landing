import React, { useState } from 'react';
import SelectOption from './SelectOption';
import { opsiOlahraga, opsiStatus } from './data';
import opsiKota from './city';

const SearchMatch = ({handleSubmit, className, selectClassName}) => {
    const [valueCabor, setValueCabor] = useState({ value: '', label: '' })
    const [valueStatus, setValueStatus] = useState({ value: '', label: '' })
    const [valueKota, setValueKota] = useState({ value: '', label: '' })

    const handleSelect = (selectedState, action) => {
        if(action.name === 'cabor') {
            setValueCabor(selectedState)
        } else if(action.name === 'status') {
            setValueStatus(selectedState)
        } else {
            setValueKota(selectedState)
        }
        console.log(selectedState);
    }
    
    return (
        <form action="" className={className} onSubmit={handleSubmit}>
            <SelectOption handleSelect={handleSelect} classState={selectClassName} placeholder={'Cabang Olahraga'} opsiSelect={opsiOlahraga} name={'cabor'} />
            <SelectOption handleSelect={handleSelect} classState={selectClassName} placeholder={'Lokasi Match'} opsiSelect={opsiKota} name={'lokasi'} />
            <SelectOption handleSelect={handleSelect} classState={selectClassName} placeholder={'Status Pemain'} opsiSelect={opsiStatus} name={'status'} />
            <button type='submit' className="form__btn">Cari</button>
        </form>
    )
}

export default SearchMatch