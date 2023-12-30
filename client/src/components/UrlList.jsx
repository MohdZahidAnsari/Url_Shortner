
import React from "react";

/**
 * UrlList component for displaying a list of shortened URLs.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Array} props.urlList - List of URLs to display.
 * @example
 * <UrlList urlList={urlList} />
 */
export default function UrlList(props) {
    const urlList = props.urlList;

    return (
        <ul className="list grid grid-cols-1 gap-5">
            {urlList.map((element, index) => (
                <li className="list-item" key={index} id={index}>
                    <div className="links">
                        {/* Display the full URL with a maximum length of 100 characters */}
                        <a href={element.fullUrl} className="full-url">
                            {element.fullUrl.slice(0, 100)}
                        </a>
                        {/* Display the shortened URL */}
                        <a href={element.shortUrl} className="short-url font-medium">
                            {element.shortUrl}
                        </a>
                    </div>
                    {/* Button to copy the shortened URL to the clipboard */}
                    <button
                        type="button"
                        className="btn-cta btn-copy"
                        onClick={() => navigator.clipboard.writeText(element.shortUrl)}
                    >
                        COPY
                    </button>
                </li>
            ))}
        </ul>
    );
}
