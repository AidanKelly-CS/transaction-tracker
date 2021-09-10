import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import './Modal.css';

export default function Modal(props) {
    
    const [modalOpen,setModalOpen] = useState(false);

    useEffect(() => {
        setModalOpen(props.open)
    }, [props.open]) 
    
    function closeModal(){
        props.close();
        setModalOpen(false);
    }
    
    let modalClasses = classNames({
        "show": modalOpen,
        "modal":true
    });

    return (
        <div className={modalClasses}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                {props.children}
            </div>

        </div>
    )
}
