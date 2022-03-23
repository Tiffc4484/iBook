import React from "react";
import SearchBar from "../SearchBar";

const HomeHeader = () => {
    return (
        <div className="mt-4 d-flex justify-content-center">
            <div className="d-flex flex-column text-center w-50">
                <div>
                    <span className="ib-home-header">Finding the next book to read is easier now!</span>
                </div>
                <div className="mt-4">
                    <SearchBar/>
                </div>
                <div className="mt-2">
                    <img src="/images/homeHeader.png" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;