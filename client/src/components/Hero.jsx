
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import heroImage from '../images/illustration-working.svg';

/**
 * Main component representing the hero section with a title, subtitle, and image.
 *
 * @component
 * @example
 * <Main />
 */
export default function Main() {
    return (
        <section className="hero py-6 lg:pt-7">
            <div className='hero-inner grid gap-7 lg:gap-0 grid-cols-1'>
                <picture className="hero-image pl-6 lg:pl-0">
                    <img src={heroImage} alt="Illustration of a person working on a computer" />
                </picture>
                <div className="site-desc flex flex-col justify-center gap-6 lg:gap-5">
                    <h1 className="title text-4xl text-center">Url Shortening Made Easy</h1>
                    <p className="subtitle">
                        Shortening your URL makes it easier to share on social media, email, text messages, and more.
                    </p>
                </div>
            </div>
        </section>
    );
}

// Type checking for props using PropTypes
Main.propTypes = {};
