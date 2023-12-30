
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking

/**
 * CallToAction component for prompting users to shorten their links.
 *
 * @component
 * @example
 * <CallToAction />
 */
export default function CallToAction({ onStartClick }) {
    // Ensure the onStartClick prop is a function
    if (typeof onStartClick !== 'function') {
        console.error('The "onStartClick" prop must be a function.');
    }

    /**
     * Handles the click event on the "Get Started" button.
     * Invokes the onStartClick prop if provided.
     */
    const handleStartClick = () => {
        if (onStartClick) {
            onStartClick();
        }
    };

    return (
        <section className="cta padding-xy flex flex-col justify-center items-stretch gap-4">
            <h2 className='text-white font-bold text-2xl text-center'>Shorten Your Link</h2>
            <button
                type="button"
                className="btn-cta rounded-full self-center"
                onClick={handleStartClick} // Attach the click event handler
            >
                Get Started
            </button>
        </section>
    );
}

// Type checking for props using PropTypes
CallToAction.propTypes = {
    onStartClick: PropTypes.func, // onStartClick should be a function
};

// Default prop values
CallToAction.defaultProps = {
    onStartClick: () => {}, // Default to an empty function if not provided
};
