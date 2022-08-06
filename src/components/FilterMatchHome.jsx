import React from "react";
import { useState } from "react";
import { opsiOlahraga, opsiStatus } from "./data";
import arrowDown from '../asset/icon/bx-chevron-down.svg';
import location from '../asset/icon/bx-map.svg';
import check from '../asset/icon/bx-check.svg';
import FilterLokasi from "./FilterLokasi";

const FilterMatchHome = ({classname}) => {
    const type = ['Cabang Olahraga', 'Cari Lokasi', 'Status Pemain']
    const [isOverlay, setOverlay] = useState(false)
    const [filterValue, setFilterValue] = useState({cabor: [], status: [], lokasi: ''})
    const [allCabor, setAllCabor] = useState(false)
    const [allStatus, setAllStatus] = useState(false)
    const {cabor, status, lokasi} = filterValue

    const handleToggleIconArrow = (index) => {
        const iconArr = [...document.querySelectorAll('.filter__icon')]

        if(index === 0) {
            iconArr[index].classList.toggle('rotateIcon')
        } if(index === 2) {
            iconArr[index].classList.toggle('rotateIcon') 
        }
        // remove rotateIcon from filter__icon that not clicked
        iconArr.forEach((item, i) => {
            if(i !== index) {
                item.classList.remove('rotateIcon')
            }
        })
    }

    const handleToggleFilterBox = e => {
        const formDummy = [...document.querySelectorAll('.form-dummy')]
        const selectedIndex = formDummy.findIndex(item => item === e.target)
        const filterBox = [...document.querySelectorAll('.filter__box')]
        
        if(!filterBox[selectedIndex].classList.contains('fadeIn')) {
            filterBox[selectedIndex].classList.add('fadeIn')
            // remove fadeIn from filter__box that not clicked
            filterBox.forEach((item, i) => {
                if(i !== selectedIndex) {
                    item.classList.remove('fadeIn')
                }
            })
        } else {
            filterBox[selectedIndex].classList.remove('fadeIn')
        }

        handleToggleIconArrow(selectedIndex)
    }

    const handleToggleFilterLokasi = () => {
        const filterBox = [...document.querySelectorAll('.filter__box')]
        filterBox.forEach((item, i) => {
            item.classList.remove('fadeIn')
        })
        document.querySelector('body').classList.toggle('fixBody')
        setOverlay(!isOverlay)
    }


    const handleDisableCheckbox = (name, value) => {
        if(value === 'semua' && name === 'cabor') {
            setAllCabor(!allCabor)
        } if(value === 'semua' && name === 'status') {
            setAllStatus(!allStatus)
        }
    }
    
    const handleAddingLabel = (name, value) => {
        const allCaborLabel = [...document.querySelector('.filter__box-cabor').children].slice(1)
        const allStatusLabel = [...document.querySelector('.filter__box-status').children].slice(1)

        // check if the value = 'semua', remove all value except 'semua' and unchecked all input except 'semua'
        if((name === 'cabor' || name === 'status') && value === 'semua') {
            setFilterValue(preValue => {
                return {
                    ...preValue,
                    [name]: ['semua']
                }
            })
            name === 'cabor' ? allCaborLabel.forEach(el => el.children[0].checked = false) : allStatusLabel.forEach(el => el.children[0].checked = false)
        } else {
            setFilterValue(preValue => {
                return {
                    ...preValue,
                    [name]: [value, ...filterValue[name]]
                }
            })
        }
    }

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        handleDisableCheckbox(name, value)

        if(!filterValue[name].includes(value)) {
            handleAddingLabel(name, value)
        } else {
            setFilterValue(preValue => {
                return {
                    ...preValue,
                    [name]: filterValue[name].filter(item => item !== value)
                }
            })
        }
    }

    return (
        <form className="filter">
            <div className='filter__form'>
                <div className="form-dummy" onClick={handleToggleFilterBox}></div>
                <div className="filter__box-input">
                    <input type="text" className="filter__input" readOnly placeholder='Cabang Olahraga' value={cabor.join(', ')} />
                    <img src={arrowDown} alt="" className="filter__icon" />
                </div>
                <div className="filter__box filter__box-cabor">
                    {opsiOlahraga.map(({value, label, idInput}, i) => {
                        return (
                            <label htmlFor={idInput} key={idInput} className={`${(allCabor && i !== 0) && 'disable'}`}>
                                <input type="checkbox" name="cabor" id={idInput} value={value} onChange={handleChange} disabled={(allCabor && i !== 0) && 'disabled'} hidden />
                                <div className="checkbox">
                                    <img src={check} alt="" />
                                </div>
                                <span className="checkbox-option">{label}</span>
                            </label>
                        )
                    })}
                </div>
            </div>
            <div className='filter__form'>
                <div className="form-dummy" onClick={handleToggleFilterLokasi}></div>
                <div className="filter__box-input">
                    <img src={location} alt="" className="filter__icon filter__icon-location" />
                    <input type="text" className="filter__input" readOnly placeholder='Cari Lokasi' value={lokasi} />
                </div>
                <div className={`filter__box filter__box-lokasi ${isOverlay && 'fadeInLokasi'}`}>
                    <FilterLokasi />
                </div>
            </div>
            <div className='filter__form'>
                <div className="form-dummy" onClick={handleToggleFilterBox}></div>
                <div className="filter__box-input">
                    <input type="text" className="filter__input" readOnly placeholder='Status Pemain' value={status.join(', ')} />
                    <img src={arrowDown} alt="" className="filter__icon" />
                </div>
                <div className="filter__box filter__box-status">
                    {opsiStatus.map(({value, label, idInput}, i) => {
                        return (
                            <label htmlFor={idInput} key={idInput} className={`${(allStatus && i !== 0) && 'disable'}`}>
                                <input type="checkbox" name="status" id={idInput} value={value} onChange={handleChange} disabled={(allStatus && i !== 0) && 'disabled'} hidden />
                                <div className="checkbox">
                                    <img src={check} alt="" />
                                </div>
                                <span className="checkbox-option">{label}</span>
                            </label>
                        )
                    })}
                </div>
            </div>
            <button type='submit' className="filter__btn">Cari</button>
            <div className={`overlayLokasi ${isOverlay && 'lokasiPopUp'}`} onClick={handleToggleFilterLokasi}></div>
        </form>
    )
}

export default FilterMatchHome