
import React, { useState, useEffect } from "react";
import Shortener from "./Shortener";
import CallToAction from "./CallToAction";
import { TiDeleteOutline } from "react-icons/ti";
import UrlList from "./UrlList";

// Function to retrieve links from local storage
const getLocalStorage = () => {
    if (!localStorage.getItem("links")) return [];
    return JSON.parse(localStorage.getItem("links"));
};

/**
 * Main component managing URL shortening, link list, and statistics section.
 *
 * @component
 * @example
 * <Main />
 */
export default function Main() {
    // State to manage the list of links
    const [links, setLinks] = useState(getLocalStorage);

    // Effect to update local storage when the links state changes
    useEffect(() => {
        localStorage.setItem("links", JSON.stringify(links));
    }, [links]);

    // Function to add a new link to the list
    function addLink(newItem) {
        setLinks([...links, newItem]);
    }

    // Function to hide all links in the list
    function hideLinks() {
        setLinks([]);
    }

    return (
        <main>
            {/* Shortener component for URL input */}
            <Shortener addLink={addLink} />

            {/* List component to display shortened URLs */}
            <UrlList urlList={links} />

            {/* Button to clear all links */}
            <div className="flex justify-center">
                {links.length > 0 && (
                    <TiDeleteOutline className="btn-cross" onClick={hideLinks} />
                )}
            </div>

            {/* Statistics section */}
            <section className="stats pb-11 lg:pb-20">
                <h3 className="title pb-2">Advanced Statistics</h3>
                <p className="subtitle">
                    Track how many clicks your shortened URLs receive and measure
                    their performance.
                </p>
            </section>

            {/* CallToAction component for prompting users */}
            <CallToAction />
        </main>
    );
}
