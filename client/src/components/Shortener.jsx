
import React, { useState } from "react";

const base = 'https://littleurl.onrender.com';

/**
 * Shortener component for inputting and shortening URLs.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Function} props.addLink - Function to add a new link.
 * @example
 * <Shortener addLink={addLink} />
 */
export default function Shortener(props) {
    // State to manage the input value
    const [input, setInput] = useState("");

    // Function to handle input changes
    function handleInputChange(e) {
        const { value } = e.target;
        setInput(value);
    }

    // Function to handle the click event to shorten the link
    async function handleClick() {
        if (input === '') return;

        try {
            const response = await fetch(`${base}/api/short-url`, {
                method: 'POST',
                body: JSON.stringify({ fullUrl: input }),
                headers: {
                    "Content-type": "application/json"
                },
            });

            const resObject = await response.json();
            if (!response.ok) {
                console.log('response object', resObject);
                alert(resObject.msg);
                setInput("");
                return;
            }

            const newItem = {
                fullUrl: input,
                shortUrl: resObject.shortUrl
            };
            // Call the addLink function from props to update the parent component's state
            props.addLink(newItem);
            setInput("");
        } catch (err) {
            console.log(err);
            alert('Server Error');
            setInput("");
        }
    }

    return (
        <div className="shortener rounded-lg">
            <form>
                <div className="input-area">
                    <input
                        type="url"
                        placeholder="Shorten a link here..."
                        id="input"
                        onChange={handleInputChange}
                        value={input}
                    />
                    {/* Display a warning message if the input is empty */}
                    {input === '' && <p className="warning">Please add a link</p>}
                </div>
                <button className="btn-cta" type="button" onClick={handleClick}>
                    Shorten Link
                </button>
            </form>
        </div>
    );
}
