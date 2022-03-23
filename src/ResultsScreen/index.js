import React from "react";
import Navigation from "../Navigation";
import SearchBar from "../SearchBar";
import Results from "./Results";
import "./Results.css";

const ResultsScreen = () => {
    return (
        <>
            <Navigation/>

            <div className="mt-4 d-flex justify-content-center">
                <div className="w-50">
                    <SearchBar/>
                </div>
            </div>

            <div className="mt-4">
                <Results/>
            </div>





        </>
    )



}

export default ResultsScreen;

