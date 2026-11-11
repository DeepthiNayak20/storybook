import React from 'react'
import './DropDown.css'

const DropDown = ({
    label,
    options = [],
    value,
    disabled = false,
    placeholder = "Select an option",
    onChange
}) => {
    return (
        <div className="dropdown">
            {label && <label className="dropdownLabel">{label}</label>}

            <select
                className="selectDropdown"
                value={value}
                disabled={disabled}
                onChange={onChange}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.id} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default DropDown