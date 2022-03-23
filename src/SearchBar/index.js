import React from "react";

const SearchBar = () => {
    return (
        <div className="input-group ib-search-outline">
            <input className="form-control ib-input-field" placeholder="Find your books..."/>
            <div className="input-group-append d-flex align-items-center me-3">
                <button className="input-group-text ib-search-btn h-75">Search</button>
            </div>
        </div>
    )
}

export default SearchBar;