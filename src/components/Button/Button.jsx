import React from 'react'
import './Button.css'

const Button = ({ label, variant = "primary", onclick, disabled = false, icon, size = "medium" }) => {
    return (
        <button className={`btn ${variant} ${size} ${disabled ? 'disabled' : ''}`} onClick={onclick} disabled={disabled}>
            {icon && <span className="icon">{icon}</span>}
            {label && <span className="label">{label}</span>}
        </button>
    )
}

export default Button