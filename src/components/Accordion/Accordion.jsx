import React, { useState } from 'react'
import './Accordion.css'

const Accordion = ({
    items = [],
    type = "single",
    disabled = false
}) => {
    const [openItems, setOpenItems] = useState([])

    const handleToggle = (id) => {
        if (disabled) return;
        if (type === "single") {
            setOpenItems((prev) =>
                prev.includes(id) ? [] : [id]
            );
        } else {
            setOpenItems((prev) =>
                prev.includes(id)
                    ? prev.filter((item) => item !== id)
                    : [...prev, id]
            );
        }
    }
    return (
        <div className="accordion">
            {items.map((item) => {
                const isOpen = openItems.includes(item.id);
                return (
                    <div className="accordion-item" key={item.id}>
                        <button
                            className='accordion-button'
                            onClick={() => handleToggle(item.id)}
                            disabled={disabled}
                            aria-expanded={isOpen}
                        >
                            <span>{item.title}</span>
                            <span className="accordion-icon">
                                {isOpen ? "−" : "+"}
                            </span>
                        </button>
                        {isOpen && (
                            <div className="accordion-content">
                                {item.content}
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Accordion