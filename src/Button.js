import React from 'react'

export default function Button({value,updateTotal}) {
    
    return (
        <button 
            onClick={updateTotal}
            value={value}
        >
        {value}
        </button>
    )
}
