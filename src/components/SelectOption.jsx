import React, { useState } from 'react';
import Select from 'react-select';

const SelectOption = ({handleSelect, defaultState, label, name, opsiSelect, classState, placeholder}) => {
    return (
        <div className={classState}>
            <label>{label}</label>
            <Select
                onChange={handleSelect}
                options={opsiSelect}
                className={'select-input'}
                placeholder={placeholder}
                value={defaultState}
                name={name}
            />
        </div>
    )
}

export default SelectOption