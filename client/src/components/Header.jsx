
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import logo from '../images/logo.svg';

/**
 * Header component displaying the logo.
 *
 * @component
 * @example
 * <Header />
 */
export default function Header() {
    return (
        <header className="header padding-xy">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </header>
    );
}

// Type checking for props using PropTypes
Header.propTypes = {};
