import { faChartBar, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Navbar.css';

import {
    Link
  } from "react-router-dom";
  

export default function Navbar() {

    const iconSize = "3x";

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <FontAwesomeIcon className="icon" icon={faPlus} color={"white"} size={iconSize} />
                        <span className="link-text">Create Transaction</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/view-transactions" className="nav-link">
                        <FontAwesomeIcon className="icon" icon={faShoppingCart} color={"white"} size={iconSize} />
                        <span className="link-text">View Transactions</span>
                    </Link>
                    
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <FontAwesomeIcon className="icon" icon={faChartBar} color={"white"} size={iconSize} />
                        <span className="link-text">Predictions</span>
                    </a>
                </li>                
            </ul>
        </nav>
    )
};
