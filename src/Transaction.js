import React from 'react'

export default function Transaction({category, total}) {
    return (
        <div>
            <p>{category}</p>
            <p>{total}</p>
        </div>
    );
}
