import React from "react";
import  './searchbox.css'

const SearchBox = ({ searchChange }) => {
    return (
        <div className="wrapper">
            <input className="searchbox"
            type="search"
            placeholder="search robots"
            onChange={searchChange}
            />
        </div>

    )
}

export default SearchBox